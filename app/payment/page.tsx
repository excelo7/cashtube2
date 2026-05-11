"use client"

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f3]">
      <div className="bg-[#23235c] h-56 rounded-b-[40px] p-6">
        <h1 className="text-white text-5xl font-bold mt-20">
          CashTube.com
        </h1>
      </div>

      <div className="bg-[#f3f3f3] -mt-10 rounded-t-[40px] p-8 min-h-screen">
        <div className="space-y-10">

          <div>
            <h2 className="text-4xl text-gray-600 mb-4">Amount</h2>

            <input
              type="text"
              placeholder="₦5,500"
              className="w-full h-20 rounded-xl border-2 border-gray-300 px-6 text-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl text-gray-600 mb-4">
              Full Name
            </h2>

            <input
              type="text"
              placeholder="Your full name"
              className="w-full h-20 rounded-xl border-2 border-black px-6 text-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl text-gray-600 mb-4">
              Your Email Address
            </h2>

            <input
              type="email"
              placeholder="email address"
              className="w-full h-20 rounded-xl border-2 border-black px-6 text-2xl"
            />
          </div>

          <button className="w-full bg-[#23235c] text-white text-3xl py-6 rounded-xl">
            Proceed
          </button>

          <p className="text-center text-2xl text-gray-500 pt-16">
            Powered by Flutterwave
          </p>

        </div>
      </div>
    </main>
  )
}