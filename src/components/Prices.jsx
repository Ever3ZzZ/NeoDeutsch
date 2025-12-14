"use client";
import "../styles/Prices.css"; // сюда вставишь тот CSS, который прислал

export default function Prices() {
  return (
    <div className="pricing-grid">
      {/* КАРТОЧКА ДЛЯ СТУДЕНТІВ */}
      <div className="pricing-card pricing-card-student">
        {/* Верхний бейдж */}
        <div className="pricing-badge">
          <span className="pricing-badge-icon">⭐</span>
          <span>Популярний вибір</span>
        </div>

        {/* Заголовок */}
        <h3 className="pricing-title-student">Для студентів</h3>
        <p className="pricing-description"></p>

        {/* Блок "підходить для..." */}
        <div className="pricing-requirement">
          <span>🎓 Підходить для школярів та студентів, до 18 років та після</span>
        </div>

        {/* Цены */}
        <div className="pricing-amount-container">
          <div className="pricing-amount-old">6500 грн</div>
          <div className="pricing-amount-student">5999 грн</div>
        </div>

        {/* Бейдж скидки */}
        <div className="pricing-discount-badge">
          Знижка 501 грн!
        </div>

        <p className="pricing-period">за курс</p>

        {/* Список преимуществ */}
        <div className="pricing-features">
          <div className="pricing-feature">
            <span className="pricing-feature-icon">✔</span>
            <span>Всі рівні (A1–B2)</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon">✔</span>
            <span>Особистий словник</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon">✔</span>
            <span>Всі навчальні матеріали</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon">✔</span>
            <span>Підтримка викладача</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon">✔</span>
            <span>Розмовний клуб</span>
          </div>
        </div>

        {/* Кнопка */}
        <button className="pricing-btn-student" onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}>
          Записатись зараз
        </button>
      </div>

      {/* КАРТОЧКА ДЛЯ ДОРОСЛИХ */}
      <div className="pricing-card pricing-card-adult">
        {/* Можно без верхнего бейджа, как на скрине, или сделать свой */}
        <h3 className="pricing-title-adult">Для дорослих</h3>
        <p className="pricing-description"></p>

        {/* Блок "підходить для..." */}
        <div className="pricing-requirement pricing-requirement-adult">
          <span>😊 Підходить для тих хто вже не студент, а дорослий ;)</span>
        </div>

        {/* Цены */}
        <div className="pricing-amount-container">
          <div className="pricing-amount-old">7000 грн</div>
          <div className="pricing-amount-adult">6500 грн</div>
        </div>

        {/* Бейдж скидки */}
        <div className="pricing-discount-badge pricing-discount-badge-adult">
          Знижка 500 грн!
        </div>

        <p className="pricing-period">за курс</p>

        {/* Список преимуществ */}
        <div className="pricing-features">
          <div className="pricing-feature">
            <span className="pricing-feature-icon-adult">✔</span>
            <span>Всі рівні (A1–B2)</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon-adult">✔</span>
            <span>Особистий словник</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon-adult">✔</span>
            <span>Всі навчальні матеріали</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon-adult">✔</span>
            <span>Підтримка викладача</span>
          </div>
          <div className="pricing-feature">
            <span className="pricing-feature-icon-adult">✔</span>
            <span>Розмовний клуб</span>
          </div>
        </div>

        {/* Кнопка */}
        <button className="pricing-btn-adult" onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}>
          Записатись зараз
        </button>
      </div>
    </div>
  );
}
