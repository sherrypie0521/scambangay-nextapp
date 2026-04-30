"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface FormErrors {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

function validateForm(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): FormErrors {
  const errors: FormErrors = {}

  if (!name.trim()) {
    errors.name = "Full name is required."
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters."
  }

  if (!email.trim()) {
    errors.email = "Email is required."
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address."
  }

  if (!password) {
    errors.password = "Password is required."
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters."
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must contain at least one uppercase letter."
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must contain at least one number."
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password."
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match."
  }

  return errors
}

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)

  const clearError = (field: keyof FormErrors) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(name, email, password, confirmPassword)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    alert("Account created successfully! (Demo)")
    router.push("/login")
  }

  const getStrength = () => {
    if (!password) return 0
    let score = 0
    if (password.length >= 8) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++
    return score
  }

  const strength = getStrength()
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength]
  const strengthColor = ["", "bg-destructive", "bg-yellow-500", "bg-blue-500", "bg-green-500"][strength]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Back to home
        </Link>

        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight mb-1">Create an account</h1>
          <p className="text-sm text-muted-foreground">Join the Scambangay community today</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="name" className="text-sm font-medium">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Juan dela Cruz"
              value={name}
              onChange={(e) => { setName(e.target.value); clearError("name") }}
              className={`w-full px-3 py-2.5 rounded-md border text-sm bg-background transition-colors outline-none focus:ring-2 focus:ring-ring ${
                errors.name ? "border-destructive focus:ring-destructive/30" : "border-input"
              }`}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError("email") }}
              className={`w-full px-3 py-2.5 rounded-md border text-sm bg-background transition-colors outline-none focus:ring-2 focus:ring-ring ${
                errors.email ? "border-destructive focus:ring-destructive/30" : "border-input"
              }`}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => { setPassword(e.target.value); clearError("password") }}
              className={`w-full px-3 py-2.5 rounded-md border text-sm bg-background transition-colors outline-none focus:ring-2 focus:ring-ring ${
                errors.password ? "border-destructive focus:ring-destructive/30" : "border-input"
              }`}
            />
            {password.length > 0 && (
              <div className="space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all ${
                        i <= strength ? strengthColor : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Strength: {strengthLabel}</p>
              </div>
            )}
            {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
          </div>

          <div className="space-y-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value); clearError("confirmPassword") }}
              className={`w-full px-3 py-2.5 rounded-md border text-sm bg-background transition-colors outline-none focus:ring-2 focus:ring-ring ${
                errors.confirmPassword ? "border-destructive focus:ring-destructive/30" : "border-input"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-xs text-destructive">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="text-foreground underline underline-offset-4 hover:opacity-70">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}