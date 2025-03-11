import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";

const ProductDetail = () => {
  const product = {
    id: 40,
    name: "Fantasy Novel",
    description: "High-quality fantasy novel for everyday use.",
    price: 347.72,
    stock: 101,
    category: 4,
    price_with_tax: 382.49,
    images: [
      {
        id: 1,
        image:
          "https://res.cloudinary.com/dwbggpcgf/image/upload/v1738736534/s9klohkzkefsesgc3ql1",
      },
      {
        id: 2,
        image:
          "https://res.cloudinary.com/dlt4wakao/image/upload/v1741723703/la1mbwgzfubb8agcbhup.jpg",
      },
    ],
  };
  return (
    <div className="w-3/4 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <ProductImageGallery
          images={product.images}
          ProductName={product.name}
        />
        <div className="mt-auto">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
