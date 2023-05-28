import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieDetail from "./routes/MovieDetail";
import Home from "./routes/Home";
import Netflix from "./routes/Netflix";
import Disney from "./routes/Disney";
import DramaDetail from "./routes/DramaDetail";
import Credit from "./routes/Credit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/drama/:id" element={<DramaDetail />} />
        <Route path="/netflix/" element={<Netflix />} />
        <Route path="/disney/" element={<Disney />} />
        <Route path="/credit/:id" element={<Credit />} />
      </Routes>
    </Router>
  );
}

export default App;
