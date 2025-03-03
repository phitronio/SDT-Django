import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  /*   const fetchProducts = () => {
    setLoading(true);
    apiClient
      .get(`/products/?page=${currentPage}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.results);
        setTotalPages(Math.ceil(res.data.count / res.data.results.length));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }; */

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/products/?page=${currentPage}`);
      const data = await response.data;

      setProducts(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <ProductList products={products} loading={loading} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ShopPage;
