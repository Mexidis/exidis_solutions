import { 
  Store,
  Cog,
  UtensilsCrossed,
  Building,
  Search,
  Monitor,
  MessageCircle,
  CircleCheck,
  ChartBar,
  TrendingUp,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const whatsappNumber = "5214921234567"; // Reemplazar con el número real
  const whatsappMessage = encodeURIComponent("Hola, me interesa digitalizar mi negocio con Exidis");

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const WhatsAppButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{children}</span>
    </a>
  );

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-6">
        {/* Header/Branding */}
        <div className="mb-8">
          <h1 className="text-2xl mb-1">
            Exidis Soluciones Digitales
          </h1>
          <p className="text-sm text-gray-400">
            Soluciones digitales para negocios locales
          </p>
        </div>

        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl leading-tight">
              Haz que tu negocio aparezca en internet y genere confianza
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300">
              Ayudamos a negocios de cualquier giro a digitalizarse de forma simple y profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <WhatsAppButton className="w-full text-lg">
                Escríbeme por WhatsApp
              </WhatsAppButton>
              
              <button
                onClick={scrollToVideo}
                className="w-full px-6 py-4 border-2 border-white/30 hover:border-white/50 text-white rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-95"
              >
                Descubre cómo digitalizar tu negocio
              </button>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-gray-400 text-center pt-4">
              Sin complicaciones técnicas · Pensado para negocios reales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Para Quién Es */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl mb-6">
              Funciona para cualquier tipo de negocio
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { icon: Store, label: "Comercios" },
              { icon: Cog, label: "Servicios" },
              { icon: UtensilsCrossed, label: "Restaurantes" },
              { icon: Building, label: "Empresas" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-gray-700">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-600"
          >
            Si tus clientes usan internet, Exidis es para tu negocio.
          </motion.p>
        </div>
      </section>

      {/* Qué Hace Exidis */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl sm:text-3xl mb-4">
              ¿Qué hace Exidis Soluciones Digitales?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Creamos la base digital que tu negocio necesita para verse profesional, ser encontrado y empezar a crecer en internet.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                icon: Search,
                title: "Presencia en Google",
                description: "Tu negocio aparece cuando tus clientes buscan"
              },
              {
                icon: Monitor,
                title: "Página web profesional",
                description: "Un espacio digital que genera confianza"
              },
              {
                icon: MessageCircle,
                title: "WhatsApp automatizado",
                description: "Responde y captura información automáticamente"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 px-4 bg-white scroll-mt-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl mb-4">
              Descubre cómo digitalizar tu negocio
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              En este video te explico, de forma sencilla, cómo funciona la digitalización de un negocio y por qué hoy es una gran oportunidad.
            </p>

            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl mb-8">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MGY-pA-sVaU"
                  title="Descubre cómo digitalizar tu negocio"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <WhatsAppButton className="w-full max-w-md mx-auto">
              Quiero saber si esto le conviene a mi negocio
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl mb-8">
              Así funciona
            </h2>
          </motion.div>

          <div className="space-y-6 mb-12">
            {[
              {
                number: "1",
                title: "Tu negocio aparece en internet",
                description: "Con presencia profesional en Google y redes"
              },
              {
                number: "2",
                title: "Los clientes te contactan por WhatsApp",
                description: "De forma fácil, directa y automática"
              },
              {
                number: "3",
                title: "Empiezas a crecer con información",
                description: "Conoces mejor a tus clientes y tomas decisiones informadas"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-xl">{step.number}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center"
          >
            <p className="text-xl text-gray-800 italic">
              "Primero te encuentran, luego te escriben, después tomas mejores decisiones."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Escalabilidad */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700">Crece a tu ritmo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl mb-6">
              Empieza hoy, escala mañana
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              El posicionamiento digital es el primer paso.<br/>
              Conforme tu negocio crece, Exidis puede ayudarte con análisis de datos y soluciones digitales más avanzadas.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
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
                  className="p-6 bg-gray-50 rounded-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <phase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl mb-6">
              ¿Listo para empezar a digitalizar tu negocio?
            </h2>
            
            <WhatsAppButton className="w-full max-w-sm mx-auto bg-white text-green-600 hover:bg-gray-100">
              Escríbeme por WhatsApp
            </WhatsAppButton>

            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-white/80 mb-2">
                Exidis Soluciones Digitales
              </p>
              <p className="text-sm text-white/60">
                Ayudando a negocios locales a crecer en el mundo digital
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}