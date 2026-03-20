import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Pricing.css';
const plans = [
    {
        name: 'Starter',
        price: '29',
        description: 'Perfecto para comenzar',
        features: [
            'Hasta 3 usuarios',
            '100 automatizaciones/mes',
            'Almacenamiento 5GB',
            'Soporte por email',
            'Integraciones básicas'
        ],
        cta: 'Comenzar'
    },
    {
        name: 'Professional',
        price: '79',
        description: 'Para equipos en crecimiento',
        features: [
            'Hasta 10 usuarios',
            'Automatizaciones ilimitadas',
            'Almacenamiento 100GB',
            'Soporte prioritario',
            'Integraciones avanzadas',
            'API acceso'
        ],
        cta: 'Comenzar',
        popular: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Solución personalizada',
        features: [
            'Usuarios ilimitados',
            'Automatizaciones ilimitadas',
            'Almacenamiento ilimitado',
            'Soporte dedicado 24/7',
            'Integraciones personalizadas',
            'SLA garantizado'
        ],
        cta: 'Contactar ventas'
    }
];
export default function Pricing() {
    return (_jsx("section", { className: "pricing", id: "pricing", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-header", children: [_jsx("h2", { children: "Planes y precios" }), _jsx("p", { children: "Elige el plan perfecto para tu equipo. Todos incluyen 30 d\u00EDas de prueba gratuita." })] }), _jsx("div", { className: "pricing-grid", children: plans.map((plan, index) => (_jsxs("div", { className: `pricing-card ${plan.popular ? 'popular' : ''}`, children: [plan.popular && _jsx("div", { className: "popular-badge", children: "M\u00E1s popular" }), _jsx("h3", { children: plan.name }), _jsx("p", { className: "plan-description", children: plan.description }), _jsxs("div", { className: "plan-price", children: [_jsx("span", { className: "currency", children: "$" }), _jsx("span", { className: "amount", children: plan.price }), plan.price !== 'Custom' && _jsx("span", { className: "period", children: "/mes" })] }), _jsx("button", { className: `btn btn-${plan.popular ? 'primary' : 'secondary'} w-full`, children: plan.cta }), _jsx("ul", { className: "features-list", children: plan.features.map((feature, i) => (_jsxs("li", { children: [_jsx("span", { className: "check", children: "\u2713" }), feature] }, i))) })] }, index))) })] }) }));
}
