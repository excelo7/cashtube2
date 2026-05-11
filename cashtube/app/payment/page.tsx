"use client"

import { useEffect, useState } from "react"

export default function PaymentPage() {
  const [timeLeft, setTimeLeft] = useState(1200)

  useEffect(() => {
    if (timeLeft <= 0) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <main className="min-h-screen bg-[#f7f4ef] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#fffdf9] rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Signup With Crypto
        </h1>

        <div className="space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Tether USDT
            </h2>

            <div className="bg-gray-100 p-4 rounded-2xl break-all text-black text-lg">
              0x5a60835bb807350B0dEC38d0cb04aDe2e123000E
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-orange-700 mb-3">
              BTC
            </h2>

            <div className="bg-gray-100 p-4 rounded-2xl break-all text-black text-lg">
              bc1qlf3fpar8zsgr6t0drhqyyu7d3w75vqgr4s0r3h
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              Solana
            </h2>

            <div className="bg-gray-100 p-4 rounded-2xl break-all text-black text-lg">
              DUoH8zDsruNMM47CZaK9PAGW1ktJktjmEZwG4PBAakR1
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              Ethereum
            </h2>

            <div className="bg-gray-100 p-4 rounded-2xl break-all text-black text-lg">
              0x5a60835bb807350B0dEC38d0cb04aDe2e123000E
            </div>
          </div>

        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-red-600">
            Payment closes in
          </p>

          <div className="mt-4 text-5xl font-extrabold text-black">
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </div>
        </div>

      </div>
    </main>
  )
}