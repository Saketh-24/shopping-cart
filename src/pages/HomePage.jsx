import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  const handleFetch = async () => {
    try {
      setloading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setproducts(res.data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="flex mx-auto max-w-[1200px] flex-col pt-6">
      <div className="grid grid-cols-4 gap-y-2 gap-x-4  ">
        {loading && <h1 className="text-3xl font-bold">loading</h1>}
        {products.map((product) => {
          return (
            <div
              className="flex flex-col gap-2   justify-between"
              key={product.id}
            >
              <div className="flex items-center h-[400px] bg-white justify-center rounded-lg">
                <img
                  src={product.image}
                  alt=""
                  className="w-[60%] h-auto max-h-[320px]"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-500">
                {product.title}
              </h2>
              <p>Price: {product.price}</p>
              <button className="bg-gray-600 text-white p-4">
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
