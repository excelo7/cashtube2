"use client"

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      
      <div className="bg-green-600 text-white px-6 py-10">
        <h1 className="text-5xl font-bold">
          CashTube.com
        </h1>
      </div>

      <div className="bg-[#f7f4ef] rounded-t-[40px] -mt-2 p-6 min-h-screen">

        <div className="space-y-8 max-w-3xl mx-auto">

          <div>
            <label className="text-3xl text-gray-600 block mb-3">
              Amount
            </label>

            <input
              type="text"
              placeholder="₦5,500"
              className="w-full h-20 rounded-xl border border-gray-400 px-5 text-2xl outline-none bg-white"
            />
          </div>

          <div>
            <label className="text-3xl text-gray-600 block mb-3">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full h-20 rounded-xl border border-gray-400 px-5 text-2xl outline-none bg-white"
            />
          </div>

          <div>
            <label className="text-3xl text-gray-600 block mb-3">
              Your Email Address
            </label>

            <input
              type="email"
              placeholder="email address"
              className="w-full h-20 rounded-xl border border-gray-400 px-5 text-2xl outline-none bg-white"
            />
          </div>

          <button className="w-full h-20 rounded-xl bg-green-600 text-white text-3xl font-semibold">
            Proceed
          </button>

          <p className="text-center text-2xl text-gray-500 pt-10">
            Powered by Flutterwave
          </p>

        </div>

      </div>
    </main>
  )
}