import Hero from "./components/home/components/Hero";
import Navbar from "./components/nav/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-gray-100">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
