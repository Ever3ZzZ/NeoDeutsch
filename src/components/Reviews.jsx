"use client";

import { useState, useEffect } from "react";
import "../styles/Reviews.css";
 

const reviews = [
  {
    name: "Марина Коваленко",
    course: "A2",
    rating: 5,
    text: "Група невелика — всього 5–6 людей. Викладач дуже терплячий і запитує кожного, ні про кого не забуває, пояснює до тих пір, поки всі не зрозуміють. Пройшла A2 набагато швидше, ніж очікувала.",
    image:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    achievement: "🎓 Здала A2 за 3 місяці",
  },
  {
    name: "Андрій Петренко",
    course: "B1",
    rating: 5,
    text: "Я завжди плутав артиклі й відмінки, але в групі мені все реально “розжували”. Завдяки поясненням викладача все стало логічним. Викладач просто супер, уроки були не напружені, а дуже легкі й головне — зрозумілі.",
    image:
      "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    achievement: "🏆 B1 з першої спроби",
  },
  {
    name: "Олена Сидоренко",
    course: "A1",
    rating: 5,
    text: "Здала B1 за 5,5 місяця. Дуже сподобалося навчання! Уроки структуровані, домашка зрозуміла, а головне — постійна підтримка. Після кожного заняття реально відчувається прогрес. Не очікувала, що за такі невеликі кошти буде такий результат!",
    image:
      "https://plus.unsplash.com/premium_photo-1668319914124-57301e0a1850?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    achievement: "⭐ З нуля до впевненого Б1",
  },
  {
    name: "Дмитро Іваненко",
    course: "B1",
    rating: 5,
    text: "Нарешті знайшов нормальну школу. Живу в Німеччині два роки, але мовний бар’єр був жосткий. Хотів щось сказати — і все, замовкав. Після курсу розмовної практики в NeoDeutsch я реально почав говорити. Не ідеально, але вільно і без паніки. Бо почав хоч трохи розуміти цю велику німецьку граматику з мільйонами артиклів. Дякую вам за впевненість! Повернусь ще на B2.",
    image:
      "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    achievement: "🚀 Досяг рівня B1",
  },
  {
    name: "Ірина Мельник",
    course: "A2",
    rating: 5,
    text: "Дружня група + сильний викладач. Уроки проходили настільки живо, що час пролітав. Всі підтримували одне одного, і завдяки групі я перестала соромитися робити помилки. Бо думала, що маю одразу знати мову ідеально 😂 але це не так. Стала набагато впевненіше говорити і краще розуміти граматику.",
    image:
      "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    achievement: "💫 Рекомендує друзям",
  },
  {
  name: "Володимир Великий",
    course: "A2",
    rating: 5,
    text: "Чудова школа. Спочатку боявся групових занять, але виявилося навпаки — більше практики, більше різних акцентів і ситуацій. Ми багато говорили в парах, і це дуже допомогло. Я обов’язково повернусь ще, тим паче спробуйте за такі кошти знайти дешевше і на такому ж професійному рівні.",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    achievement: "💫 Подолав розмовний бар'єр",
  },
];

/* SVG-иконки вместо lucide-react  */
function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 2.5 14.9 8l5.6.8-4.1 4 1 5.7L12 16.8 6.6 18.5l1-5.7-4.1-4L9.1 8 12 2.5z" />
    </svg>
  );
}

function ChevronLeftIcon({ className }) {
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
      <path d="M15 18 9 12l6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
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
      <path d="M9 6 15 12 9 18" />
    </svg>
  );
}

function QuoteIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h4v4H9v3H6v-3a3 3 0 0 1 3-3M15 7h4v4h-2v3h-3v-3a3 3 0 0 1 3-3" />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3 13.5 8.5 19 10 13.5 11.5 12 17 10.5 11.5 5 10 10.5 8.5 12 3z" />
      <path d="M5 19l.6-2 .9-.9-2-.6L4 14l-.6 1.5-2 .6.9.9L3 19l.6-1.4z" />
      <path d="M19 8l.4-1 .6-.6-1-.4L18 5l-.4 1-1 .4.6.6.4 1 .4-1z" />
    </svg>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredStar, setHoveredStar] = useState(null);

  // автопрокрутка каждые 5 секунд
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="reviews-section">
      <div className="reviews-background">
        <div className="reviews-bg-glow reviews-bg-glow-1" />
        <div className="reviews-bg-glow reviews-bg-glow-2" />
        <div className="reviews-bg-glow reviews-bg-glow-3" />
      </div>

      <div className="reviews-container">
        {/* Заголовок */}
        <div className="reviews-header">
          <div className="reviews-header-icon">
            <SparklesIcon className="reviews-sparkle-icon" />
          </div>
          <h2 className="reviews-title">Відгуки студентів</h2>
          <p className="reviews-subtitle">Що кажуть наші випускники</p>
        </div>

        {/* Слайдер */}
        <div
          className="reviews-slider"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="reviews-cards-container">
            {reviews.map((review, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;

              return (
               <div
              key={index}
              className={`review-card ${isActive ? "review-card-active" : ""}`}
              style={{
            transform: `translateX(calc(${offset * 35}% - 50%)) translateY(${
            isActive ? 0 : 12
            }px) scale(${isActive ? 1 : 0.88})`,
            opacity: isActive ? 1 : 0.12,             // неактивные почти прозрачные
            zIndex: isActive ? 10 : 1,
            pointerEvents: isActive ? "auto" : "none",
            filter: isActive ? "none" : "blur(2px)",  // лёгкий blur для соседей
}}
>


                  <div className="review-quote-icon">
                    <QuoteIcon className="quote-icon" />
                  </div>

                  <div className="review-content">
                    <div className="review-photo-wrapper">
                      <div className="review-photo-glow" />
                      <div className="review-photo">
                        <img src={review.image} alt={review.name} />
                      </div>
                      <div className="review-photo-ring" />
                    </div>

                    <div className="review-info">
                      <div className="review-achievement">
                        {review.achievement}
                      </div>

                      <div className="review-stars">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <StarIcon
                            key={i}
                            className="review-star"
                            onMouseEnter={() => setHoveredStar(i)}
                            onMouseLeave={() => setHoveredStar(null)}
                            style={{
                              animationDelay: `${i * 0.1}s`,
                              transform:
                                hoveredStar === i
                                  ? "scale(1.3) rotate(15deg)"
                                  : "scale(1)",
                            }}
                          />
                        ))}
                      </div>

                      <p className="review-text">{review.text}"</p>

                      <div className="review-author-wrapper">
                        <div className="review-author">{review.name}</div>
                        <div className="review-course">
                          <span className="review-course-badge">
                            Курс {review.course}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Навигация */}
          <div className="reviews-navigation">
            <button
              type="button"
              onClick={prev}
              className="reviews-nav-btn reviews-nav-btn-prev"
            >
              <ChevronLeftIcon className="reviews-nav-icon" />
            </button>

            <div className="reviews-dots">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`reviews-dot ${
                    index === currentIndex ? "reviews-dot-active" : ""
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                >
                  {index === currentIndex && (
                    <div
                      className="reviews-dot-progress"
                      style={{
                        animation: isAutoPlaying ? "progress 5s linear" : "none",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="reviews-nav-btn reviews-nav-btn-next"
            >
              <ChevronRightIcon className="reviews-nav-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
