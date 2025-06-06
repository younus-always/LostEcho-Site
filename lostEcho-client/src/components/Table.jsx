import { Link, useNavigate } from "react-router-dom";

const Table = ({ singleProduct, handleDelete }) => {
      const { _id, title, type, category, date, location, message } = singleProduct || {};

      return (
            <>
                  <tr className="bg-white border-b hover:bg-gray-100">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {title}
                        </th>
                        <td className="px-6 py-4">
                              {type}
                        </td>
                        <td className="px-6 py-4">
                              {category}
                        </td>
                        <td className="px-6 py-4">
                              {location}
                        </td>
                        <td className="px-6 py-4">
                              {date}
                        </td>
                        <td className="px-6 py-4">
                              {message.length > 40 ? message.substring(0, 40) + '...' : message}
                        </td>
                        <td className="px-6 py-4 flex items-center justify-end gap-3">
                              <Link to={`/updateItem/${_id}`} className="py-1 px-2 rounded-lg bg-gray-200">
                                    <svg className="w-6 h-6 text-yellow-400 hover:text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                          <path fillRule="evenodd" d="M14 4.182A4.136 4.136 0 0 1 16.9 3c1.087 0 2.13.425 2.899 1.182A4.01 4.01 0 0 1 21 7.037c0 1.068-.43 2.092-1.194 2.849L18.5 11.214l-5.8-5.71 1.287-1.31.012-.012Zm-2.717 2.763L6.186 12.13l2.175 2.141 5.063-5.218-2.141-2.108Zm-6.25 6.886-1.98 5.849a.992.992 0 0 0 .245 1.026 1.03 1.03 0 0 0 1.043.242L10.282 19l-5.25-5.168Zm6.954 4.01 5.096-5.186-2.218-2.183-5.063 5.218 2.185 2.15Z" clipRule="evenodd" />
                                    </svg>
                              </Link>
                              <button onClick={() => handleDelete(_id)} className="py-1 px-2 rounded-lg bg-gray-200">
                                    <svg className="w-6 h-6 text-red-600 hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                          <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd" />
                                    </svg>

                              </button>
                        </td>
                  </tr>
            </>
      )
}

export default Table