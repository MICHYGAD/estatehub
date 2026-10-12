import { useAuth } from "../components/AuthContext.jsx";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  House,
  Heart,
  ShieldCheck,
  CircleAlert,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import "./Login.css";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from?.pathname || "/";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [showRegistrationSuccess, setShowRegistrationSuccess] =
  useState(location.state?.registered || false);

  useEffect(() => {
if (!showRegistrationSuccess) return;

const timer = setTimeout(() => {
setShowRegistrationSuccess(false);
}, 5000);

return () => clearTimeout(timer);
}, [showRegistrationSuccess]);

useEffect(() => {
  if (!loginErrorMessage) return;

  const timer = setTimeout(() => {
    setLoginErrorMessage("");
  }, 5000);

  return () => clearTimeout(timer);
}, [loginErrorMessage, setLoginErrorMessage]);


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
    setLoginErrorMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    const email = formData.email.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email address is required.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Your password must contain at least 8 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();

  setErrors(validationErrors);
  setSuccessMessage("");
  setLoginErrorMessage("");

  if (Object.keys(validationErrors).length > 0) {
    return;
  }

  try {
    await login(formData.email, formData.password);

    navigate(redirectTo, { replace: true });
  } catch (error) {
    setErrors({});
    setLoginErrorMessage(
      error.message || "Unable to log in. Please try again."
    );
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
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h1>
              Your Dream Home
              <br />
              Is Just a Login Away
            </h1>

            <p className="auth-visual-description">
              Sign in to your Michy EstateHub account to save
              favorite properties, manage your profile, and
              continue your property journey.
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
                <p>Keep track of properties you love.</p>
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
                <p>Access your details and preferences.</p>
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

            <h2>Welcome Back!</h2>

            <p>
              Sign in to your Michy EstateHub account.
            </p>
          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
            noValidate
          >

            {/* EMAIL */}
            <div className="auth-field">
              <label htmlFor="login-email">
                Email Address
              </label>

              <div
                className={`auth-input-wrapper ${
                  errors.email ? "input-error" : ""
                }`}
              >
                <Mail size={19} />

                <input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "login-email-error" : undefined
                  }
                />
              </div>

              {errors.email && (
                <p
                  className="auth-error"
                  id="login-email-error"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="auth-field">
              <label htmlFor="login-password">
                Password
              </label>

              <div
                className={`auth-input-wrapper ${
                  errors.password ? "input-error" : ""
                }`}
              >
                <LockKeyhole size={19} />

                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password
                      ? "login-password-error"
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
                  id="login-password-error"
                  role="alert"
                >
                  {errors.password}
                </p>
              )}
            </div>

            {/* REMEMBER ME AND FORGOT PASSWORD */}
            <div className="auth-options">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="auth-text-button"
                onClick={() => {
                  window.alert(
                    "Password recovery will be implemented when authentication is connected."
                  );
                }}
              >
                Forgot password?
              </button>
            </div>


      {/* REGISTRATION SUCCESS TOAST */}
{showRegistrationSuccess && (
  <div className="login-registration-toast" role="status">
    <div className="login-registration-toast-icon">
      <ShieldCheck size={22} />
    </div>

    <div className="login-registration-toast-content">
      <h4>Registration Successful!</h4>
      <p>Account created successfully! Please log in to continue.</p>
    </div>

    <button
      type="button"
      className="login-registration-toast-close"
      onClick={() => setShowRegistrationSuccess(false)}
      aria-label="Dismiss notification"
    >
      &times;
    </button>

    <div className="login-registration-toast-progress"></div>
  </div>
)}

{/* LOGIN SUCCESS MESSAGE */}
{successMessage && (
  <p className="auth-success" role="status">
    {successMessage}
  </p>
)}


      {/* LOGIN ERROR TOAST */}
{loginErrorMessage && (
  <div className="login-error-toast" role="alert">
    <div className="login-error-toast-icon">
      <CircleAlert size={22} />
    </div>

    <div className="login-error-toast-content">
      <h4>Login Failed</h4>
      <p>{loginErrorMessage}</p>
    </div>

    <button
      type="button"
      className="login-error-toast-close"
      onClick={() => setLoginErrorMessage("")}
      aria-label="Dismiss notification"
    >
      &times;
    </button>

    <div className="login-error-toast-progress"></div>
  </div>
)}



    {/* SUBMIT BUTTON */}
    <button type="submit" className="auth-submit">
      Login
      <ArrowRight size={20} />
    </button>

  </form>

  <div className="auth-divider">
    <span></span>
    <p>or</p>
    <span></span>
  </div>

  <p className="auth-switch">
    Don't have an account?

    <Link to="/register">
      Register
    </Link>
  </p>

  <p className="auth-bottom-text">
    By continuing, you agree to use Michy EstateHub
    responsibly.
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

export default Login;