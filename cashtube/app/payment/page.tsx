"use client"

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-green-950">

      {/* TOP HEADER */}
      <div className="bg-green-600 text-white px-6 py-10 shadow-lg">
        <h1 className="text-5xl font-bold">
          CashTube.com
        </h1>
      </div>

      {/* MAIN CARD */}
      <div className="bg-green-950 rounded-t-[40px] -mt-2 p-6 min-h-screen">

        <div className="max-w-3xl mx-auto space-y-8">

          {/* Amount */}
          <div>
            <label className="text-3xl text-white block mb-3">
              Amount
            </label>

            <input
              type="text"
              placeholder="₦6,500"
              className="w-full h-20 rounded-xl border border-green-700 bg-green-900 text-white px-5 text-2xl outline-none"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="text-3xl text-white block mb-3">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full h-20 rounded-xl border border-green-700 bg-green-900 text-white px-5 text-2xl outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-3xl text-white block mb-3">
              Your Email Address
            </label>

            <input
              type="email"
              placeholder="email address"
              className="w-full h-20 rounded-xl border border-green-700 bg-green-900 text-white px-5 text-2xl outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full h-20 rounded-xl bg-green-500 hover:bg-green-600 text-white text-3xl font-bold transition">
            Proceed
          </button>

          {/* Footer */}
          <p className="text-center text-2xl text-green-200 pt-10">
            Powered by Flutterwave
          </p>

        </div>

      </div>

    </main>
  )
}