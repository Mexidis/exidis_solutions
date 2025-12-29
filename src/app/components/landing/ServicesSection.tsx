import { motion } from 'motion/react';
import { Monitor } from 'lucide-react';
import { Google, WhatsApp } from '@mui/icons-material';

export const ServicesSection = () => {
    return (
        <section id="services" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        ¿Qué hace Exidis Soluciones Digitales?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Creamos la base digital que tu negocio necesita para verse profesional, ser encontrado y empezar a crecer en internet.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Google,
                            title: "Presencia en Google",
                            description: "Tu negocio aparece cuando tus clientes buscan"
                        },
                        {
                            icon: Monitor,
                            title: "Página web profesional",
                            description: "Un espacio digital que genera confianza"
                        },
                        {
                            icon: WhatsApp,
                            title: "WhatsApp automatizado",
                            description: "Responde y captura información automáticamente"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-start p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
