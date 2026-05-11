"use client"

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      
      {/* TOP GREEN BAR */}
      <div className="bg-green-500 py-6 px-6">
        <h1 className="text-5xl font-bold text-white">
          CashTube.com
        </h1>
      </div>

      {/* FORM */}
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Amount */}
        <div className="mb-8">
          <label className="block text-black text-3xl mb-3">
            Amount
          </label>

          <input
            type="text"
            defaultValue="₦6,500"
            className="w-full p-5 rounded-2xl border border-gray-300 text-black text-2xl bg-white outline-none"
          />
        </div>

        {/* Full Name */}
        <div className="mb-8">
          <label className="block text-black text-3xl mb-3">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Your full name"
            className="w-full p-5 rounded-2xl border border-gray-300 text-black text-2xl bg-white outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-8">
          <label className="block text-black text-3xl mb-3">
            Your Email Address
          </label>

          <input
            type="email"
            placeholder="email address"
            className="w-full p-5 rounded-2xl border border-gray-300 text-black text-2xl bg-white outline-none"
          />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-green-500 text-white text-3xl font-bold py-5 rounded-2xl">
          Proceed
        </button>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-2xl mt-10">
          Powered by Flutterwave
        </p>

      </div>
    </main>
  )
}