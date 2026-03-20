import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './HowItWorks.css';
const steps = [
    {
        number: '01',
        title: 'Registra tu cuenta',
        description: 'Crea tu cuenta en menos de 2 minutos con acceso inmediato.'
    },
    {
        number: '02',
        title: 'Configura tu workspace',
        description: 'Personaliza tu espacio de trabajo según tus necesidades.'
    },
    {
        number: '03',
        title: 'Invita a tu equipo',
        description: 'Añade miembros del equipo y define permisos fácilmente.'
    },
    {
        number: '04',
        title: 'Comienza a automatizar',
        description: 'Configura tus primeros flujos de trabajo y ahorra tiempo.'
    }
];
export default function HowItWorks() {
    return (_jsx("section", { className: "how-it-works", id: "how-it-works", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "section-header", children: [_jsx("h2", { children: "C\u00F3mo funciona" }), _jsx("p", { children: "Cuatro simples pasos para transformar tu forma de trabajar" })] }), _jsx("div", { className: "steps-container", children: steps.map((step, index) => (_jsxs("div", { className: "step", children: [_jsx("div", { className: "step-number", children: step.number }), _jsxs("div", { className: "step-content", children: [_jsx("h3", { children: step.title }), _jsx("p", { children: step.description })] }), index < steps.length - 1 && (_jsx("div", { className: "step-arrow", children: "\u2192" }))] }, index))) })] }) }));
}
