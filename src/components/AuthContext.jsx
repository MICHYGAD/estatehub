import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "estatehub_user";
const ACCOUNTS_KEY = "estatehub_demo_accounts";

// Generate a password hash for this frontend demo.
async function hashPassword(password, salt) {
  const encoder = new TextEncoder();

  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const hash = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 120000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

// Compare two password hashes.
function passwordsMatch(firstHash, secondHash) {
  if (firstHash.length !== secondHash.length) {
    return false;
  }

  let difference = 0;

  for (let i = 0; i < firstHash.length; i++) {
    difference |= firstHash.charCodeAt(i) ^ secondHash.charCodeAt(i);
  }

  return difference === 0;
}

// Read the current simulated session.
function getSavedUser() {
  try {
    const savedUser = localStorage.getItem(STORAGE_KEY);
    return savedUser ? JSON.parse(savedUser) : null;
  } catch {
    return null;
  }
}

// Read demo accounts without storing passwords.
function getSavedAccounts() {
  try {
    const savedAccounts = localStorage.getItem(ACCOUNTS_KEY);
    return savedAccounts ? JSON.parse(savedAccounts) : [];
  } catch {
    return [];
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getSavedUser);
 // Register a new demo account without automatically logging in.
const register = async (name, email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const accounts = getSavedAccounts();

  const existingAccount = accounts.find(
    (account) => account.email === normalizedEmail
  );

  if (existingAccount) {
    throw new Error(
      "An account with this email already exists."
    );
  }

  // Generate a unique salt for this password.
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const saltString = Array.from(salt)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // Hash the password.
  const passwordHash = await hashPassword(password, salt);

  const newAccount = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    salt: saltString,
    passwordHash,
  };

  // Save the account without creating a login session.
  localStorage.setItem(
    ACCOUNTS_KEY,
    JSON.stringify([...accounts, newAccount])
  );

  return newAccount;
};

  // Sign in to a previously registered demo account.
const login = async (email, password) => {
  const normalizedEmail = email.trim().toLowerCase();
  const accounts = getSavedAccounts();

  const existingAccount = accounts.find(
    (account) => account.email === normalizedEmail
  );

  if (!existingAccount) {
    throw new Error(
      "Incorrect email or password. Please check your details and try again."
    );
  }

  if (!existingAccount.salt || !existingAccount.passwordHash) {
    throw new Error(
      "This demo account needs to be registered again before you can log in."
    );
  }

  const salt = new Uint8Array(
    existingAccount.salt.match(/.{2}/g).map(
      (byte) => parseInt(byte, 16)
    )
  );

  const enteredPasswordHash = await hashPassword(
    password,
    salt
  );

  if (
    !passwordsMatch(
      enteredPasswordHash,
      existingAccount.passwordHash
    )
  ) {
    throw new Error(
      "Incorrect email or password. Please check your details and try again."
    );
  }

  const {
    salt: savedSalt,
    passwordHash,
    ...userAccount
  } = existingAccount;

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(userAccount)
  );

  setUser(userAccount);

  return userAccount;
};

  // Sign out.
  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  // Update the current user's profile.
const updateProfile = (name, email) => {
  if (!user) {
    throw new Error("You must be logged in to update your profile.");
  }

  const normalizedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  // Validate the submitted information.
  if (!normalizedName || !normalizedEmail) {
    throw new Error("Name and email are required.");
  }

  const accounts = getSavedAccounts();

  // Check whether another account already uses this email.
  const emailExists = accounts.some(
    (account) =>
      account.email === normalizedEmail &&
      account.id !== user.id
  );

  if (emailExists) {
    throw new Error(
      "This email is already associated with another account."
    );
  }

  // Create the updated user.
  const updatedUser = {
    ...user,
    name: normalizedName,
    email: normalizedEmail,
  };

  // Update the corresponding demo account.
  const updatedAccounts = accounts.map((account) =>
    account.id === user.id ? updatedUser : account
  );

  localStorage.setItem(
    ACCOUNTS_KEY,
    JSON.stringify(updatedAccounts)
  );

  // Update the current session.
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedUser)
  );

  setUser(updatedUser);

  return updatedUser;
};

  const value = {
    user,
    isAuthenticated: Boolean(user),
    register,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Access authentication from any component.
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider."
    );
  }

  return context;
}