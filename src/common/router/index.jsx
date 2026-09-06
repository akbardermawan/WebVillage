import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "../../App";
import Home from "../../components/home/Home";
import About from "../../components/about/About";
import Information from "../../pages/information/Information";
import Highlights from "../../pages/highlights/Highlights";
import Service from "../../pages/Service";
import Login from "../../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="information" element={<Information />} />
      <Route path="highlights" element={<Highlights />} />
      <Route path="service" element={<Service />} />
      <Route path="login" element={<Login />} />
    </Route>,
  ),
);

export default router;
