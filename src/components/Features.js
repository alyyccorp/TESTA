import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Features.css';
const features = [
    {
        icon: '⚡',
        title: 'Automatización inteligente',
        description: 'Automatiza flujos de trabajo repetitivos y ahorra horas cada semana.'
    },
    {
        icon: '🤝',
        title: 'Colaboración en tiempo real',
        description: 'Trabaja con tu equipo de manera sincronizada sin barreras.'
    },
    {
        icon: '📊',
        title: 'Análisis y reportes',
        description: 'Obtén insights profundos con dashboards personalizables.'
    },
    {
        icon: '🔒',
        title: 'Seguridad empresarial',
        description: 'Cumple con estándares de seguridad y privacidad internacionales.'
    },
    {
        icon: '🌍',
        title: 'Escalable globalmente',
        description: 'Crece sin preocuparte por limitaciones de infraestructura.'
    },
    {
        icon: '💡',
        title: 'IA integrada',
        description: 'Potencia tu trabajo con inteligencia artificial de última generación.'
    }
];
export default function Features() {
    return (_jsx("section", { className: "features", id: "features", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-header", children: [_jsx("h2", { children: "Caracter\u00EDsticas poderosas" }), _jsx("p", { children: "Todo lo que necesitas para transformar tu negocio en una plataforma moderna" })] }), _jsx("div", { className: "features-grid", children: features.map((feature, index) => (_jsxs("div", { className: "feature-card", children: [_jsx("div", { className: "feature-icon", children: feature.icon }), _jsx("h3", { children: feature.title }), _jsx("p", { children: feature.description })] }, index))) })] }) }));
}
