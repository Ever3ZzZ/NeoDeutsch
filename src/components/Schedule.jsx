"use client";
import "../styles/Schedule.css";

function CalendarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <path d="M8 3v3M16 3v3M3 10h18" />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.5M12 18.5V21M4.22 4.22 5.9 5.9M18.1 18.1 19.78 19.78M3 12h2.5M18.5 12H21M4.22 19.78 5.9 18.1M18.1 5.9 19.78 4.22" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A7 7 0 0 1 11.2 3 6.5 6.5 0 1 0 21 12.8Z" />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="7" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

function InfoIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

export default function Schedule() {
  return (
    <section className="schedule-section">
      <div className="schedule-info-container">
        {/* Заголовок */}
        <div className="schedule-info-header">
          <CalendarIcon className="schedule-info-icon" />
          <h3 className="schedule-info-title">Графік занять</h3>
        </div>

        {/* Две группы */}
        <div className="schedule-groups">
          {/* Ранкова група */}
          <div className="schedule-group schedule-group-morning">
            <div className="schedule-group-icon-wrapper">
              <SunIcon className="schedule-group-icon" />
            </div>
            <div className="schedule-group-content">
              <h4 className="schedule-group-title">
                Ранкова група (A1–A2)
              </h4>
              <div className="schedule-group-details">
                <ClockIcon className="schedule-detail-icon" />
                <span>
                  3 рази на тиждень, вранці<br />
                  (10:00–12:00)
                </span>
              </div>
            </div>
          </div>

          {/* Вечірня група */}
          <div className="schedule-group schedule-group-evening">
            <div className="schedule-group-icon-wrapper">
              <MoonIcon className="schedule-group-icon" />
            </div>
            <div className="schedule-group-content">
              <h4 className="schedule-group-title">
                Вечірня група (B1–B2)
              </h4>
              <div className="schedule-group-details">
                <ClockIcon className="schedule-detail-icon" />
                <span>
                  3 рази на тиждень, ввечері<br />
                  (18:00–20:00)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Примечание */}
        <div className="schedule-note">
          <InfoIcon className="schedule-note-icon" />
          <p className="schedule-note-text">
            Точний розклад підбираємо індивідуально — менеджер уточнить після
            заявки.
          </p>
        </div>
      </div>
    </section>
  );
}
