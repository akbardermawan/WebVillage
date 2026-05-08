import Hero from "./components/home/components/Hero";
import Navbar from "./components/nav/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
