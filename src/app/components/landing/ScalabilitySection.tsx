import { motion } from 'motion/react';
import { ChartBar, TrendingUp, Zap } from 'lucide-react';

export const ScalabilitySection = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-8">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Crece a tu ritmo</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Empieza hoy, escala mañana
                    </h2>

                    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        El posicionamiento digital es el primer paso. Conforme tu negocio crece, Exidis puede ayudarte con análisis de datos y soluciones digitales más avanzadas.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: TrendingUp,
                                title: "Inicio",
                                description: "Posicionamiento Digital"
                            },
                            {
                                icon: ChartBar,
                                title: "Crecimiento",
                                description: "Análisis de Datos"
                            },
                            {
                                icon: Zap,
                                title: "Expansión",
                                description: "Soluciones Avanzadas"
                            }
                        ].map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md">
                                    <phase.icon className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-gray-900">
                                    {phase.title}
                                </h4>
                                <p className="text-base text-gray-600">
                                    {phase.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
