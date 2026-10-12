import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../components/useFavorites.js";
import {
    House,
    UserRound,
    Mail,
    Heart,
    ShieldCheck,
    LogOut,
    ArrowRight
    // CalendarDays,
} from "lucide-react";
import { useAuth } from "../components/AuthContext.jsx";
import "./Profile.css";




function Profile() {
    const { user, logout, updateProfile } = useAuth();
    const navigate = useNavigate();
    const { favorites } = useFavorites();


    // Control profile editing
const [isEditing, setIsEditing] = useState(false);

// Store the form values
const [fullName, setFullName] = useState(user?.name || "");
const [email, setEmail] = useState(user?.email || "");

// Store success and error messages
const [message, setMessage] = useState({
    type: "",
    text: "",
});

    // Handle logout
    const handleLogout = () => {
        logout();
        navigate("/");
    };

    // Open the profile editing form

const handleEditProfile = () => {
    setFullName(user?.name || "");
    setEmail(user?.email || "");
    setMessage({ type: "", text: "" });
    setIsEditing(true);
};

// Cancel profile editing
const handleCancelEdit = () => {
    setFullName(user?.name || "");
    setEmail(user?.email || "");
    setMessage({ type: "", text: "" });
    setIsEditing(false);
};

    // Save profile changes
const handleSaveProfile = (event) => {
    event.preventDefault();

    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
        setMessage({
            type: "error",
            text: "Please enter your full name and email address.",
        });
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
        setMessage({
            type: "error",
            text: "Please enter a valid email address.",
        });
        return;
    }

    try {
        const result = updateProfile(
           trimmedName,
           trimmedEmail
        );

        if (result === false) {
            setMessage({
                type: "error",
                text: "Unable to update your profile. Please try again.",
            });
            return;
        }

        setMessage({
            type: "success",
            text: "Your profile has been updated successfully!",
        });

        setIsEditing(false);
    } catch {
        setMessage({
            type: "error",
            text: "Something went wrong. Please try again.",
        });
    }
};


    // Get the user's first initial for the avatar
    const userInitial = user?.name
        ? user.name.charAt(0).toUpperCase()
        : "U";

    return (
    <main className="profile-page">

        {/* PAGE HEADER */}
        <section className="profile-header">
    <div className="profile-header-content">
        <span className="profile-eyebrow">
            YOUR ESTATEHUB ACCOUNT
        </span>

        <h1>My Profile</h1>

        <p>
            Manage your account and keep track of
            your property journey.
        </p>
    </div>
</section>

{/* PROFILE CONTENT */}
<section className="profile-container">

    {/* PROFILE CARD */}
    <div className="profile-card">

        <div className="profile-card-top">
            <div className="profile-avatar">
                {userInitial}
            </div>

            <div className="profile-user-heading">
                <h2>{user?.name || "EstateHub User"}</h2>

                <p>
                    <Mail size={16} />
                    {user?.email || "No email available"}
                </p>

                <span className="profile-status">
                    <span className="status-dot"></span>
                    Account Active
                </span>
            </div>
        </div>

        <div className="profile-card-divider"></div>

        <div className="profile-account-type">
            <span className="profile-icon">
                <ShieldCheck size={22} />
            </span>

            <div>
                <h3>Account Type</h3>
                <p>Property Seeker</p>
            </div>
        </div>

    </div>

    {/* PERSONAL INFORMATION */}
    <section className="profile-information">

        <div className="profile-section-heading">
    <div>
        <span className="profile-eyebrow">
            ACCOUNT DETAILS
        </span>

        <h2>Personal Information</h2>
    </div>

    {!isEditing && (
        <button
            type="button"
            className="profile-edit-button"
            onClick={handleEditProfile}
        >
            Edit Profile
        </button>
    )}
</div>

        {isEditing ? (
    <form
        className="profile-edit-form"
        onSubmit={handleSaveProfile}
    >
        {/* SUCCESS OR ERROR MESSAGE */}
        {message.text && (
            <div
                className={`profile-message ${message.type}`}
                role="status"
                aria-live="polite"
            >
                {message.text}
            </div>
        )}

        {/* FULL NAME */}
        <div className="profile-form-group">
            <label htmlFor="profile-full-name">
                Full Name
            </label>

            <input
                id="profile-full-name"
                type="text"
                value={fullName}
                onChange={(event) =>
                    setFullName(event.target.value)
                }
                placeholder="Enter your full name"
                autoComplete="name"
                required
            />
        </div>

        {/* EMAIL ADDRESS */}
        <div className="profile-form-group">
            <label htmlFor="profile-email">
                Email Address
            </label>

            <input
                id="profile-email"
                type="email"
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)
                }
                placeholder="Enter your email address"
                autoComplete="email"
                required
            />
        </div>

        {/* FORM ACTIONS */}
        <div className="profile-form-actions">
            <button
                type="submit"
                className="profile-save-button"
            >
                Save Changes
            </button>

            <button
                type="button"
                className="profile-cancel-button"
                onClick={handleCancelEdit}
            >
                Cancel
            </button>
        </div>
    </form>
) : (
    <div className="profile-info-grid">

        {/* FULL NAME */}
        <div className="profile-info-item">
            <span className="profile-info-icon">
                <UserRound size={20} />
            </span>

            <div>
                <span className="profile-info-label">
                    Full Name
                </span>

                <p>{user?.name || "Not provided"}</p>
            </div>
        </div>

        {/* EMAIL ADDRESS */}
        <div className="profile-info-item">
            <span className="profile-info-icon">
                <Mail size={20} />
            </span>

            <div>
                <span className="profile-info-label">
                    Email Address
                </span>

                <p>{user?.email || "Not provided"}</p>
            </div>
        </div>

        {/* ACCOUNT STATUS */}
        <div className="profile-info-item">
            <span className="profile-info-icon">
                <ShieldCheck size={20} />
            </span>

            <div>
                <span className="profile-info-label">
                    Account Status
                </span>

                <p>Active</p>
            </div>
        </div>

        {/* ACCOUNT ROLE */}
        <div className="profile-info-item">
            <span className="profile-info-icon">
                <House size={20} />
            </span>

            <div>
                <span className="profile-info-label">
                    Account Role
                </span>

                <p>Property Seeker</p>
            </div>
        </div>

    </div>
)} 

    </section>

    {/* ACCOUNT ACTIONS */}
    <section className="profile-actions-section">

        <div className="profile-section-heading">
            <div>
                <span className="profile-eyebrow">
                    QUICK ACCESS
                </span>

                <h2>Your Account</h2>
            </div>
        </div>

        <div className="profile-actions-grid">

            {/* FAVORITES */}
            <Link
                to="/favorites"
                className="profile-action-card"
            >
                <span className="profile-action-icon">
                    <Heart size={23} />
                </span>

                <div className="profile-action-text">
                    <h3>My Favorites</h3>

                    <p>
                        View the properties you have saved.
                    </p>
                    <span className="profile-favorites-count">
                        {favorites.length} {favorites.length === 1 ? "property" : "properties"} saved
                    </span>
                </div>

                <ArrowRight
                    size={20}
                    className="profile-action-arrow"
                />
            </Link>

            {/* BROWSE PROPERTIES */}
            <Link
                to="/properties"
                className="profile-action-card"
            >
                <span className="profile-action-icon">
                    <House size={23} />
                </span>

                <div className="profile-action-text">
                    <h3>Explore Properties</h3>

                    <p>
                        Discover your next dream property.
                    </p>
                </div>

                <ArrowRight
                    size={20}
                    className="profile-action-arrow"
                />
            </Link>

        </div>

    </section>

    {/* LOGOUT */}
    <section className="profile-logout-section">

        <div>
            <h3>Want to leave your account?</h3>

            <p>
                You can log out of your EstateHub account
                whenever you want.
            </p>
        </div>

        <button
            type="button"
            className="profile-logout-button"
            onClick={handleLogout}
        >
            <LogOut size={18} />
            Logout
        </button>

    </section>

</section>

    </main>
    );
}

export default Profile;