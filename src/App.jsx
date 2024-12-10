import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import UpdateForm from "./UpdateForm";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
