import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./styles/index.scss";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nav from "./components/Nav";
import { fetchHome } from "./utils/apiHome";
function App() {
  const [home, setHome] = useState(null);
  useEffect(() => {
    fetchHome()
      .then((data) => {
        setHome(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setHome]);

  function outer() {
    let counter = 0;
    function incrementCounter() {
      counter++;
    }
    return incrementCounter;
  }

  const mynewfunction = outer();
  mynewfunction();
  mynewfunction();
  console.log(mynewfunction);
  const result = mynewfunction();
  console.log(result);
  return (
    <div className="App">
      <BrowserRouter>
        {home && <Nav homeName={home.name} />}
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home home={home} setHome={setHome} />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
