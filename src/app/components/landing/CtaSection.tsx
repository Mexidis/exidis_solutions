import { motion } from 'motion/react';
import { WhatsAppButton } from '../WhatsAppButton';
import logo from '../../../images/logo.png';

export const CtaSection = () => {
    return (
        <section className="py-24 px-4 bg-gradient-to-br from-green-600 to-blue-600 text-white">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        ¿Listo para empezar a digitalizar tu negocio?
                    </h2>

                    <WhatsAppButton className="w-full sm:w-auto text-lg font-semibold px-8 shadow-2xl border-2 border-white/20">
                        Escríbeme por WhatsApp
                    </WhatsAppButton>

                    <div className="mt-16 pt-12 border-t border-white/20 flex flex-col items-center">
                        <img
                            src={logo}
                            alt="Exidis Logo"
                            className="w-24 h-auto mb-4 object-contain"
                        />
                        <h3 className="text-2xl font-bold mb-2 tracking-tight">
                            Exidis Soluciones Digitales
                        </h3>
                        <p className="text-lg text-white/80">
                            Ayudando a negocios locales a crecer en el mundo digital
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
