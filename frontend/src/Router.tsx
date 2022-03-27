import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/partials/Footer";
import Video from "./components/Video";
import Home from "./screens/Home";
import Watch from "./screens/Watch";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Watch />}>
          <Route path=":id" element={<Video />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
