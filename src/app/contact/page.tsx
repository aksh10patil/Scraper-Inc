import React from 'react'

const contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center px-6 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            We’re ready to <br />
            <span className="text-blue-400">hear from you!</span>
          </h1>
          <p className="text-lg text-gray-300">
            We love what we do, and even more to do it from anywhere.  
            Our offices are open to you. Use this as an excuse to visit 
            and discover why the iconic is created here, surrounded by the best.  
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message*
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default contact