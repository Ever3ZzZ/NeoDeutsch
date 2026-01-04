"use client";
import { useEffect, useRef, useState } from "react";

export default function TrialLessonNudge() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const retryTimer = useRef(null);

  // Показ сразу после загрузки страницы
  useEffect(() => {
    setVisible(true);

    return () => {
      if (retryTimer.current) {
        clearTimeout(retryTimer.current);
      }
    };
  }, []);

  const hideAndRetry = () => {
    setVisible(false);
    setExpanded(false);

    // Показать снова через 10 секунд
    retryTimer.current = setTimeout(() => {
      setVisible(true);
    }, 30000);
  };

  const handleSignUp = () => {
    // Скролл к форме
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
    // Скрыть на минуту
    setVisible(false);
    setExpanded(false);
    retryTimer.current = setTimeout(() => {
      setVisible(true);
    }, 60000); // 1 минута
  };

  if (!visible) return null;

  return (
    <div className={`trial-nudge ${expanded ? "expanded" : ""}`}>
      {!expanded ? (
        <>
          <span className="trial-text">
            👋 Хочеш спробувати, як проходять заняття в NeoDeutsch?
            <br />
            <strong>Пробний урок</strong>
          </span>

          <button className="trial-btn" onClick={() => setExpanded(true)}>
            Записатись →
          </button>

          <button className="trial-close" onClick={hideAndRetry}>
            ×
          </button>
        </>
      ) : (
        <>
          <span className="trial-text">
            Живе заняття в группі ✔️
            <br />
            ⏱ 2 години  + практика з першого слова
            <br />
          </span>

          <button className="trial-btn main" onClick={handleSignUp}>
            Записатись на пробний
          </button>

          <button className="trial-later" onClick={hideAndRetry}>
            Пізніше
          </button>
        </>
      )}
    </div>
  );
}
