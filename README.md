# 🔍 LostEcho – Find What Matters  

## 📖 Overview  

**LostEcho** is a dedicated platform designed to **bridge the gap** between individuals who have lost personal items and those who have found them. Our mission is to **foster a sense of trust and community** while making it easier to reunite lost belongings with their rightful owners.  

---

## 🌐 Live Demo  
🚀 **Frontend:** [LostEcho Live](https://lost-echo.netlify.app)  
🚀 **Backend:** [LostEcho Server](https://lost-echo-server.vercel.app)  

---

## 📌 Installation  

Follow these steps to set up the project on your local machine:  

### 🔹 Frontend Setup  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/lostecho-frontend.git
cd lostecho-frontend
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Configure environment variables**  
Create a `.env.local` file in the frontend root directory and add:  
```ini
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_URL=https://lost-echo-server.vercel.app
```

4️⃣ **Start the frontend server**  
```sh
npm run dev
```
Then, open your browser and navigate to `http://localhost:5173/`  

---

### 🔹 Backend Setup  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/lostecho-backend.git
cd lostecho-backend
```

2️⃣ **Install dependencies**  
```sh
npm install
```

3️⃣ **Generate a Secure JWT Secret Token**  
Before configuring the backend, generate a **secure JWT secret key** for authentication:  

#### 🔐 **Generating a Secure JWT Secret Token**  

1. Open your **Terminal/Command Prompt**  
   - On **Windows**: Press `Win + R`, type `cmd`, and hit **Enter**  
   - On **Mac/Linux**: Open the **Terminal**  

2. Start a **Node.js session** by running:  
   ```sh
   node
   ```

3. Inside the Node.js shell, enter:  
   ```js
   require('crypto').randomBytes(64).toString('hex')
   ```

4. You will receive a randomly generated **64-byte token**, like this:  
   ```plaintext
   9a3091d3522423428d50e175a29ee4c1109561dcb6316534bea416b5c7c4faea
   7f27ac89aa876dc64a802c7adc922364ca3eaf4c5491a4e7496cd54455c6307e
   ```
   **Copy and store this token securely.**

5. Open the **`.env`** file in the backend and add:  
   ```ini
   DB_USER=your_database_user
   DB_PASS=your_database_password
   ACCESS_TOKEN=9a3091d3522423428d50e175a29ee4c1109561dcb6316534bea416b5c7c4faea7f27ac89aa876dc64a802c7adc922364ca3eaf4c5491a4e7496cd54455c6307e
   ```

⚠️ **Security Warning**  
- Never expose your `.env` file in public repositories.  
- Store your **JWT secret key** securely and change it periodically.  

---

4️⃣ **Start the backend server**  
```sh
npm start
```
By default, the backend runs on **`http://localhost:4000/`**  

---

## 🚀 Deploying the Backend on Vercel  

To deploy your **Express.js backend** to **Vercel**, follow these steps:  

### ✅ **Step 1: Install Vercel CLI (If Not Installed)**  
Open your terminal and run:  
```sh
npm install -g vercel
```

### ✅ **Step 2: Login to Vercel**  
Run the following command and follow the authentication steps:  
```sh
vercel login
```

### ✅ **Step 3: Initialize Vercel in Your Backend Project**  
Inside your **backend directory**, run:  
```sh
vercel
```
This will prompt you to set up your project. Select the following options:  
- **Set up and deploy "lostecho-server"?** → `Yes`  
- **Which scope do you want to deploy it to?** → *(Select your Vercel account)*  
- **Link to existing project?** → `No` (if it's your first time)  
- **What’s your project’s name?** → `lostecho-server` *(or any name you prefer)*  
- **In which directory is your code located?** → `./` *(root directory)*  
- **Which framework / build system?** → `Other`  
- **Want to override the default settings?** → `No`  

### ✅ **Step 4: Set Up Environment Variables**  
After initialization, add your environment variables:  
```sh
vercel env add DB_USER your_database_user
vercel env add DB_PASS your_database_password
vercel env add ACCESS_TOKEN your_generated_secret_key
```

To confirm the environment variables are added, run:  
```sh
vercel env ls
```

### ✅ **Step 5: Deploy the Server**  
Now, deploy your server by running:  
```sh
vercel --prod
```
Once deployment is complete, you will get a **live URL** (e.g., `https://lost-echo-server.vercel.app`).  

### ✅ **Step 6: Update Frontend API URL**  
Modify your `.env.local` file in the frontend:  
```ini
VITE_URL=https://lost-echo-server.vercel.app
```
Then **restart the frontend** for changes to take effect:  
```sh
npm run dev
```

---

## 🛠 Troubleshooting  
**❓ Firebase Errors:** Check API key configuration and Firebase setup.  
**❓ TailwindCSS Not Working:** Ensure `postcss` and `autoprefixer` are installed.  
**❓ Backend Deployment Failed?** Try running `vercel --force` or check `vercel logs`.  

---

## 👥 Contributors  
💡 **Md. Younus Islam** – [GitHub Profile](https://github.com/younus-always)  
🎉 Contributions are welcome! Feel free to fork the repo, open issues, and submit pull requests.  

---

## 🌟 Final Thoughts  

🌍 **LostEcho is more than just a platform—it’s a lifeline for lost and found items!**  

We believe in the **power of community** and **helping each other**. Whether you've lost something valuable or found someone’s cherished belonging, **LostEcho** is here to reconnect owners with what matters most.  

💙 Thank you for being a part of this journey. Let’s make the world a better place—one item at a time!  

**Happy coding & happy reuniting!** 🚀😊  
