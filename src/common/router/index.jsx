import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../../App";
import Home from "../../components/home/Home";
import About from "../../components/about/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

export default router;
