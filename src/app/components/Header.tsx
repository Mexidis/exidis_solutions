
export const Header = () => {
    return (
        <header className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-b border-white/10 py-6 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center gap-4">
                {/* Logo Placeholder */}
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
                    E
                </div>

                {/* Branding Text */}
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-white leading-tight">
                        Exidis Soluciones Digitales
                    </h1>
                    <p className="text-sm md:text-base text-gray-400">
                        Hacemos crecer a tu negocio en el mundo digital
                    </p>
                </div>
            </div>
        </header>
    );
};
