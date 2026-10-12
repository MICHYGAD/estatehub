import { useAuth } from "./AuthContext.jsx";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { House, Heart, Menu, X, LogOut, UserRound } from "lucide-react";


function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        closeMenu();
        navigate("/login");
    }


    return (
        <header className="navbar">
           <div className="navbar-container">

            {/* Logo */}
            <Link to ="/" className="brand" onClick={closeMenu}>
                <span className="brand-icon">
                    <House size={30} />
                </span>
                <span>Michy<span className="brand-highlight">EstateHub
                </span></span>
            </Link>

    <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <NavLink to="/" onClick={closeMenu}>Home</NavLink>

        <NavLink to="/about" onClick={closeMenu}>About</NavLink>

        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <NavLink to="/properties" onClick={closeMenu}>Properties</NavLink>

        <NavLink to="/favorites"
          onClick={closeMenu}
          className="favorites-link"
          aria-label="Favorites"
          title="Favorites"
          >
            <Heart size={20} strokeWidth={1.8} />
        </NavLink>

        {/* Mobile Authentication */}
<div className="mobile-auth">
    {!isAuthenticated ? (
        <>
            <Link
                to="/login"
                className="mobile-login"
                onClick={closeMenu}
            >
                Login
            </Link>

            <Link
                to="/register"
                className="mobile-register"
                onClick={closeMenu}
            >
                Register
            </Link>
        </>
    ) : (
        <>
            <Link
                to="/profile"
                className="mobile-login"
                onClick={closeMenu}
            >
                <UserRound size={18} />
                My Profile
            </Link>

            <button
                type="button"
                className="mobile-register"
                onClick={handleLogout}
            >
                <LogOut size={18} />
                Logout
            </button>
        </>
    )}
</div>

    </nav>

          {/* Desktop Authentication */}
<div className="navbar-actions">
    {!isAuthenticated ? (
        <>
            <Link to="/login" className="login-button">
                Login
            </Link>

            <Link to="/register" className="register-button">
                Register
            </Link>
        </>
    ) : (
        <>
            <Link to="/profile" className="login-button">
                <UserRound size={18} />
                {user?.name || "My Profile"}
            </Link>

            <button
                type="button"
                className="register-button"
                onClick={handleLogout}
            >
                <LogOut size={18} />
                Logout
            </button>
        </>
    )}
</div>

            {/* Mobile menu button */}
            <button className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}>{menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

           </div>
        </header>
    );
}

export default NavBar;