import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900 min-h-screen">
      <div className="flex flex-col justify-center items-center gap-6 h-screen px-4 text-center text-white">
        <div className="font-bold text-3xl">
          <h1 className="text-6xl font-extrabold tracking-widest drop-shadow-lg">Buy me a Chai</h1>
          <span>
            <img
              src="https://media0.giphy.com/media/IgoaBtwmsrVf9xmjVT/giphy.gif?cid=6c09b9522a1s4vsamjnaa7nluowjyevewl5nll47j7cljhs0&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
              className="h-[120px] drop-shadow-xl"
              alt="chai gif"
            />
          </span>
        </div>
        <p className="font-mono text-2xl max-w-xl mx-auto tracking-wide leading-relaxed">
          A crowdfunding platform for creators. Get funded by your followers while sipping your tea
        </p>
        <div className="flex gap-4 mt-6">
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 shadow-md hover:shadow-lg transition duration-200">
            Start now
          </button>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-6 py-3 shadow-md hover:shadow-lg transition duration-200">
            Read more
          </button>
        </div>
      </div>


      <section className="flex justify-center items-center gap-12 py-8 px-4 flex-wrap">
        <div className="flex flex-col items-center gap-4 text-center max-w-xs">
          <img
            src="https://media.giphy.com/media/TdfNcyAkFwHLq/giphy.gif"
            alt="money transfer"
            className="w-[150px] transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-xl font-semibold">
            Get your money transferred directly to your bank account, easily and securely.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center max-w-xs">
          <img
            src="https://media.giphy.com/media/3o7bu5OdZ9rso8Stks/giphy.gif"
            alt="easy process"
            className="w-[150px] transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-xl font-semibold">
            It's as simple as one click to get started—no complicated steps.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center max-w-xs">
          <img
            src="https://media.giphy.com/media/l2YWMkD2dyHg00r5W/giphy.gif"
            alt="frustration free"
            className="w-[150px] transition duration-300 ease-in-out transform hover:scale-110"
          />
          <p className="text-xl font-semibold">
            Skip the add-to-cart frustrations and enjoy a smoother experience.
          </p>
        </div>
      </section>



      <section className="text-white text-center py-12 px-4 bg-gradient-to-r from-purple-900 to-indigo-900">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wider">Why Choose Us?</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
          We provide a seamless way for creators to connect with their followers and receive support, hassle-free.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-2xl font-semibold mb-2">Fast Payouts</h3>
            <p>Receive funds directly to your account without delay.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-2xl font-semibold mb-2">Secure Platform</h3>
            <p>Your payments are secure, making it easy for followers to support you.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg max-w-xs">
            <h3 className="text-2xl font-semibold mb-2">User-Friendly</h3>
            <p>Our platform is built to ensure a smooth experience for both creators and supporters.</p>
          </div>
        </div>
      </section>

      <div className="h-[2px] bg-gray-300 mx-4 my-8"></div>

      {/* Features Section */}
      <section className="text-white text-center py-12 px-4">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wider">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200 p-6">
            <h3 className="text-2xl font-bold mb-4">Customizable Profile</h3>
            <p>Create a profile that reflects your style and easily share your story.</p>
          </div>
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200 p-6">
            <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
            <p>Connect with followers from around the world and grow your support base.</p>
          </div>
          <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition duration-200 p-6">
            <h3 className="text-2xl font-bold mb-4">Instant Notifications</h3>
            <p>Get notified instantly when a follower supports you, keeping you in the loop.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
