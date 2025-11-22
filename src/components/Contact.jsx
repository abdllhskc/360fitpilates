import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left Side: Map / Image */}
                    <div className="lg:w-1/2 min-h-[400px] relative bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1622222222222!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
                            allowFullScreen=""
                            loading="lazy"
                            className="absolute inset-0"
                        ></iframe>
                        <div className="absolute inset-0 bg-terracotta/10 pointer-events-none mix-blend-multiply"></div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2 bg-primary p-12 lg:p-16 text-white flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-cream">
                                Yolculuğunuza Başlayın
                            </h2>
                            <p className="text-gray-300 mb-12 text-lg font-light">
                                Bedeni ve zihni dönüştürmeye hazır mısınız? Stüdyomuzu ziyaret edin veya ilk dersinizi planlamak için iletişime geçin.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="text-terracotta mt-1" />
                                    <div>
                                        <h4 className="font-bold text-cream">Konum</h4>
                                        <p className="text-gray-400">Bağdat Caddesi No: 360<br />Kadıköy, İstanbul</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-terracotta" />
                                    <div>
                                        <h4 className="font-bold text-cream">Telefon</h4>
                                        <p className="text-gray-400">+90 (216) 123 45 67</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Mail className="text-terracotta" />
                                    <div>
                                        <h4 className="font-bold text-cream">E-posta</h4>
                                        <p className="text-gray-400">merhaba@360fitpilates.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Clock className="text-terracotta" />
                                    <div>
                                        <h4 className="font-bold text-cream">Çalışma Saatleri</h4>
                                        <p className="text-gray-400">Pzt-Cum: 07:00 - 21:00 | Cmt: 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-terracotta text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg">
                                Randevu Alın
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
