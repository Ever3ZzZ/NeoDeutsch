import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background" />
      
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Logo and description */}
          <div className="footer-brand">
            <div className="footer-logo">
              <GraduationCap className="footer-logo-icon" />
              <span className="footer-logo-text">NeoDeutsch</span>
            </div>

            <p className="footer-description">
              Школа німецької мови нового покоління. Професійне навчання з гарантованим результатом.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-section-title">Контакти</h4>

            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span>+49 152 12817629 🇩🇪 </span>
              </div>

              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span>neodeutsch328@gmail.com</span>
              </div>

              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Київ, Україна</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="footer-section-title">Графік роботи</h4>

            <div className="footer-schedule">
              <div>Пн - Пт: 9:00 - 21:00</div>
              <div>Сб: 10:00 - 20:00</div>
              <div>Нд: Вихідний</div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 NeoDeutsch. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
