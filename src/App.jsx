import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
