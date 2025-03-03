import { Route, Routes } from "react-router";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route index element={<Home />}></Route>
      <Route path="about" element={<About />} /> */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
