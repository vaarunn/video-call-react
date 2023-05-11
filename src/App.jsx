import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Room from "./pages/Room";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
