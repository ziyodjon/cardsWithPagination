import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${currentPage}&select=title,price,images,description`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Проблема со стороны сервера");
        }
        return response.json();
      })
      .then((datas) => {
        // setData(datas);
        setProducts(datas.products);
        setTotal(datas.total);
      });
  }, [currentPage]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  console.log(indexOfLastProduct);
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  // const currentProducts = products.slice(
  //   indexOfFirstProduct,
  //   indexOfLastProduct
  // );

  const totalPages = Math.ceil(total / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h1 className="text-[40px] pb-4">Список товаров</h1>
      <div className="product-list flex flex-row gap-5">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;

// const myGoods = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://dummyjson.com/products?limit=6&skip=${currentPage}&select=title,price,images`
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }

//         const result = await response.json();
//         console.log(result);
//         setData(result.products);
//         setTotalPages(Math.ceil(result.total / 6));
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//     console.log(currentPage);
//   }, [currentPage]);

//   return (
//     <div className="goods-wrap">
//       <h1>{"Товары разного типа:"}</h1>
//       <ul>
//         {data.map((product, index) => {
//           return (
//             <li key={product.id}>
//               <h4>{product.title}</h4>
//               <div className="goods-img">
//                 <img src={product.images[0]} alt="" width="200" />
//               </div>
//               <div className="goods-price">{product.price}</div>
//             </li>
//           );
//         })}
//       </ul>
//       <div className="pagination">
//         <ul>
//           {Array(totalPages)
//             .fill(0)
//             .map((_, index) => (
//               <li key={index} onClick={() => setCurrentPage(index + 1)}>
//                 {index + 1}
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default myGoods;

// const PaginatedDataComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await fetch(
//           `https://dummyjson.com/products?limit=6&skip=${page}&select=title,price,images`
//         );

//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         console.log(result);
//         setData(result.products); // Добавление новых данных к уже существующим
//         setHasMore(result.products.length > 0); // Проверка на наличие дополнительных данных
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]); // Перезапуск эффекта при изменении страницы

//   const loadMore = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Paginated Data</h1>
//       <div className="product-wrap">
//         {data.map((item, index) => (
//           <div key={index} className="pr">
//             <div className="product">
//               <h2>{item.title}</h2>
//               <div className="product-image">
//                 <img src={item.images[0]} alt="" width="250" />
//               </div>
//               <div className="product-price">{item.price}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <br />
//       {loading && <div>Loading...</div>}
//       {hasMore && !loading && <button onClick={loadMore}>Load More</button>}
//     </div>
//   );
// };

// export default PaginatedDataComponent;
