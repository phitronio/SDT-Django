import { Route, Routes } from "react-router";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import ActivateAccount from "../components/Registration/ActivateAccount";
import DashboardLayout from "../layouts/DashboardLayout";
import Profile from "../pages/Profile";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes  */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="activate/:uid/:token" element={<ActivateAccount />} />
        <Route path="shop/:productId" element={<ProductDetail />} />
      </Route>
      {/* Private Routes  */}
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
