import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Home from "./screens/Home";
import Upload from "./screens/Upload";
import Watch from "./screens/Watch";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Watch />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
