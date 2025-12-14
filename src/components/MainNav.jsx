"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X, Instagram, Facebook, Send } from "lucide-react";
import "../styles/MainNav.css";


export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  }
};


  const navLinks = [
    { name: 'Головна', id: 'hero' },
    { name: 'Курси', id: 'courses' },
    { name: 'Графік', id: 'schedule' },
    { name: 'Викладач', id: 'teacher' },
    { name: 'Відгуки', id: 'reviews' },
    { name: 'Запис', id: 'form' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/deutsch6926/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584487925853', label: 'Facebook' },
    { icon: Send, href: 'https://t.me/Neo_Deutsch', label: 'Telegram' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <GraduationCap className="navbar-logo-icon" />
          <span className="navbar-logo-text">NeoDeutsch</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="navbar-link"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social Icons Desktop */}
        <div className="navbar-socials-desktop">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-link"
              aria-label={social.label}
            >
              <social.icon className="navbar-social-icon" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? 'navbar-mobile-menu-open' : ''}`}>
        <div className="navbar-mobile-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="navbar-mobile-link"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social Icons Mobile */}
        <div className="navbar-socials-mobile">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-social-link-mobile"
              aria-label={social.label}
            >
              <social.icon className="navbar-social-icon-mobile" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
