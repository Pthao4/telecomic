import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./containers/home";
import DetailComic from "./containers/detail.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        <Route path="details/:id" element={<DetailComic/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
