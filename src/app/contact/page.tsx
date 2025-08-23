import React from 'react'

const contact = () => {
  return (
    export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    accepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // You can hook this with backend API or services like Formspree, Nodemailer, etc.
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d0f1b] to-[#1a1630] text-white flex flex-col items-center py-20 px-6">
      {/* Header Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We’re ready to hear from <span className="text-indigo-400">you!</span>
        </h1>
        <p className="text-gray-300 leading-relaxed">
          We love what we do, and even more to do it from Alicante. Although we
          work in a hybrid way, our offices in Alicante and Madrid are open to
          you. Use us as an excuse to visit and discover why the iconic is
          created here, surrounded by the Mediterranean.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-xl space-y-6"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 outline-none py-2"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 outline-none py-2"
          />
        </div>
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 outline-none py-2"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-transparent border-b border-gray-500 focus:border-indigo-400 outline-none py-2"
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
            required
          />
          <label>
            I have read and accept the{" "}
            <a href="#" className="text-indigo-400 underline">
              data protection law
            </a>
            *
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition rounded-lg py-3 font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default contact