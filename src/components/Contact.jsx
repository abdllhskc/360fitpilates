import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left Side: Map / Image */}
                    <div className="lg:w-1/2 min-h-[400px] relative bg-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1422937950147!2d29.0123!3d41.0789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f7f6f7f%3A0x1234567890abcdef!2sLevent%2C%20Alt%20Zeren%20Sk.%20No%3A29%2C%2034330%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1622222222222!5m2!1sen!2str"
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
                                        <p className="text-gray-400">Levent, Alt Zeren Sk. No:29<br />Beşiktaş/İstanbul</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Phone className="text-terracotta" />
                                    <div>
                                        <h4 className="font-bold text-cream">Telefon</h4>
                                        <p className="text-gray-400">+90 539 424 45 86</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/905394244586"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-terracotta text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg"
                            >
                                Randevu Alın
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
