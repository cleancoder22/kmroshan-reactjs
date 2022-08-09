import { RouteObject } from "react-router-dom";
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
];
