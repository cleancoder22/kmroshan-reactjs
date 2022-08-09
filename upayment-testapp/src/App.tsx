import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/productList/HomePage";
import { routes } from "./routes";

function App() {
  let element = useRoutes(routes);

  return element;
}

export default App;
