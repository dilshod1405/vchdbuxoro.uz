"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  CheckCircle,
  XCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Send,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly.length <= 9) {
      setFormData({ ...formData, phone: digitsOnly });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      handlePhoneChange(e);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 9) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/content/messages/`, formData);
      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative py-24 px-6 ${status ? "backdrop-blur-sm" : ""}`}>
      {/* Modal */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl text-center"
            >
              {status === "success" ? (
                <>
                  <CheckCircle className="text-[#0F2938] w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.</h4>
                </>
              ) : (
                <>
                  <XCircle className="text-red-500 w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {formData.phone.length !== 9
                      ? "Telefon raqami 9 ta raqamdan iborat bo'lishi kerak"
                      : "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring."}
                  </h4>
                </>
              )}
              <button
                onClick={() => setStatus(null)}
                className="mt-4 px-4 py-2 bg-[#0F2938] text-white rounded-xl hover:bg-[#DDA853] cursor-pointer transition"
              >
                Yopish
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Form Section */}
        <div className="p-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Xabaringizni qoldiring
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Ism</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ismingiz"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Telefon</label>
              <div className="flex rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
                <span className="bg-gray-100 text-gray-700 px-4 flex items-center select-none">+998</span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  maxLength={9}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="901234567"
                  className="w-full px-4 py-3 text-gray-700 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-1">Xabar</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Xabaringizni yozing..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#0F2938] text-white font-semibold rounded-xl hover:bg-[#102e44] transition hover:scale-105 text-lg flex items-center justify-center cursor-pointer"
            >
              {loading ? <Loader2 className="animate-spin h-6 w-6" /> : "Yuborish"}
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="bg-[#0F2938] text-white p-10 flex flex-col justify-center space-y-6">
          <h3 className="text-3xl font-semibold mb-4 text-[#DDA853]">Kontakt Ma’lumotlar</h3>

          <div className="flex items-center text-lg">
            <Phone className="w-6 h-6 mr-4" />
            <span>+998 91 644 24 42</span>
          </div>

          <div className="flex items-center text-lg">
            <MapPin className="w-6 h-6 mr-4" />
            <span>Manzil: O'zbekiston, Buxoro viloyati, Kogon shahar, Bog'i-chinor ko'chasi, 5-uy</span>
          </div>

          <div className="flex items-center text-lg">
            <Send className="w-6 h-6 mr-4" />
            <a
              href="https://t.me/vchdbuxoro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @vchdbuxoro
            </a>
          </div>

          <div className="flex items-center text-lg">
            <Instagram className="w-6 h-6 mr-4" />
            <a
              href="https://instagram.com/vchdbuxoro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @vchdbuxoro
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
