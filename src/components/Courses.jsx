"use client";

import { useState } from "react";
import "../styles/Courses.css";

export default function Courses() {
  const [open, setOpen] = useState({
    A1: false,
    A2: false,
    B1: false,
    B2: false,
  });

  const toggle = (lvl) => {
    setOpen((prev) => ({ ...prev, [lvl]: !prev[lvl] }));
  };

  return (
    <div className="courses-grid">
      {/* ---------- A1 ---------- */}
      <div className="course-card">
        <span className="level-badge a1">A1</span>
        <h3 className="course-title">Початковий рівень</h3>
        <p className="course-subtitle">З нуля до базового спілкування</p>

        <p className="course-desc">
          Ідеально для тих, хто тільки починає вивчати німецьку мову. Ви
          навчитеся розуміти та використовувати прості фрази.
        </p>

        <div className="difficulty-box">
          <span>Складність</span>
          <span>25%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "25%" }}></div>
          </div>
        </div>

        <div className="card-info">
          <div>
            <span>📅</span>3 місяці
          </div>
          <div>
            <span>📘</span>48 уроків
          </div>
          <div>
            <span>👥</span>6–8 студентів
          </div>
        </div>

        <button className="more-btn" onClick={() => toggle("A1")}>
          {open.A1 ? "Згорнути ▲" : "Детальніше ▼"}
        </button>

        {open.A1 && (
          <div className="details">
            <h4>Що вивчатимете:</h4>
            <ul>
              <li>Німецький алфавіт та вимова</li>
              <li>Базова граматика та часи</li>
              <li>Повсякденна лексика (800+ слів)</li>
              <li>Простий діалог та знайомство</li>
              <li>Числа, дати, час</li>
              <li>Покупки та замовлення їжі</li>
            </ul>

            <h4>Зможете:</h4>
            <ul>
              <li>Представитися та розповісти про себе</li>
              <li>Робити покупки в магазині</li>
              <li>Замовляти їжу в кафе</li>
              <li>Спілкуватися на прості теми</li>
            </ul>
          </div>
        )}
      </div>

      {/* ---------- A2 ---------- */}
      <div className="course-card">
        <span className="level-badge a2">A2</span>
        <h3 className="course-title">Елементарний рівень</h3>
        <p className="course-subtitle">Впевнене базове спілкування</p>

        <p className="course-desc">
          Розширення словникового запасу та граматичних конструкцій. Впевнене
          спілкування на повсякденні теми.
        </p>

        <div className="difficulty-box">
          <span>Складність</span>
          <span>50%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>
        </div>

        <div className="card-info">
          <div>
            <span>📅</span>3 місяці
          </div>
          <div>
            <span>📘</span>48 уроків
          </div>
          <div>
            <span>👥</span>6–8 студентів
          </div>
        </div>

        <button className="more-btn" onClick={() => toggle("A2")}>
          {open.A2 ? "Згорнути ▲" : "Детальніше ▼"}
        </button>

        {open.A2 && (
          <div className="details">
            <h4>Що вивчатимете:</h4>
            <ul>
              <li>Розширена граматика</li>
              <li>Робота з текстами середньої складності</li>
              <li>Лексика (1500+ слів)</li>
              <li>Діалоги на побутові теми</li>
              <li>Письмові навички</li>
              <li>Розуміння на слух</li>
            </ul>

            <h4>Зможете:</h4>
            <ul>
              <li>Описувати події та враження</li>
              <li>Писати прості листи</li>
              <li>Розуміти головну ідею текстів</li>
              <li>Спілкуватися в подорожах</li>
            </ul>
          </div>
        )}
      </div>

      {/* ---------- B1 ---------- */}
      <div className="course-card">
        <span className="level-badge b1">B1</span>
        <h3 className="course-title">Середній рівень</h3>
        <p className="course-subtitle">Самостійне користування мовою</p>

        <p className="course-desc">
          Впевнене володіння мовою для роботи та навчання. Можливість
          підтримувати розмову на різні теми.
        </p>

        <div className="difficulty-box">
          <span>Складність</span>
          <span>75%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "75%" }}></div>
          </div>
        </div>

        <div className="card-info">
          <div>
            <span>📅</span>4 місяці
          </div>
          <div>
            <span>📘</span>64 уроки
          </div>
          <div>
            <span>👥</span>5–7 студентів
          </div>
        </div>

        <button className="more-btn" onClick={() => toggle("B1")}>
          {open.B1 ? "Згорнути ▲" : "Детальніше ▼"}
        </button>

        {open.B1 && (
          <div className="details">
            <h4>Що вивчатимете:</h4>
            <ul>
              <li>Складна граматика та синтаксис</li>
              <li>Професійна лексика (2500+ слів)</li>
              <li>Аргументація своїх думок</li>
              <li>Робота з медіа та статтями</li>
              <li>Ділове листування</li>
              <li>Презентації німецькою</li>
            </ul>

            <h4>Зможете:</h4>
            <ul>
              <li>Розуміти складні тексти</li>
              <li>Брати участь у дискусіях</li>
              <li>Писати детальні тексти</li>
              <li>Працювати в німецькомовному середовищі</li>
            </ul>
          </div>
        )}
      </div>

      {/* ---------- B2 (У розробці) ---------- */}
      
      {/* ---------- B2 (раніше: у розробці) ---------- */}
      <div className="course-card">
        <span className="level-badge b2">B2</span>
        <h3 className="course-title">Вище середнього</h3>
        <p className="course-subtitle">Просунутий рівень</p>

        <p className="course-desc">
          Підготовка до складання іспитів та професійне використання
          німецької у різних сферах.
        </p>

        <div className="difficulty-box">
          <span>Складність</span>
          <span>100%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "100%" }}></div>
          </div>
        </div>

        <div className="card-info">
          <div>
            <span>📅</span>4 місяці
          </div>
          <div>
            <span>📘</span>64 уроки
          </div>
          <div>
            <span>👥</span>4–6 студентів
          </div>
        </div>

        <button className="more-btn" onClick={() => toggle("B2")}>
          {open.B2 ? "Згорнути ▲" : "Детальніше ▼"}
        </button>

        {open.B2 && (
          <div className="details">
            <h4>Що вивчатимете:</h4>
            <ul>
              <li>Поглиблена граматика та стилістика</li>
              <li>Підготовка до іспитів (сертифікація)</li>
              <li>Спеціалізована лексика (професійні теми)</li>
              <li>Аналіз складних текстів</li>
              <li>Умови ділового спілкування</li>
            </ul>

            <h4>Зможете:</h4>
            <ul>
              <li>Впевнено спілкуватися у професійному середовищі</li>
              <li>Писати складні тексти та доповіді</li>
              <li>Успішно здавати мовні іспити</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
