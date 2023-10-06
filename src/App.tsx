import { AddData, Home, EditData } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/edit-data/:id" element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
