'use client';

import { useState } from 'react';
import { BookOpen, Users } from 'lucide-react';
 
import '../styles/Forms.css';



export default function Forms() {
  const [trialForm, setTrialForm] = useState({
    name: "",
    phone: "",
    email: "",
    level: "",
    telegram: ""
  });

  const [teacherForm, setTeacherForm] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    message: ""
  });

  const toast = { 
  success: (msg) => alert(msg),
  error: (msg) => alert(msg)
};
  

  // -------------------------------
  //  SEND TRIAL FORM
  // -------------------------------
  const handleTrialSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'trial',
          data: trialForm
        })
      });

      const json = await res.json();
      if (!json.ok) throw new Error(json.error);

      toast.success("Дякуємо! Ми зв'яжемося з вами найближчим часом.");

      setTrialForm({
        name: '',
        phone: '',
        email: '',
        level: ''
        
      });
    } catch (err) {
      console.error(err);
      toast.error('Сталася помилка. Спробуйте пізніше.');
    }
  };

  // -------------------------------
  //  SEND TEACHER FORM
  // -------------------------------
  const handleTeacherSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'teacher',
          data: teacherForm
        })
      });

      const json = await res.json();
      if (!json.ok) throw new Error(json.error);

      toast.success('Дякуємо за ваш інтерес! Ми розглянемо вашу заявку.');

      setTeacherForm({
        name: '',
        phone: '',
        email: '',
        experience: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error('Сталася помилка. Спробуйте пізніше.');
    }
  };

  return (
    <section className="forms-section">
      <div className="forms-background" />

      <div className="forms-container">
        <div className="forms-grid">

          {/* ============================
              TRIAL LESSON FORM
          ============================= */}
          <div className="form-card-trial">
            <div className="form-header">
              <BookOpen className="form-icon-trial" />
              <h3 className="form-title-trial">Пробний урок</h3>
            </div>

            <p className="form-description">
              Не тяни, скоріше запишись на пробний урок та зроби перший крок до вивчення німецької мови!
            </p>

            <form onSubmit={handleTrialSubmit} className="form">

              <div className="form-field">
                <label htmlFor="trial-name" className="form-label-trial">Ім'я</label>
                <input
                  id="trial-name"
                  value={trialForm.name}
                  onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })}
                  required
                  className="form-input-trial"
                  placeholder="Ваше ім'я"
                />
              </div>

              <div className="form-field">
                <label htmlFor="trial-phone" className="form-label-trial">Телефон</label>
                <input
                  id="trial-phone"
                  type="tel"
                  value={trialForm.phone}
                  onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })}
                  required
                  className="form-input-trial"
                  placeholder="+380"
                />
              </div>

              <div className="form-field">
                <label htmlFor="trial-telegram" className="form-label-trial">Ваш телеграм @username</label>
                <input
                  id="trial-telegram"
                  type="telegram"
                  value={trialForm.telegram}
                  onChange={(e) => setTrialForm({ ...trialForm, telegram: e.target.value })}
                  required
                  className="form-input-trial"
                  placeholder="наприклад: @olexander_karpenko"
                />
              </div>

              <div className="form-field">
                <label htmlFor="trial-level" className="form-label-trial">Бажаний рівень</label>
                <input
                  id="trial-level"
                  value={trialForm.level}
                  onChange={(e) => setTrialForm({ ...trialForm, level: e.target.value })}
                  className="form-input-trial"
                  placeholder="A1, A2, B1, B2 "
                />
              </div>

              <button type="submit" className="form-submit-trial">
                Записатись на урок
              </button>
            </form>
          </div>

          {/* ============================
              TEACHER APPLICATION FORM
          ============================= */}
          <div className="form-card-teacher">
            <div className="form-header">
              <Users className="form-icon-teacher" />
              <h3 className="form-title-teacher">Форма для вчителів</h3>
            </div>

            <p className="form-description">
              Ви викладач німецької мови? Станьте частиною нашої команди!
            </p>

            <form onSubmit={handleTeacherSubmit} className="form">

              <div className="form-field">
                <label htmlFor="teacher-name" className="form-label-teacher">Ім'я та прізвище</label>
                <input
                  id="teacher-name"
                  value={teacherForm.name}
                  onChange={(e) => setTeacherForm({ ...teacherForm, name: e.target.value })}
                  required
                  className="form-input-teacher"
                  placeholder="Ваше повне ім'я"
                />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-phone" className="form-label-teacher">Телефон</label>
                <input
                  id="teacher-phone"
                  type="tel"
                  value={teacherForm.phone}
                  onChange={(e) => setTeacherForm({ ...teacherForm, phone: e.target.value })}
                  required
                  className="form-input-teacher"
                  placeholder="+380"
                />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-telegram" className="form-label-teacher">ваш телеграм @username</label>
                <input
                  id="teacher-telegram"
                  type="telegram"
                  value={teacherForm.telegram}
                  onChange={(e) => setTeacherForm({ ...teacherForm, telegram: e.target.value })}
                  required
                  className="form-input-teacher"
                  placeholder="наприклад: @olexander_karpenko"
                />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-experience" className="form-label-teacher">Досвід викладання</label>
                <input
                  id="teacher-experience"
                  value={teacherForm.experience}
                  onChange={(e) => setTeacherForm({ ...teacherForm, experience: e.target.value })}
                  required
                  className="form-input-teacher"
                  placeholder="Наприклад: 3 роки"
                />
              </div>

              <div className="form-field">
                <label htmlFor="teacher-message" className="form-label-teacher">Коротко про себе</label>
                <textarea
                  id="teacher-message"
                  value={teacherForm.message}
                  onChange={(e) => setTeacherForm({ ...teacherForm, message: e.target.value })}
                  className="form-textarea-teacher"
                  placeholder="Розкажіть про свою освіту та досвід..."
                />
              </div>

              <button type="submit" className="form-submit-teacher">
                Надіслати заявку
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
