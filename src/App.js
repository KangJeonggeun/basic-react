import React from "react";
import Home from "./pages/Home";
import { Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Counter from "./pages/Counter";
import InputText from "./pages/Input";
import Input2 from "./pages/Input2";
import UserList from "./pages/list";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link>|
        <Link to="/counter">Counter</Link>|<Link to="/input">Input</Link>|
        <Link to="/input2">Input2</Link>|<Link to="/list">list</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<InputText />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;
