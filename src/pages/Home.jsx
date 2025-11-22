import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import MarqueeText from '../components/MarqueeText';
import ServiceCard from '../components/ServiceCard';
import Contact from '../components/Contact';
import Modal from '../components/Modal';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ["#F9F7F1", "#8FBC8F", "#F9F7F1"]
    );

    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            title: "Reformer/Cadillac",
            description: "Pilatesin özünü premium Reformer ve Cadillac ekipmanlarımızla deneyimleyin. Direnç temelli hareketlerle tüm vücudunuzu uzatın, güçlendirin ve sıkılaştırın.",
            content: "Reformer ve Cadillac derslerimiz 360 Fit deneyiminin kalbidir. Yay direnci kullanarak, hizalanmayı, merkez (core) stabilitesini ve esnekliği geliştiren zorlu ama düşük etkili bir antrenman sunar. İster bir sakatlığı iyileştiriyor olun, ister kondisyonunuzu bir üst seviyeye taşımak isteyin, sertifikalı eğitmenlerimiz vücudunuzun ihtiyaçlarına özel bir programla size rehberlik edecektir.",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Hamile Pilatesi",
            description: "Anne adayları ve yeni anneler için güvenli, etkili ve güçlendirici egzersizler. Pelvik taban kuvveti, duruş ve rahatlamaya odaklanın.",
            content: "Hamilelik ve Doğum Sonrası Pilates programımız, kadınları hamilelik ve iyileşme sürecinin her aşamasında desteklemek için tasarlanmıştır. Pelvik tabanı güçlendirmeye, sağlıklı bir duruşu korumaya ve sırt ağrısı gibi yaygın hamilelik rahatsızlıklarını hafifletmeye odaklanıyoruz. Doğum sonrası, merkez kuvvetinizi güvenle yeniden inşa etmenize ve vücudunuza olan güveninizi geri kazanmanıza yardımcı oluyoruz.",
            image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Postüral Bozukluklar",
            description: "Ağrıyı hafifletmek, hizalanmayı iyileştirmek ve vücudunuzun doğal dengesini geri kazandırmak için düzeltici egzersizler.",
            content: "Modern yaşam genellikle kronik ağrılara ve hareket kısıtlılığına yol açan duruş bozukluklarına neden olur. Postüral Düzeltme derslerimiz vücudunuzun hizasını analiz eder ve kifoz, lordoz ve skolyoz gibi sorunları ele almak için hedefe yönelik bir plan oluşturur. Hassas hareketler ve farkındalıkla, vücudunuzu verimli ve ağrısız hareket etmesi için yeniden eğitmenize yardımcı oluyoruz.",
            image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "Fonksiyonel Egzersiz",
            description: "Hayat için antrenman yapın. Günlük hareket kalıplarınızı, dengenizi ve genel atletik performansınızı artırın.",
            content: "360 Fit'te Fonksiyonel Egzersiz estetiğin ötesine geçer. Günlük işler için gücünüzü, dengenizi ve koordinasyonunuzu geliştirmek amacıyla gerçek hayat aktivitelerini taklit eden hareketlere odaklanıyoruz. Kettlebell, direnç bantları ve denge topları gibi ekipmanları Pilates prensipleriyle birleştirerek, dayanıklı, çevik ve her şeye hazır bir vücut inşa ediyoruz.",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "360 İmza Akış",
            description: "Çağdaş Pilates ve akıcı hareketin benzersiz karışımı. Ritminizi bulun ve sınırlarınızı zorlayın.",
            content: "360 İmza Akış, Pilatesin hassasiyetini dans ve yoganın akıcılığıyla birleştiren özel dersimizdir. Bu dinamik seans sizi hareket halinde tutar, uzun ve ince kasları şekillendirirken kalp atış hızınızı yükseltir. Sizi merkezlenmiş, güçlü ve tamamen yenilenmiş hissettiren ritmik ve enerji verici bir deneyimdir.",
            image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800"
        },
    ];

    return (
        <>
            <motion.div style={{ backgroundColor }} className={`min-h-screen transition-colors duration-500 ${selectedService ? 'blur-sm pointer-events-none' : ''}`}>
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center overflow-hidden">
                    <Hero3D />
                    <div className="relative z-10 text-center pointer-events-none select-none">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-6xl md:text-9xl font-display font-bold text-primary tracking-tighter mix-blend-darken"
                        >
                            360 FIT
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="text-xl md:text-2xl mt-4 font-light tracking-widest uppercase text-primary/80"
                        >
                            Pilates Stüdyosu
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.5 }}
                            className="mt-8"
                        >
                            <a
                                href="https://wa.me/905394244586"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-terracotta text-white rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg pointer-events-auto"
                            >
                                Ücretsiz Deneme Dersi
                            </a>
                        </motion.div>
                    </div>
                </section>

                {/* Marquee Section */}
                <section className="py-20">
                    <MarqueeText text="AKIŞ GÜÇ DENGE" direction={1} />
                    <MarqueeText text="KUVVET KONTROL NEFES" direction={-1} />
                </section>

                {/* Services Section */}
                <section className="py-20 px-4 md:px-20" id="services">
                    <div className="max-w-7xl mx-auto">
                        <motion.h2
                            className="text-4xl md:text-6xl font-display font-bold mb-16 text-center text-primary cursor-pointer hover:text-terracotta transition-colors"
                            onClick={() => setSelectedService({
                                title: "Neden 360 Fit?",
                                content: "360 Fit'te, sağlığa bütünsel bir yaklaşım benimsiyoruz. Stüdyomuz, dış dünyanın gürültüsünden kopabileceğiniz ve bedeninizle yeniden bağ kurabileceğiniz bir sığınaktır. Klasik Pilates prensiplerini modern biyomekanik ile birleştirerek hissedebileceğiniz ve görebileceğiniz sonuçlar sunuyoruz. Misyonumuz, daha iyi hareket etmeniz, daha güçlü hissetmeniz ve daha dengeli bir yaşam sürmeniz için sizi güçlendirmektir.",
                                image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000"
                            })}
                        >
                            Hizmetlerimiz
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    {...service}
                                    index={index}
                                    onClick={() => setSelectedService(service)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <Contact />

                {/* Footer */}
                <footer className="py-10 text-center border-t border-primary/10 bg-cream flex flex-col items-center justify-center gap-4">
                    <a
                        href="https://www.instagram.com/360fit_pilates/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-terracotta transition-colors duration-300"
                    >
                        <Instagram size={24} />
                    </a>
                    <p className="font-display text-lg text-primary">&copy; 2024 360 Fit Pilates. Tüm hakları saklıdır.</p>
                </footer>
            </motion.div>

            {/* Modal Overlay */}
            <Modal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                title={selectedService?.title}
                content={selectedService?.content}
                image={selectedService?.image}
            />
        </>
    );
};

export default Home;
