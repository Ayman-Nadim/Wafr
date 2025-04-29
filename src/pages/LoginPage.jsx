import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

// Language translations
const translations = {
  en: {
    title: "Welcome Back",
    subtitle: "Please sign in to your account",
    email: "Email",
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    signIn: "Sign In",
    noAccount: "Don't have an account?",
    signUp: "Sign up",
    switchToFrench: "Français",
  },
  fr: {
    title: "Bon Retour",
    subtitle: "Veuillez vous connecter à votre compte",
    email: "Email",
    emailPlaceholder: "Entrez votre email",
    password: "Mot de passe",
    passwordPlaceholder: "Entrez votre mot de passe",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié?",
    signIn: "Se Connecter",
    noAccount: "Vous n'avez pas de compte?",
    signUp: "S'inscrire",
    switchToEnglish: "English",
  },
}

const LoginPage = () => {
  const backgroundImage=require("../coverWafer.jpg")
  const [language, setLanguage] = useState("en")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [token, setToken] = useState("")
  const t = translations[language]
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Login attempt with:", { email, password, rememberMe })
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
  
      const data = await response.json()
  
      if (response.ok) {
        console.log("Login successful, token:", data.token)
        setToken(data.token) // Store the token in the state
        localStorage.setItem("authToken", data.token) // Store the token in localStorage
        navigate("/ApplicationPage") // Redirect after successful login
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.")
      }
    } catch (error) {
      console.error("Error during login:", error)
      setErrorMessage("An error occurred during login.")
    }
  }
  

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  return (
    <div
    className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      
    }}
  >
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-md border border-purple-200 hover:bg-purple-50 transition-colors"
        >
          {language === "en" ? t.switchToFrench : t.switchToEnglish}
        </button>
      </div>

      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <img
            src="https://www.wafr.co/assets/img/logo/logo.png"
            style={{ width: "60px" }}
            className="mx-auto"
            alt="Logo"
          />
          <p className="mt-2 text-sm text-gray-600">{t.subtitle}</p>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder={t.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t.password}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder={t.passwordPlaceholder}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                {t.rememberMe}
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                {t.forgotPassword}
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
            >
              {t.signIn}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {t.noAccount}{" "}
            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
              {t.signUp}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
