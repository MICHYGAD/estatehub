import { useAuth } from "../components/AuthContext.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  House,
  Heart,
  ShieldCheck,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import "./Register.css";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName) {
      newErrors.fullName = "Full name is required.";
    } else if (fullName.length < 2) {
      newErrors.fullName =
        "Please enter a name with at least 2 characters.";
    }

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must contain at least 8 characters.";
    } else if (!/[A-Za-z]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one letter.";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one number.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!agreeToTerms) {
      newErrors.terms =
        "You must agree to the Terms and Conditions.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();

  setErrors(validationErrors);
  setSuccessMessage("");

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  try {
    await register(
      formData.fullName,
      formData.email,
      formData.password
    );

    setSuccessMessage(
      "Account created successfully! Redirecting to login..."
    );

    setTimeout(() => {
      navigate("/login", {
        state: { registered: true },
        replace: true,
      });
    }, 2000);
  } catch (error) {
    setErrors((prev) => ({
      ...prev,
      email: error.message,
    }));
  }
};

  return (
    <main className="auth-page">
      <div className="auth-card">

        {/* LEFT SIDE */}
        <section className="auth-visual">

          <Link to="/" className="auth-brand">
            <House size={36} strokeWidth={2.5} />

            <span>
              Michy
              <strong>EstateHub</strong>
            </span>
          </Link>

          <div className="auth-visual-content">
            <p className="auth-eyebrow">
              FIND YOUR PLACE IN THE WORLD
            </p>

            <h1>
              Your Next Chapter
              <br />
              Starts With Us
            </h1>

            <p className="auth-visual-description">
              Create your Michy EstateHub account and take
              the first step toward finding your dream home.
            </p>
          </div>

          <div className="auth-image"></div>

          <div className="auth-benefits">

            <div className="auth-benefit">
              <span className="auth-benefit-icon">
                <Heart size={22} />
              </span>

              <div>
                <h3>Save Your Favorites</h3>
                <p>Keep your favorite properties in one place.</p>
              </div>
            </div>

            <div className="auth-benefit">
              <span className="auth-benefit-icon">
                <ShieldCheck size={22} />
              </span>

              <div>
                <h3>Personalized Experience</h3>
                <p>Enjoy a more tailored property journey.</p>
              </div>
            </div>

            <div className="auth-benefit">
              <span className="auth-benefit-icon">
                <UserRound size={22} />
              </span>

              <div>
                <h3>Manage Your Account</h3>
                <p>Keep your account information organized.</p>
              </div>
            </div>

          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="auth-form-section">

          <div className="auth-form-heading">
            <span className="auth-mobile-brand">
              <House size={25} />
              Michy <strong>EstateHub</strong>
            </span>

            <p className="auth-top-text">
              Find Your Dream Property
            </p>

            <h2>Create Your Account</h2>

            <p>
              Join Michy EstateHub and begin your property journey.
            </p>
          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* FULL NAME */}
            <div className="auth-field">
              <label htmlFor="register-fullName">
                Full Name
              </label>

              <div
                className={`auth-input-wrapper ${
                  errors.fullName ? "input-error" : ""
                }`}
              >
                <UserRound size={19} />

                <input
                  id="register-fullName"
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName
                      ? "register-name-error"
                      : undefined
                  }
                />
              </div>

              {errors.fullName && (
                <p
                  className="auth-error"
                  id="register-name-error"
                  role="alert"
                >
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="auth-field">
              <label htmlFor="register-email">
                Email Address
              </label>

              <div
                className={`auth-input-wrapper ${
                  errors.email ? "input-error" : ""
                }`}
              >
                <Mail size={19} />

                <input
                  id="register-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email
                      ? "register-email-error"
                      : undefined
                  }
                />
              </div>

              {errors.email && (
                <p
                  className="auth-error"
                  id="register-email-error"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="auth-field">
              <label htmlFor="register-password">
                Password
              </label>

              <div
                className={`auth-input-wrapper ${
                  errors.password ? "input-error" : ""
                }`}
              >
                <LockKeyhole size={19} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password
                      ? "register-password-error"
                      : undefined
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p
                  className="auth-error"
                  id="register-password-error"
                  role="alert"
                >
                  {errors.password}
                </p>
              )}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="auth-field">
              <label htmlFor="register-confirmPassword">
                Confirm Password
              </label>

              <div
                className={`auth-input-wrapper ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
              >
                <LockKeyhole size={19} />

                <input
                  id="register-confirmPassword"
                  type={
                    showConfirmPassword ? "text" : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  aria-invalid={Boolean(errors.confirmPassword)}
                  aria-describedby={
                    errors.confirmPassword
                      ? "register-confirm-error"
                      : undefined
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p
                  className="auth-error"
                  id="register-confirm-error"
                  role="alert"
                >
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* TERMS AND CONDITIONS */}
            <div className="auth-terms">
              <label>
                <input
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={(e) => {
                    setAgreeToTerms(e.target.checked);

                    setErrors((prev) => ({
                      ...prev,
                      terms: "",
                    }));
                  }}
                />

                <span>
                  I agree to the{" "}
                  <a href="#terms">Terms and Conditions</a>
                  {" "}and{" "}
                  <a href="#privacy">Privacy Policy</a>.
                </span>
              </label>

              {errors.terms && (
                <p className="auth-error" role="alert">
                  {errors.terms}
                </p>
              )}
            </div>

            {/* SUCCESS MESSAGE */}
            {successMessage && (
  <div className="auth-toast" role="status">
    <div className="auth-toast-icon">
      <ShieldCheck size={22} />
    </div>

    <div className="auth-toast-content">
      <h4>Account Created Successfully!</h4>
      <p>{successMessage}</p>
    </div>

    <div className="auth-toast-progress"></div>
  </div>
)}

      {/* error */}
        {errors.email && (
  <div className="auth-error-toast" role="alert">
    <div className="auth-error-toast-icon">
      <ShieldCheck size={22} />
    </div>

    <div className="auth-error-toast-content">
      <h4>Registration Failed</h4>
      <p>{errors.email}</p>
    </div>

    <div className="auth-error-toast-progress"></div>
  </div>
)}

            {/* SUBMIT BUTTON */}
            <button type="submit" className="auth-submit">
              Create Account
              <ArrowRight size={20} />
            </button>

          </form>

          <div className="auth-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <p className="auth-switch">
            Already have an account?

            <Link to="/login">
              Login
            </Link>
          </p>

          <p className="auth-bottom-text">
            Your journey to finding the right property starts here.
          </p>

        </section>
      </div>

      <footer className="auth-footer">
        <Link to="/" className="auth-footer-brand">
          <House size={25} />

          <span>
            Michy <strong>EstateHub</strong>
          </span>
        </Link>

        <p>Better Homes. Brighter Futures.</p>
      </footer>
    </main>
  );
}

export default Register;