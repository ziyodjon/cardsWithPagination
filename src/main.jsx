import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

//   const [datas, setDatas] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://dummyjson.com/products?limit=6&skip=1&select=title,price,images,description`
//     )
//       .then((response) => response.json())
//       .then((data) => setDatas(data))
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   return (
//     <div className="products">
//       <ul className="items">
//         <li>{"Items 12qeq"}</li>
//         {console.log(datas)}
//       </ul>
//     </div>
//   );
