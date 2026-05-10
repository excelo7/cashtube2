export default function BuyPasscodePage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] px-6 py-14">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-5xl font-bold text-black mb-10">
          Buy Your passcode
        </h1>

        <p className="text-2xl text-black leading-relaxed mb-12">
          Please provide your details, note that your
          passcode will be reviewed immediately your
          payment is completed
        </p>

        <div className="space-y-10">

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Name:
            </h2>

            <input
              type="text"
              className="w-full h-20 rounded-xl border border-gray-300 px-6 text-2xl outline-none bg-white text-black placeholder:text-gray-500 font-medium shadow-sm"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Number:
            </h2>

            <input
              type="text"
              className="w-full h-20 rounded-xl border border-gray-300 px-6 text-2xl outline-none bg-white text-black placeholder:text-gray-500 font-medium shadow-sm"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Amount:
            </h2>

            <input
              type="text"
              value="₦6,500"
              readOnly
              className="w-full h-20 rounded-xl border border-gray-300 px-6 text-2xl outline-none bg-white text-black placeholder:text-gray-500 font-medium shadow-sm"
            />
          </div>

          <a
  href="/payment"
  className="w-full block text-center bg-green-500 text-white text-3xl font-bold py-6 rounded-xl shadow-lg"
>
  Submit
</a>
        </div>

        <div className="mt-14 space-y-10">

          <p className="text-2xl text-black leading-relaxed">
            You have to make payment of ₦6,500 in order to be
            granted full access to the{" "}
            <span className="text-pink-300 font-medium">
              CASH-TUBE
            </span>{" "}
            video earning app.
          </p>

          <p className="text-2xl text-black leading-relaxed">
            Please note that you can withdraw back your ₦6,500
            immediately you gain access to your dashboard.
          </p>

        </div>

      </div>
    </main>
  )
}