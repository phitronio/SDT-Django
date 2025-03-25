import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [productId, setProductId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Categories
  useEffect(() => {
    apiClient.get("/categories/").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  // Submit Product Details
  const handleProductAdd = async (data) => {
    try {
      const productRes = await authApiClient.post("/products/", data);
      setProductId(productRes.data.id);
    } catch (error) {
      console.log("Error adding product", error);
    }
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!images.length) return alert("Please select images.");
    // [file, file]
    setLoading(true);
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        console.log(formData);
        await authApiClient.post(`/products/${productId}/images/`, formData);
        setLoading(false);
      }
      alert("Images uploaded successfully");
    } catch (error) {
      console.log(("Error uploading image", error));
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      {!productId ? (
        <form onSubmit={handleSubmit(handleProductAdd)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              placeholder="Product Name"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="text"
              {...register("price", {
                required: "This Field is required",
                validate: (value) => {
                  const parsedValue = parseFloat(value);
                  return !isNaN(parsedValue) || "Please enter a valid number!";
                },
              })}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Stock Quantity</label>
            <input
              type="number"
              {...register("stock", { required: true })}
              className="input input-bordered w-full"
              placeholder="Stock"
            />
            {errors.stock && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          {/* Dropdown for categories */}
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-2">Upload Product Images</h3>
          <input
            type="file"
            multiple
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageChange}
          />
          {previewImages.length > 0 && (
            <div className="flex gap-2 mt-2">
              {previewImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Preview"
                  className="w-16 h-16 rounded-md object-cover"
                />
              ))}
            </div>
          )}

          <button
            onClick={handleUpload}
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Uploading images..." : "Upload Images"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
