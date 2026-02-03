import React, { useEffect, useState } from "react";
import SingleItem from "./SingleItem";

const Api = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);

  const url = "https://dummyjson.com/products";

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
    setSearchProducts(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (!search) {
      setSearchProducts(products);
    } else {
      const filteredData = products.filter(
        (item) =>
          item.title.toLowerCase().startsWith(search.toLowerCase()) ||
          item.price < +search,
      );
      setSearchProducts(filteredData);
    }
  }, [search, products]);

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="w-1/2 p-3 rounded-md ms-auto block me-10 my-10 border-gray-400 border focus:border-green-500 outline-0"
      />

      <div className="shadow-xl container gap-3 mx-auto flex items-start flex-wrap">
        {searchProducts.map((item) => (
          <SingleItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default Api;
