import { WhatsApp } from '@mui/icons-material';
import React from 'react';

const whatsappNumber = "523343591191"; // Reemplazar con el número real
const whatsappMessage = encodeURIComponent("Hola, me interesa digitalizar mi negocio con Exidis");

interface WhatsAppButtonProps {
    children: React.ReactNode;
    className?: string;
}

export const WhatsAppButton = ({ children, className = "" }: WhatsAppButtonProps) => (
    <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 ${className}`}
    >
        <WhatsApp className="w-5 h-5" />
        <span>{children}</span>
    </a>
);
