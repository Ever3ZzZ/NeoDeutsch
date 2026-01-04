"use client";
// app/page.jsx или app/page.js
import Container from '../components/Container';
import '../styles/StatsCard.css';
import '../styles/page.css';

import "../styles/TrialLessonNudge.css";

import TrialLessonNudge from '../components/TrialLessonNudge';
import Courses from '../components/Courses';
import Prices from '../components/Prices';
import Schedule from '../components/Schedule';
import Reviews from '../components/Reviews';
import Teacher from '../components/Teacher';
import '../styles/Forms.css';
import Forms from '../components/Forms';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <Container>
      {/* HERO */}
      <section id="hero" className="hero">
        {/* фон и сетка */}
        <div className="hero-background" />
        <div className="hero-grid" />

        {/* орбы */}
        <div className="hero-orb-1" />
        <div className="hero-orb-2" />
        <div className="hero-orb-3" />

        {/* немецкий флаг */}
        {/*<div className="hero-german-flag">
          <div className="flag-stripe flag-black" />
          <div className="flag-stripe flag-red" />
          <div className="flag-stripe flag-gold" />
        </div>

        {/* силуэт учителя */}
        <div className="hero-teacher-silhouette">
          <svg
            className="teacher-svg"
            viewBox="0 0 120 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* голова */}
            <circle className="teacher-part" cx="60" cy="40" r="18" />
            {/* корпус */}
            <rect
              className="teacher-part"
              x="40"
              y="60"
              width="40"
              height="55"
              rx="10"
            />
            {/* левая рука (анимируется) */}
            <path
              className="teacher-part teacher-arm-left"
              d="M40 70 C25 75, 25 95, 35 105"
            />
            {/* указка */}
            <line
              className="teacher-pointer"
              x1="35"
              y1="105"
              x2="10"
              y2="50"
            />
          </svg>
        </div>

        {/* плавающие бейджи */}
        <div className="hero-floating-icons">
          <div className="hero-floating-icon hero-float-1">
            🧠 A1 → B2 за рік
          </div>
          {/*<div className="hero-floating-icon hero-float-2">
            🎧 Розмовна практика
          </div>
          {/*<div className="hero-floating-icon hero-float-3">
            🎓 Підготовка до іспитів
          </div>*/}
          <div className="hero-floating-icon hero-float-4">
            💬 Живі онлайн-уроки
          </div>
        </div>

        {/* звёзды */}
        <div className="hero-stars">
          <div className="hero-star" style={{ top: '8%', left: '15%' }} />
          <div className="hero-star" style={{ top: '18%', left: '45%' }} />
          <div className="hero-star" style={{ top: '30%', left: '80%' }} />
          <div className="hero-star" style={{ top: '55%', left: '20%' }} />
          <div className="hero-star" style={{ top: '65%', left: '60%' }} />
          <div className="hero-star" style={{ top: '75%', left: '85%' }} />
        </div>

        {/* твоя исходная карточка hero */}
        <div className="hero-inner">
          <div className="hero-logo-row">
            <svg
              className="hero-logo-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
              <path d="M7 11.5v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
              <path d="M19 10.3V15" />
            </svg>

            <h1 className="hero-title">
              Neo<span>Deutsch</span>
            </h1>
          </div>

          <h2 className="hero-subtitle">
            Школа німецької мови нового покоління
          </h2>

          <p className="hero-text">
            Курс від А1 до Б2 всього за рік по нашій унікальній методиці. 
          </p>

          <div className="hero-buttons">
            <button className="hero-btn hero-btn-primary" onClick={() => document.getElementById('form').scrollIntoView({ behavior: 'smooth' })}>⚡ Пробний урок</button>
            <button className="hero-btn hero-btn-secondary" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>Дивитися курси</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        {/* первая строка */}
        

        {/* вторая строка с эмодзи / картинками */}
                <div className="stat-card">
          <img className="stat-photo" src="boy.png" alt="boy" />
          <span className="stat-label">
            <strong>Вчимо дорослих та дітей з 8 років.</strong><br />
            Онлайн-навчання у невеликих групах з живим викладачем.<br />
            <em>Швидко, з драйвом та результативно, без нудних правил і заучування.</em>
          </span>
        </div>

        <div className="stat-card">
          <img className="stat-photo" src="NeoRocket.png" alt="Rocket" />
          <span className="stat-label">
            <strong>Піднімаємо рівень з А1 до В2 за рік.</strong><br />
            Навчання з акцентом на розмовну практику, регулярні заняття та підтримку викладача.<br />
            <em>Без паніки, ефективно та без мовчання — ви починаєте говорити з перших тижнів.</em>
          </span>
        </div>

        <div className="stat-card">
          <img className="stat-photo" src="Stars.png" alt="stars" />
          <span className="stat-label">
            <strong>Після А2 ви вже говорите по німецьки.</strong><br />
            Ви можете спілкуватися у повсякденних ситуаціях: робота, документи, життя в Німеччині.<br />
            <em>Не просто вчите правила, а реально використовуєте мову на практиці.</em>
          </span>
        </div>
      </div>

      {/* COURSES */}
      <section id="courses" className="section-center">
        <h2 className="OurCourses">Наші курси</h2>
        <Courses />
      </section>

      {/* PRICES */}
      <section id="prices" className="section-center">
        <h2 className="CoursesPrices">Ціни на курси</h2>
        <Prices />
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="section-center">
        <Schedule />
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-center">
        <Reviews />
      </section>

      {/* TEACHER */}
      <section id="Teacher" className="teacher-center">
        <Teacher />
      </section>

      {/* FORMS */}
      <section id="form" className="form-center">
        <Forms />
      </section>

      {/* FOOTER */}
      
      <TrialLessonNudge />
    </Container>
  );
}
