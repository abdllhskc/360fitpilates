import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, index, onClick, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={onClick}
            className="group relative p-8 border border-terracotta/30 rounded-lg overflow-hidden cursor-pointer h-full flex flex-col justify-between bg-white/50 hover:bg-primary transition-colors duration-500"
        >
            {/* Hover Background Transition is handled by hover:bg-primary on the parent container */}

            <div className="relative z-10">
                <div className="mb-6 overflow-hidden rounded-md h-48 w-full">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 text-primary group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>
                <p className="font-sans text-charcoal/80 group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                    {description}
                </p>
            </div>

            <div className="relative z-10 mt-6 flex items-center text-terracotta group-hover:text-white font-semibold tracking-wide transition-colors duration-300">
                <span className="mr-2">İncele</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </div>
        </motion.div>
    );
};

export default ServiceCard;
