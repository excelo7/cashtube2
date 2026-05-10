"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [balance, setBalance] = useState(176615);
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-500 via-pink-400 to-black p-4 text-white">

      {!showReceipt && (
        <>
          <div className="bg-black/40 rounded-3xl p-6 border border-green-400">
            <h1 className="text-4xl font-bold text-green-400">
              Hello, New User
            </h1>

            <p className="text-2xl mt-2">
              Good Day MICHEAL.
            </p>

            <div className="mt-8 bg-green-600 rounded-3xl p-6">
              <p className="text-2xl">
                Balance
              </p>

              <h2 className="text-5xl font-bold mt-2">
                ₦{balance.toLocaleString()}
              </h2>

              <p className="mt-4 text-sm text-black font-bold">
                NO REFERRAL NEEDED TO WITHDRAW
              </p>
            </div>
          </div>

          <h2 className="text-5xl font-bold text-center mt-14">
            Watch Videos To Earn
          </h2>

          <div className="space-y-6 mt-10">

            <video
              src="/videos/ad1.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-3xl"
            />

            <video
              src="/videos/ad2.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-3xl"
            />

            <video
              src="/videos/ad3.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full rounded-3xl"
            />

          </div>

          <div className="bg-white rounded-3xl p-6 mt-12 text-black">
            <input
              placeholder="Account Number"
              className="w-full border-b-2 border-black py-4 text-2xl outline-none"
            />

            <input
              placeholder="Account Name"
              className="w-full border-b-2 border-black py-4 text-2xl outline-none mt-6"
            />

            <input
              placeholder="Bank Name"
              className="w-full border-b-2 border-black py-4 text-2xl outline-none mt-6"
            />

            <input
              placeholder="Amount"
              className="w-full border-b-2 border-black py-4 text-2xl outline-none mt-6"
            />

            <button
              onClick={() => setShowReceipt(true)}
              className="w-full bg-green-600 text-white text-3xl font-bold py-5 rounded-2xl mt-10"
            >
              Withdraw
            </button>
          </div>
        </>
      )}

      {showReceipt && (
        <div className="bg-white rounded-3xl p-8 mt-10 text-black">
          <div className="flex justify-center">
            <div className="w-28 h-28 rounded-full bg-green-500 flex items-center justify-center text-white text-6xl">
              ✓
            </div>
          </div>

          <h1 className="text-center text-5xl font-bold text-green-600 mt-6">
            WITHDRAWAL COMPLETED
          </h1>

          <h2 className="text-center text-4xl font-bold mt-4">
            ₦176,615
          </h2>

          <div className="bg-gray-100 rounded-2xl p-6 mt-10">
            <h3 className="text-3xl font-bold mb-8">
              Demo Payment Details
            </h3>

            <div className="space-y-6 text-2xl">
              <p>Ref Number: 86578968</p>
              <p>Payment Date: 10th May, 2026</p>
              <p>Account Name: Micheal Henry</p>
              <p>Account Number: 8036201331</p>
              <p>Bank Name: Opay Bank</p>
              <p>From: CashTube/Ads </p>
              <p>Status: Success</p>
            </div>
          </div>
          <button
  onClick={() => setShowReceipt(false)}
  className="w-full mt-10 bg-green-600 text-white text-3xl font-bold py-5 rounded-2xl"
>
  Back To Home
</button>
        </div>
      )}

    </main>
  );
}