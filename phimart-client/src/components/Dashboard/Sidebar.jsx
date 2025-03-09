import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="drawer-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar header */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <FiShoppingCart className="h-6 w-6" />
          <h1 className="text-xl font-bold">PhiMart</h1>
        </div>

        {/* Sidebar menu */}
        <ul className="menu menu-md gap-2">
          <li>
            <Link to="/dashboard" className="flex items-center">
              <FiBarChart2 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="flex items-center">
              <FiPackage className="h-4 w-4" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/products/add" className="flex items-center">
              <FiPlusCircle className="h-4 w-4" />
              <span>Add Product</span>
            </Link>
          </li>
          <li>
            <Link to="/categories" className="flex items-center">
              <FiTag className="h-4 w-4" />
              <span>Categories</span>
            </Link>
          </li>
          <li>
            <Link to="/categories/add" className="flex items-center">
              <FiPlusCircle className="h-4 w-4" />
              <span>Add Category</span>
            </Link>
          </li>
          <li>
            <Link to="/orders" className="flex items-center">
              <FiShoppingCart className="h-4 w-4" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/reviews" className="flex items-center">
              <FiStar className="h-4 w-4" />
              <span>Reviews</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center">
              <FiUsers className="h-4 w-4" />
              <span>Users</span>
            </Link>
          </li>
        </ul>

        {/* Sidebar footer */}
        <div className="mt-auto pt-6 text-xs text-base-content/70">
          © 2025 PhiMart Admin
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
