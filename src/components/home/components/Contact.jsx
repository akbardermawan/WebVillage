import React, { useState } from "react";

//Deployment ID
//AKfycbxzrvsCu8f-jJ-5QsR9b498m6vRK0XeSWBxWrBeZ1tgvQkAv8BcDcK0sYAXYySfuJQ4NA
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    nohp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxzrvsCu8f-jJ-5QsR9b498m6vRK0XeSWBxWrBeZ1tgvQkAv8BcDcK0sYAXYySfuJQ4NA/exec";

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("nohp", form.nohp);
    formData.append("message", form.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      alert("Pesan Anda berhasil dikirim!");

      setForm({
        name: "",
        email: "",
        nohp: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex justify-center items-center py-16 px-4 bg-gradient-to-b from-gray-100 via-gray-30000 to-[#2E8B57]">
      <div className="w-full max-w-2xl bg-white/50 rounded-3xl shadow-2xl p-8 md:p-10 border ">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Send We a Message
          </h2>

          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Please send your message or question via the form below.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Input your name"
              required
              className="w-full  border border-slate-700 text-gray-600 placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your email"
              required
              className="w-full  border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium  text-gray-600 mb-2">
              No HP
            </label>

            <input
              type="text"
              name="nohp"
              value={form.nohp}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              required
              className="w-full border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium  text-gray-600 mb-2">
              Message
            </label>

            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full  border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-sky-500/30"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
