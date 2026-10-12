import { AuthProvider } from "./components/AuthContext.jsx";
import { FavoritesProvider } from "./components/FavoritesContext.jsx"; 
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function AppLayout() {
  const location = useLocation();

  const authPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!authPage && <Navbar />}

      <Routes>
    {/* PUBLIC PAGES */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/properties" element={<Properties />} />
    <Route path="/properties/:id" element={<PropertyDetails />} />

    {/* AUTHENTICATION PAGES */}
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* PROTECTED PAGES */}
    <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
    </Route>
  </Routes>

      {!authPage && <Footer />}
    </>
  );
}



function App() {
  return (
    <AuthProvider>
    <FavoritesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;