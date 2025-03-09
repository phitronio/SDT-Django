import { useState } from "react";
import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100 border-b">
          <div className="flex-none lg:hidden">
            <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
              {sidebarOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </label>
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link href="/settings">Settings</Link>
                </li>
                <li>
                  <button>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-4">
                <div className="flex items-center gap-2">
                  <FiPackage className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-medium">Total Products</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">245</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-4">
                <div className="flex items-center gap-2">
                  <FiShoppingCart className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-medium">Total Orders</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">128</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-4">
                <div className="flex items-center gap-2">
                  <FiUsers className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-medium">Total Users</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">573</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
              <div className="card-body p-4">
                <div className="flex items-center gap-2">
                  <FiStar className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-medium">Average Rating</h3>
                </div>
                <p className="mt-2 text-2xl font-bold">4.8</p>
              </div>
            </div>
          </div>

          <div className="mt-6 card bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-lg">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#ORD-7245</td>
                      <td>John Smith</td>
                      <td>
                        <div className="badge badge-success">Completed</div>
                      </td>
                      <td>Mar 8, 2025</td>
                      <td>$125.00</td>
                    </tr>
                    <tr>
                      <td>#ORD-7244</td>
                      <td>Sarah Johnson</td>
                      <td>
                        <div className="badge badge-warning">Processing</div>
                      </td>
                      <td>Mar 7, 2025</td>
                      <td>$89.99</td>
                    </tr>
                    <tr>
                      <td>#ORD-7243</td>
                      <td>Michael Brown</td>
                      <td>
                        <div className="badge badge-info">Shipped</div>
                      </td>
                      <td>Mar 7, 2025</td>
                      <td>$245.50</td>
                    </tr>
                    <tr>
                      <td>#ORD-7242</td>
                      <td>Emily Davis</td>
                      <td>
                        <div className="badge badge-success">Completed</div>
                      </td>
                      <td>Mar 6, 2025</td>
                      <td>$112.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar */}
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
    </div>
  );
}
