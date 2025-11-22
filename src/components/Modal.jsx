import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, content, image }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-cream w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                            >
                                <X size={24} className="text-primary" />
                            </button>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={image || "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1000"}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                                    {title}
                                </h2>
                                <div className="prose prose-lg text-charcoal/80">
                                    <p>{content}</p>
                                    <p className="mt-4 text-sm italic opacity-70">
                                        Uzman rehberliğimiz ve son teknoloji ekipmanlarımızla farkı yaşayın.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="mt-8 self-start px-8 py-3 bg-terracotta text-white rounded-full hover:bg-primary transition-colors duration-300 uppercase tracking-wider text-sm font-semibold"
                                >
                                    Kapat
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
