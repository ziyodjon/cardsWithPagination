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
