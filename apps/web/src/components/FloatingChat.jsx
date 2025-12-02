"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Phone, Calendar } from "lucide-react";

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Auto-open after delay
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasInteracted) {
                setIsOpen(true);
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [hasInteracted]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setHasInteracted(true);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-white rounded-lg shadow-2xl p-6 w-[320px] border border-[#E8D5C4]/50 relative overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#C9A882]"></div>

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3
                                    className="text-[18px] font-medium text-[#2B2520]"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    Hvordan kan vi hjælpe dig?
                                </h3>
                                <p
                                    className="text-[13px] text-[#2B2520]/60 mt-1"
                                    style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                    Velkommen til Klinik Dandanell
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-[#2B2520]/40 hover:text-[#2B2520] transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <a
                                href="/kontakt-roskilde"
                                className="flex items-center gap-3 p-3 rounded-md bg-[#FAF8F6] hover:bg-[#F5F0EB] transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#C9A882]/10 flex items-center justify-center text-[#C9A882] group-hover:bg-[#C9A882] group-hover:text-white transition-all">
                                    <Calendar size={16} />
                                </div>
                                <div className="flex-1">
                                    <p
                                        className="text-[13px] font-medium text-[#2B2520]"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        Book en behandling
                                    </p>
                                    <p className="text-[11px] text-[#2B2520]/50">
                                        Find en tid der passer dig
                                    </p>
                                </div>
                            </a>

                            <a
                                href="tel:+4512345678"
                                className="flex items-center gap-3 p-3 rounded-md bg-[#FAF8F6] hover:bg-[#F5F0EB] transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-full bg-[#C9A882]/10 flex items-center justify-center text-[#C9A882] group-hover:bg-[#C9A882] group-hover:text-white transition-all">
                                    <Phone size={16} />
                                </div>
                                <div className="flex-1">
                                    <p
                                        className="text-[13px] font-medium text-[#2B2520]"
                                        style={{ fontFamily: "Inter, sans-serif" }}
                                    >
                                        Ring til os
                                    </p>
                                    <p className="text-[11px] text-[#2B2520]/50">
                                        Vi sidder klar ved telefonen
                                    </p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className="w-14 h-14 rounded-full bg-[#C9A882] text-white shadow-lg flex items-center justify-center hover:bg-[#B89770] transition-colors relative"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}

                {/* Notification dot */}
                {!isOpen && !hasInteracted && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
                )}
            </motion.button>
        </div>
    );
}
