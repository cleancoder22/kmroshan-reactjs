import { RouteObject } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ProductDetail from "./pages/productDetail/ProductDetail";
import HomePage from "./pages/productList/HomePage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
  },
];
