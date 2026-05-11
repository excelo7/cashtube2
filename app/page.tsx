export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-green-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="flex items-center justify-between p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-green-400">
          CashTube
        </h1>

      </div>

      <section className="flex flex-col items-center justify-center text-center px-6 py-24">

        <h2 className="text-5xl font-bold mb-6">
          Watch Videos & Earn Money
        </h2>

        <p className="text-gray-400 max-w-2xl mb-10">
          Join thousands of users earning daily rewards by watching videos,
          completing tasks and inviting friends.
        </p>

        <button className="bg-green-500 text-black px-8 py-4 rounded-xl text-lg font-bold">
          <a
  href="/buy-passcode"
  className="bg-green-500 text-black px-10 py-4 rounded-2xl font-bold text-2xl"
>
  Get Started
</a>
        </button>

      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20">

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Daily Earnings
          </h3>

          <p className="text-gray-400">
            Earn rewards daily from watching content online.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Referral Bonus
          </h3>

          <p className="text-gray-400">
            Invite your friends and grow your income faster.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold mb-3">
            Fast Withdrawals
          </h3>

          <p className="text-gray-400">
            Withdraw directly to your bank account easily.
          </p>
        </div>

      </section>
      <div className="overflow-hidden py-4 border-t border-green-500">
  <p className="text-center text-green-500 font-bold text-lg">
    © 2026 CashTube — All Rights Reserved
  </p>
</div>
<a
  href="https://t.me/cashtubehelp"
  target="_blank"
  className="fixed bottom-40 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-black font-bold shadow-lg"
>
  💬
</a>
    </main>
  );
}