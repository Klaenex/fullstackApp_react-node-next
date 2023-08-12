import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
