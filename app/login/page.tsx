"use client";
import { useState } from "react"

export default function LoginPage() {
  const [code, setCode] = useState("")
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <main className="relative overflow-hidden min-h-screen bg-black flex flex-col items-center justify-center">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 opacity-80 money-rain"
              style={{
                left: `${i * 3}%`,
                top: `-${i * 5}%`,
                animationDuration: `${3 + i % 5}s`,
                animationDelay: `${i % 5}s`,
                fontSize: `${40 + (i % 5) * 10}px`,
                filter: "drop-shadow(0 0 15px #39ff14)",
              }}
            >
              $
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-bold text-black mb-3">
          Welcome To
        </h1>

        <p className="text-green-600 text-3xl font-bold mb-6">
          CashTube 2026
        </p>

        <p className="text-2xl text-gray-700 mb-6">
          Enter (5) digit code
        </p>

        <input
          type="password"
          value={code}
          readOnly
          maxLength={5}
          className="w-full max-w-md border-2 border-green-500 rounded-full px-6 py-4 mb-10 text-center text-3xl outline-none bg-black text-white"
        />

        <div className="grid grid-cols-3 gap-6 mb-10">

          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <button
              key={num}
              onClick={() => {
                if (code.length < 5) {
                  setCode(code + num)
                }
              }}
              className="w-24 h-24 bg-green-500 rounded-2xl text-black text-3xl font-bold shadow-lg"
            >
              {num}
            </button>
          ))}

          <a
            href="/buy-passcode"
            className="w-24 h-24 bg-white border-2 border-black rounded-2xl text-black text-2xl font-bold flex items-center justify-center"
          >
            Sign Up
          </a>

          <button
            onClick={() => setCode("")}
            className="w-24 h-24 bg-white border-2 border-black rounded-2xl text-black text-2xl font-bold"
          >
            Clear
          </button>

          <button
            onClick={() => {
              setShowPopup(true)
            }}
            className="w-24 h-24 bg-white border-2 border-black rounded-2xl text-black text-2xl font-bold"
          >
            Login
          </button>

        </div>

        <a
          href="/buy-passcode"
          className="bg-gradient-to-r from-green-400 to-green-600 text-white text-2xl px-10 py-4 rounded-full font-bold"
        >
          Signup With Crypto
        </a>

        {showPopup && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-[#f5f1ea] w-[90%] max-w-md rounded-3xl overflow-hidden shadow-2xl">

              <div className="p-10 text-center">

                <div className="w-32 h-32 border-4 border-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-red-500 text-7xl font-bold">
                    ×
                  </span>
                </div>

                <h1 className="text-5xl font-bold text-black mb-6">
                  Oops...
                </h1>

                <p className="text-3xl text-black mb-10">
                  invalid Passcode!
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-green-500 text-white text-3xl px-10 py-4 rounded-xl font-bold"
                >
                  OK
                </button>

              </div>

              <div className="border-t border-gray-300 p-6 text-center">
                <a
                  href="/buy-passcode"
                  className="text-orange-500 text-3xl font-medium"
                >
                  Buy Passcode?
                </a>
              </div>

            </div>

          </div>
        )}

      </main>

      <style jsx>{`
        @keyframes rain {
          0% {
            transform: translateY(-120vh) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          100% {
            transform: translateY(150vh) rotate(360deg);
            opacity: 0;
          }
        }

        .money-rain {
          animation-name: rain;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>

    </>
  )
}