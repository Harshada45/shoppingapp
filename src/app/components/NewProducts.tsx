import React from "react";
import ProductCards from "./ProductCards";

const productsData = [
  {
    img: "/jacket-1.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/skirt-1.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/party-wear-1.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/shirt-1.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/sports-1.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/watch-1.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/watch-2.webp",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-100 xl:gap:x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCards
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
