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
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const customerMenus = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
  ];

  const adminMenues = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/products", icon: FiPackage, label: "Products" },
    { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
    { to: "/categories", icon: FiTag, label: "Categories" },
    { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/reviews", icon: FiStar, label: "Reviews" },
    { to: "/users", icon: FiUsers, label: "Users" },
  ];

  const menuItems = user.is_staff ? adminMenues : customerMenus;

  return (
    <div className="drawer-side z-10">
      <label
        htmlFor="drawer-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar header */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6 px-2">
            <FiShoppingCart className="h-6 w-6" />
            <h1 className="text-xl font-bold">PhiMart</h1>
          </Link>
        </div>

        {/* Sidebar menu */}
        <ul className="menu menu-md gap-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className="flex items-center">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
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
