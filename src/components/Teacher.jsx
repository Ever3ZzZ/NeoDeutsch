// src/components/Teacher.jsx
import "../styles/Teacher.css";

export default function Teacher() {
  return (
    <section className="teacher-section" id="teacher">
      {/* фон секции */}
      <div className="teacher-background" />

      <div className="teacher-container">
        {/* заголовок */}
        <div className="teacher-header">
          <h2 className="teacher-title">Наш викладач</h2>
          <p className="teacher-subtitle">Професіонал з багаторічним досвідом</p>
        </div>

        {/* основная карточка */}
        <div className="teacher-card">
          <div className="teacher-content">
            {/* фото + имя */}
            <div className="teacher-photo-wrapper">
              <div className="teacher-photo">
                {/* положи фотку в /public/teacher.jpg или поменяй путь */}
                <img src="/teacher.jpg" alt="Олеся Грищенко" />
              </div>
            </div>

            {/* инфо справа */}
            <div className="teacher-info">
              <h3 className="teacher-name">Олеся Грищенко</h3>
              <p className="teacher-position">
                Викладач / репетитор німецької мови
              </p>

              {/* маленькие карточки с инфой */}
              <div className="teacher-details-grid">
                {/* уровень языка */}
                <div className="teacher-detail-card">
                  <div className="teacher-detail-icon">🎓</div>
                  <div className="teacher-detail-content">
                    <div className="teacher-detail-label">Рівень німецької</div>
                    <div className="teacher-detail-value">
                      C1{" "}
                      <span className="teacher-badge">
                        Спеціалізація: німецька мова та література
                      </span>
                    </div>
                  </div>
                </div>

                {/* образование */}
                <div className="teacher-detail-card">
                  <div className="teacher-detail-icon">🏛️</div>
                  <div className="teacher-detail-content">
                    <div className="teacher-detail-label">Освіта</div>
                    <div className="teacher-detail-value">
                      КНУ ім. Тараса Шевченка
                    </div>
                    <div className="teacher-detail-subvalue">
                      Німецька мова і література
                    </div>
                  </div>
                </div>

                {/* опыт */}
                <div className="teacher-detail-card">
                  <div className="teacher-detail-icon">⏱</div>
                  <div className="teacher-detail-content">
                    <div className="teacher-detail-label">
                      Досвід викладання
                    </div>
                    <div className="teacher-detail-value">6 років</div>
                    <div className="teacher-detail-subvalue">
                      Онлайн та офлайн формати
                    </div>
                  </div>
                </div>

                {/* специализация */}
                <div className="teacher-detail-card">
                  <div className="teacher-detail-icon">📌</div>
                  <div className="teacher-detail-content">
                    <div className="teacher-detail-label">Спеціалізація</div>
                    <div className="teacher-detail-value">
                      Рівні A1–B1, підготовка до DTZ / Goethe
                    </div>
                    <div className="teacher-detail-subvalue">
                      Дорослі та підлітки від 14 років
                    </div>
                  </div>
                </div>
              </div>

              {/* опыт работы */}
              <div className="teacher-experience">
                <div className="teacher-experience-title">Досвід роботи</div>

                <div className="teacher-experience-item">
                  <div className="teacher-experience-role">
                    Онлайн-репетитор німецької
                  </div>
                  <div className="teacher-experience-period">
                    2019 – теперішній час
                  </div>
                </div>

                <div className="teacher-experience-item">
                  <div className="teacher-experience-role">
                    Спеціалізована школа з англійської та німецької
                  </div>
                  <div className="teacher-experience-period">
                    2020 – 2023
                  </div>
                </div>

                <div className="teacher-experience-item">
                  <div className="teacher-experience-role">
                    Приватна гімназія A+
                  </div>
                  <div className="teacher-experience-period">
                    2023 – 2024
                  </div>
                </div>
              </div>

              {/* цитата */}
              <div className="teacher-quote">
                <p className="teacher-quote-text">
                  Моя мета — зробити вивчення німецької мови цікавим та
                  ефективним. Я використовую сучасні методики та створюю
                  комфортну атмосферу для навчання, щоб кожен студент міг
                  досягти своїх цілей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
