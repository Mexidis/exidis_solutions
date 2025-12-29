import { motion } from 'motion/react';
import { Store, Users, TrendingUp } from 'lucide-react';
import { WhatsApp } from '@mui/icons-material';

export const TargetAudienceSection = () => {
    const scrollToVideo = () => {
        const videoSection = document.getElementById('video');
        if (videoSection) {
            videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="py-20 px-4 md:px-8 bg-white text-gray-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Diseñado para negocios reales, como el tuyo
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                        No importa el giro, importa que tus clientes te encuentren, confíen y te contacten.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                        {
                            icon: Store,
                            title: "Negocios físicos",
                            description: "Personas te buscan en Google antes de ir a tu negocio."
                        },
                        {
                            icon: Users,
                            title: "Negocios por recomendación",
                            description: "Te recomiendan, pero quieren ver tu página antes de contactarte."
                        },
                        {
                            icon: WhatsApp,
                            title: "Negocios que atienden por WhatsApp",
                            description: "Recibes mensajes, pero no tienes orden ni información clara."
                        },
                        {
                            icon: TrendingUp,
                            title: "Negocios que quieren crecer",
                            description: "Vendes, pero no sabes qué funciona mejor ni cómo escalar."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-gray-50 rounded-3xl hover:bg-white border border-gray-100 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center space-y-8"
                >
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Haz que tus clientes te encuentren y confíen en tu negocio desde internet.
                    </p>

                    <button
                        onClick={scrollToVideo}
                        className="inline-flex items-center text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors border-b-2 border-blue-600/20 hover:border-blue-600 pb-1"
                    >
                        Descubre cómo digitalizar tu negocio
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
