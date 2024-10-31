import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Tienda from "./pages/Tienda";
import ProtectedRoute from "../ProtectedRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />

            <Route path="/register" element={<Registro />} />

            <Route path="/login" element={<Login />} />

            <Route path="/tienda" element={<Tienda />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Perfil />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
