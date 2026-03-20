import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Navigation.css';
export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (_jsx("nav", { className: "navbar", children: _jsxs("div", { className: "container nav-container", children: [_jsxs("div", { className: "logo", children: [_jsx("span", { className: "logo-icon", children: "\uD83C\uDF3F" }), _jsx("span", { className: "logo-text", children: "Espora" })] }), _jsxs("button", { className: "menu-toggle", onClick: () => setIsMenuOpen(!isMenuOpen), children: [_jsx("span", {}), _jsx("span", {}), _jsx("span", {})] }), _jsxs("div", { className: `nav-links ${isMenuOpen ? 'active' : ''}`, children: [_jsx("a", { href: "#features", onClick: () => setIsMenuOpen(false), children: "Caracter\u00EDsticas" }), _jsx("a", { href: "#how-it-works", onClick: () => setIsMenuOpen(false), children: "C\u00F3mo funciona" }), _jsx("a", { href: "#pricing", onClick: () => setIsMenuOpen(false), children: "Precios" }), _jsx("a", { href: "#testimonials", onClick: () => setIsMenuOpen(false), children: "Testimonios" })] }), _jsxs("div", { className: "nav-buttons", children: [_jsx("button", { className: "btn btn-secondary", children: "Iniciar sesi\u00F3n" }), _jsx("button", { className: "btn btn-primary", children: "Comenzar gratis" })] })] }) }));
}
