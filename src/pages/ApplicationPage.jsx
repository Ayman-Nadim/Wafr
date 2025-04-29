"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ApplicationPage() {
  // State
  const [phone, setPhone] = useState("")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isBlocking, setIsBlocking] = useState(false)
  const [isUnblocking, setIsUnblocking] = useState(false)
  const [notification, setNotification] = useState(null)

  // API base URL - change this to match your backend URL
  const API_BASE_URL = "http://localhost:5000/api";

  // Function to search for a user by phone number
  const searchUser = async (phone) => {
    try {
      const response = await fetch(`${API_BASE_URL}/fournisseurs/${encodeURIComponent(phone)}/details`);
      console.log("Phone sent:", phone);
  
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found");
        }
        throw new Error("Failed to fetch user data");
      }
  
      const data = await response.json(); // ✅ lire le body une seule fois
      console.log("User data:", data);    // ✅ puis l’afficher
      return data;
  
    } catch (error) {
      console.error("Error searching for user:", error);
      throw error;
    }
  };
  

  // Function to block a user
  const blockUser = async (phone) => {
    try {
      const response = await fetch(`${API_BASE_URL}/fournisseurs/${phone}/block`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to block user")
      }

      return await response.json()
    } catch (error) {
      console.error("Error blocking user:", error)
      throw error
    }
  }

  // Function to unblock a user
  const unblockUser = async (phone) => {
    try {
      const response = await fetch(`${API_BASE_URL}/fournisseurs/${phone}/unblock`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Failed to unblock user")
      }

      return await response.json()
    } catch (error) {
      console.error("Error unblocking user:", error)
      throw error
    }
  }

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault()

    if (!phone) {
      showNotification("Please enter a phone number", "error")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const data = await searchUser(phone)
      setUserData(data)
    } catch (error) {
      setError(error.message || "Failed to fetch user data")
      showNotification(error.message || "Failed to fetch user data", "error")
      setUserData(null)
    } finally {
      setLoading(false)
    }
  }

  
  // Handle block user
  const handleBlockUser = async () => {
    if (window.confirm(`Are you sure you want to block ${userData.name}?`)) {
      setIsBlocking(true)
      try {
        await blockUser(userData.phone)
        setUserData({ ...userData, status: "blocked" })
        showNotification(`${userData.name} has been blocked`, "success")
      } catch (error) {
        setError(error.message || "Failed to block user")
        showNotification(error.message || "Failed to block user", "error")
      } finally {
        setIsBlocking(false)
      }
    }
  }

  // Handle unblock user
  const handleUnblockUser = async () => {
    if (window.confirm(`Are you sure you want to unblock ${userData.name}?`)) {
      setIsUnblocking(true)
      try {
        await unblockUser(userData.phone)
        setUserData({ ...userData, status: "active" })
        showNotification(`${userData.name} has been unblocked`, "success")
      } catch (error) {
        setError(error.message || "Failed to unblock user")
        showNotification(error.message || "Failed to unblock user", "error")
      } finally {
        setIsUnblocking(false)
      }
    }
  }

  // Show notification
  const showNotification = (message, type = "info") => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  // Icons
  const renderIcon = (name) => {
    switch (name) {
      case "search":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        )
      case "shield-alert":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
        )
      case "shield-check":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
        )
      case "refresh-cw":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
          </svg>
        )
      case "alert-circle":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        )
      default:
        return null
    }
  }

  const navigate = useNavigate();
  // Function to handle logout
  const handleLogout = () => {
    // Clear the session or authentication token
    localStorage.removeItem("authToken"); // Example if you're using localStorage
    sessionStorage.removeItem("authToken"); // Clear sessionStorage if used

    // Optionally, clear the user data from state
    setUserData(null);

    // Redirect the user to the login page or home page
    navigate("/login"); // Adjust this to your actual login route
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all transform translate-y-0 opacity-100 ${
            notification.type === "success"
              ? "bg-[#28a745] text-white"
              : notification.type === "error"
                ? "bg-[#dc3545] text-white"
                : "bg-[#17a2b8] text-white"
          }`}
        >
          {notification.message}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <img
          src="https://www.wafr.co/assets/img/logo/logo.png"
          style={{ width: "60px" }}
          className="mx-auto"
          alt="Logo"
        />
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-2 hidden md:inline">Support Agent</span>
            <div className="h-8 w-8 rounded-full bg-[#9333ea] text-white flex items-center justify-center">
              <span className="text-sm font-medium">TU</span>
            </div>
          </div>
        </header>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Search User</h2>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {renderIcon("search")}
              </div>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number (e.g. +212600000001)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-[#9333ea] hover:bg-[#9333ea]/90 text-white font-medium py-3 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:ring-offset-2"
            >
              Search
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-500">
            <p>Search for a user by their phone number to view their details and manage their account.</p>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex justify-center my-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9333ea]"></div>
          </div>
        )}

        {/* Error Message */}
        {error && !loading && (
          <div className="bg-[#dc3545]/10 border-l-4 border-[#dc3545] text-[#dc3545] p-4 my-4 rounded">
            <p>{error}</p>
          </div>
        )}

        {/* User Details */}
        {userData && !loading && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* User Header */}
            <div className="p-6 border-b">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{userData.name}</h2>
                  <p className="text-gray-600">{userData.phone}</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center">
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
                      userData.status === "active" ? "bg-[#28a745]/10 text-[#28a745]" : "bg-[#dc3545]/10 text-[#dc3545]"
                    }`}
                  >
                    {userData.status === "active" ? (
                      <>
                        {renderIcon("shield-check")}
                        Active
                      </>
                    ) : (
                      <>
                        {renderIcon("shield-alert")}
                        Blocked
                      </>
                    )}
                  </div>
                  {userData.status === "active" ? (
                    <button
                      onClick={handleBlockUser}
                      disabled={isBlocking}
                      className="ml-3 bg-[#dc3545] hover:bg-[#dc3545]/90 text-white px-4 py-1 rounded-md text-sm font-medium flex items-center disabled:opacity-50"
                    >
                      {isBlocking ? renderIcon("refresh-cw") : renderIcon("shield-alert")}
                      Block User
                    </button>
                  ) : (
                    <button
                      onClick={handleUnblockUser}
                      disabled={isUnblocking}
                      className="ml-3 bg-[#28a745] hover:bg-[#28a745]/90 text-white px-4 py-1 rounded-md text-sm font-medium flex items-center disabled:opacity-50"
                    >
                      {isUnblocking ? renderIcon("refresh-cw") : renderIcon("shield-check")}
                      Unblock User
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* User Info Cards */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Balance</h3>
                <div className="text-3xl font-bold text-[#9333ea]">
                {Number(userData.balance).toFixed(2)} MAD
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Status</h3>
                <div
                className={`text-lg font-medium ${userData.status === "active" ? "text-[#28a745]" : "text-[#dc3545]"}`}
                >
                {userData.status === "active" ? "Active Account" : "Blocked Account"}
                </div>
                {userData.status === "blocked" && (
                <div className="mt-2 flex items-start text-sm text-[#dc3545]">
                    {renderIcon("alert-circle")}
                    <span>This account has been blocked and cannot perform transactions</span>
                </div>
                )}
            </div>
            </div>


            {/* Transaction History */}
            <div className="p-6 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h3>
              {userData.transaction_history && userData.transaction_history.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Transaction
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {userData.transaction_history.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {transaction}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(Date.now() - index * 86400000).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">No transaction history available</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Logout Button */}
      <button 
    
        className="fixed bottom-5 left-5 p-3 bg-purple-600 text-white rounded-full flex items-center space-x-2 hover:bg-purple-500 transition-all duration-300 shadow-md"
        >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            strokeWidth="2"
        >
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M17 16l4-4m0 0l-4-4m4 4H3"
            />
        </svg>
        <span className="text-sm">Logout</span>
        </button>
    </div>
  )
}

export default ApplicationPage
