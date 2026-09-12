"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [hasSignedUpBefore, setHasSignedUpBefore] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("signup"); // "login" | "signup"
  const [pendingAction, setPendingAction] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("bs_auth_user");
      const savedSignedUp = localStorage.getItem("bs_has_signed_up");

      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      if (savedSignedUp === "true") {
        setHasSignedUpBefore(true);
      }
    } catch (e) {
      console.error("Error reading auth from localStorage:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData);
    setHasSignedUpBefore(true);
    try {
      localStorage.setItem("bs_auth_user", JSON.stringify(userData));
      localStorage.setItem("bs_has_signed_up", "true");
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const signupUser = (userData) => {
    setUser(userData);
    setHasSignedUpBefore(true);
    try {
      localStorage.setItem("bs_auth_user", JSON.stringify(userData));
      localStorage.setItem("bs_has_signed_up", "true");
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("bs_auth_user");
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  /**
   * Opens the auth modal.
   * If hasSignedUpBefore is true and mode isn't explicitly forced, defaults to "login".
   * Otherwise defaults to "signup".
   */
  const openAuthModal = (options = {}) => {
    const { mode, onSuccess } = options;
    const defaultMode = hasSignedUpBefore ? "login" : "signup";
    setAuthModalMode(mode || defaultMode);
    setPendingAction(() => (typeof onSuccess === "function" ? onSuccess : null));
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
    setPendingAction(null);
  };

  /**
   * Form gating utility:
   * If user is logged in -> runs action immediately.
   * If not logged in -> opens AuthModal and executes action after login/signup!
   */
  const requireAuth = (action) => {
    if (user) {
      if (typeof action === "function") action();
      return true;
    }
    openAuthModal({ onSuccess: action });
    return false;
  };

  const handleAuthSuccess = (userData) => {
    if (pendingAction) {
      try {
        pendingAction(userData);
      } catch (e) {
        console.error("Error executing pending action:", e);
      }
    }
    closeAuthModal();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        hasSignedUpBefore,
        authModalOpen,
        authModalMode,
        setAuthModalMode,
        openAuthModal,
        closeAuthModal,
        requireAuth,
        loginUser,
        signupUser,
        logout,
        handleAuthSuccess,
        isLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
