import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    toast.dismiss();

    await new Promise((res) => setTimeout(res, 1500));

    toast.success(
      "Message sent successfully! Thank you for your message. I'll get back to you soon."
    );

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yeasin-arafat-nayem-bhuiyan/",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Twitter",
      url: "#",
      icon: <Twitter size={24} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/itsblackbang/",
      icon: <Instagram size={24} />,
    },
    {
      name: "Github",
      url: "https://github.com/yanayem",
      icon: <Github size={24} />,
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-8 bg-black/50 md:bg-black/70">
      {/* Dark overlay full backward */}
     {/*<div className="absolute inset-0 bg-black/50 md:bg-black/70 pointer-events-none"></div>*/}
      <div className="container relative z-10 mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm a frontend developer specializing in modern web interfaces using
          React.js, Tailwind CSS, and Vite. I focus on building responsive,
          visually engaging, and high-performance user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form first on mobile */}
          <div className="order-1 md:order-none relative z-20">
            <div className="bg-card bg-opacity-100 p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="mail@mail.com"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hello! I..."
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary text-white transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-primary/80 hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send"} <Send size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 flex flex-col items-center md:items-start mx-auto max-w-md px-4 relative z-20">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center md:text-left">
              Contact Information
            </h3>
            <div className="space-y-6 w-full">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a
                    href="mailto:arafatnayem01@gmail.com"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    arafatnayem01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <a
                    href="tel:+8801516540037"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    +8801516540037
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="pt-8 w-full md:text-left text-center">
              <h3 className="text-lg font-medium mb-4 text-gray-200">
                Connect With Me
              </h3>
              <div className="flex md:justify-start justify-center space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${link.name} profile`}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
