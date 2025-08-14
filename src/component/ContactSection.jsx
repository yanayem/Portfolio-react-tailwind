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
      hoverColor: "hover:text-[#0A66C2]", // LinkedIn blue
    },
    {
      name: "Twitter",
      url: "#",
      icon: <Twitter size={24} />,
      hoverColor: "hover:text-[#1DA1F2]", // Twitter blue
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/itsblackbang/",
      icon: <Instagram size={24} />,
      hoverColor: "hover:text-[#E4405F]", // Instagram pink
    },
    {
      name: "Github",
      url: "https://github.com/yanayem",
      icon: <Github size={24} />,
      hoverColor: "hover:text-[#333]", // GitHub dark gray
    },
  ];

  return (
    <section id="contact" className="relative px-8 py-24">
      <div className="container relative z-10 max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center des-raw_custom">
          I'm a frontend developer specializing in modern web interfaces using
          React.js, Tailwind CSS, and Vite. I focus on building responsive,
          visually engaging, and high-performance user experiences.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <div className="relative z-20 flex flex-col items-center max-w-md px-4 mx-auto space-y-8 md:items-start">
            <h3 className="mb-6 text-2xl font-semibold text-center text-raw_custom md:text-left">
              Contact Information
            </h3>
            <div className="w-full space-y-6 des-raw_custom">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:arafatnayem01@gmail.com"
                    className="transition-colors hover:text-primary"
                  >
                    arafatnayem01@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+8801516540037"
                    className="transition-colors hover:text-primary"
                  >
                    +8801516540037
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="w-full pt-8 text-center md:text-left">
              <h3 className="mb-4 text-lg font-medium des-raw_custom">
                Connect With Me
              </h3>
              <div className="flex justify-center space-x-6 md:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${link.name} profile`}
                    className={`transition-colors duration-200 des-raw_custom ${link.hoverColor}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative z-20 order-2 md:order-none">
            <div className="w-full max-w-md p-6 mx-auto bg-opacity-100 rounded-lg shadow-2xl bg-card sm:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-center md:text-left">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
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
                    className="w-full px-4 py-3 border rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
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
                    className="w-full px-4 py-3 border rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium"
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
                    className="w-full px-4 py-3 border rounded-md resize-none border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
