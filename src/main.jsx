import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import Notes from "./pages/Notes";
import Home from "./pages/Home";
import Navegacion from "./components/Navegacion";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navegacion />
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </BrowserRouter>,
);

