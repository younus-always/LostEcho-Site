require('dotenv').config();
const express = require('express');
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 4000;

// Middleware
app.use(cors({
      origin: [
            "https://lost-echo.netlify.app",
            "http://localhost:5173"
      ],
      credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Token verify middleware function
const verifyToken = (req, res, next) => {
      const token = req.cookies?.token;

      if (!token) {
            return res.status(401).send({ message: "UnAuthorized Access" })
      }

      jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) {
                  res.status(401).send({ message: "UnAuthorized Access" })
            }
            req.user = decoded;
            next()
      })
}

// store cookie option to variable
const cookiesOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV || "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
}

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1aj11.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
      serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
      }
});

async function run() {
      try {
            // Create Database and Collection
            const productsDB = client.db("lostEchoDB").collection("products");
            const RecoverProductsDB = client.db("lostEchoDB").collection("RecoverProducts");

            // auth related api
            app.post('/jwt', (req, res) => {
                  const user = req.body;
                  const token = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '10d' })
                  res.cookie('token', token, cookiesOptions).send({ success: true })
            })

            app.post('/logout', (req, res) => {
                  res.clearCookie('token', { ...cookiesOptions, maxAge: 0 })
                        .send({ success: true })
            })

            // lost and found apis
            app.post('/addItems', async (req, res) => {
                  const data = req.body;
                  const result = await productsDB.insertOne(data);
                  res.send(result);
            });

            app.get('/allItems', async (req, res) => {
                  const cursor = productsDB.find();
                  const result = await cursor.toArray();
                  res.send(result);
            });

            app.get('/allItems/:id', async (req, res) => {
                  const id = req.params.id;
                  const query = { _id: new ObjectId(id) };
                  const result = await productsDB.find(query).toArray();
                  res.send(result);
            });

            app.delete('/item/:id', async (req, res) => {
                  const id = req.params.id;
                  const query = { _id: new ObjectId(id) };
                  const result = await productsDB.deleteOne(query);
                  res.send(result);
            });


            app.put('/allItems/:id', async (req, res) => {
                  const id = req.params.id;
                  const filter = { _id: new ObjectId(id) };
                  const data = req.body;
                  const updateData = {
                        $set: {
                              title: data.title,
                              thumbnail: data.thumbnail,
                              type: data.type,
                              category: data.category,
                              location: data.location,
                              date: data.date,
                              message: data.message
                        }
                  };
                  const result = await productsDB.updateOne(filter, updateData);
                  res.send(result);
            });

            app.patch('/allItems/:id', async (req, res) => {
                  const id = req.params.id;
                  const query = { _id: new ObjectId(id) };
                  const { status } = req.body;
                  const updateStatus = {
                        $set: {
                              status: status
                        }
                  }
                  const result = await productsDB.updateOne(query, updateStatus);
                  res.send(result)
            })

            app.post('/allRecovered', async (req, res) => {
                  const data = req.body;
                  const result = await RecoverProductsDB.insertOne(data);
                  res.send(result);
            });

            app.get('/allRecovered', async (req, res) => {
                  const result = await RecoverProductsDB.find().toArray();
                  res.send(result);
            })

            // Latest item by most recent date
            app.get('/latestItems', async (req, res) => {
                  const result = await productsDB.find().sort({ date: -1 }).limit(6).toArray();
                  res.send(result)
            });

            // search using query params
            app.get('/items', async (req, res) => {
                  const { search } = req.query;
                  const query = {};
                  if (query) {
                        query.$or = [
                              { title: { $regex: search, $options: 'i' } },
                              { location: { $regex: search, $options: 'i' } }
                        ];
                  };
                  const items = await productsDB.find(query).toArray();
                  res.send(items);
            })


      } finally {
      }
}
run().catch(console.dir);


app.get('/', (req, res) => {
      res.send("Server run ok")
});

app.listen(port, () => {
      console.log(`Running server port ${port}`)
})