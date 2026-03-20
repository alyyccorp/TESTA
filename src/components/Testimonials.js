import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Testimonials.css';
const testimonials = [
    {
        text: 'Espora ha revolucionado cómo trabajamos. Hemos automatizado el 60% de nuestras tareas repetitivas.',
        author: 'María García',
        role: 'CEO, TechStartup',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        text: 'La mejor inversión que hicimos este año. El ROI fue evidente en el primer mes.',
        author: 'Juan López',
        role: 'Director de Operaciones, GrowthCo',
        image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        text: 'El soporte es increíble y la plataforma es muy intuitiva. Nuestro equipo lo adoptó en un día.',
        author: 'Ana Martínez',
        role: 'Gerente de Proyecto, InnovateTech',
        image: 'https://images.pexels.com/photos/2181690/pexels-photo-2181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
];
export default function Testimonials() {
    return (_jsx("section", { className: "testimonials", id: "testimonials", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-header", children: [_jsx("h2", { children: "Lo que dicen nuestros clientes" }), _jsx("p", { children: "M\u00E1s de 5,000 equipos conf\u00EDan en Espora para transformar su productividad" })] }), _jsx("div", { className: "testimonials-grid", children: testimonials.map((testimonial, index) => (_jsxs("div", { className: "testimonial-card", children: [_jsx("div", { className: "stars", children: "\u2605\u2605\u2605\u2605\u2605" }), _jsxs("p", { className: "testimonial-text", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "testimonial-author", children: [_jsx("img", { src: testimonial.image, alt: testimonial.author, className: "author-image" }), _jsxs("div", { children: [_jsx("p", { className: "author-name", children: testimonial.author }), _jsx("p", { className: "author-role", children: testimonial.role })] })] })] }, index))) })] }) }));
}
