// Authentication utilities and types
export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin"
  avatar?: string
  createdAt: Date
}

export interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
}

// Mock authentication - replace with real auth service
export const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@charity.org",
    name: "Admin User",
    role: "admin",
    createdAt: new Date(),
  },
  {
    id: "2",
    email: "user@example.com",
    name: "John Doe",
    role: "user",
    createdAt: new Date(),
  },
]

export const login = async (email: string, password: string): Promise<User> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user = mockUsers.find((u) => u.email === email)
  if (!user) {
    throw new Error("Invalid credentials")
  }

  // Store in localStorage (replace with proper token handling)
  localStorage.setItem("auth_user", JSON.stringify(user))
  return user
}

export const logout = async (): Promise<void> => {
  localStorage.removeItem("auth_user")
}

export const getCurrentUser = (): User | null => {
  if (typeof window === "undefined") return null

  const stored = localStorage.getItem("auth_user")
  if (!stored) return null

  try {
    return JSON.parse(stored)
  } catch {
    return null
  }
}

export const register = async (email: string, password: string, name: string): Promise<User> => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const newUser: User = {
    id: Date.now().toString(),
    email,
    name,
    role: "user",
    createdAt: new Date(),
  }

  localStorage.setItem("auth_user", JSON.stringify(newUser))
  return newUser
}
