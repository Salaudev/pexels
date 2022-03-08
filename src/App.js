import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getDatas } from "./Api/index";
import MainPage from "./Pages/mainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/photos/page/:page" element={<h1>Photos</h1>} />
        <Route path="/users/:username" element={<h1>Photos</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
