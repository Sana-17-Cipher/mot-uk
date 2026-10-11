"use client";

import { useEffect, useRef, useState } from "react";
import { teachers } from "@/data/teachers";

const teacherPhotos: Record<string, string> = {
  "Deepthy Sarat": "/teachers/deepthi.jpeg",
  "Arifa Roshan": "/teachers/arifa.jpeg",
  "Ajisha K. A": "/teachers/ajisha.jpeg",
  "Dilna Arun": "/teachers/dilna.jpeg",
  "Sruthy Emilraj": "/teachers/sruthy.jpeg",
  "Anjusha K. A": "/teachers/anjusha.jpeg",
};

const c = (part: string) => `TeacherMoms-${part}`;

export default function TeacherCarousel() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(3);
  const [active, setActive] = useState(0);

  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const resize = () => {
      setPerPage(
        window.innerWidth <= 640
          ? 1
          : window.innerWidth <= 960
            ? 2
            : 3,
      );

      setPage(0);
      setActive(0);
    };

    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const count = Math.ceil(teachers.length / perPage);

  const go = (value: number) => {
    setPage(Math.max(0, Math.min(count - 1, value)));
    setActive(0);
  };

  const slides = Array.from({ length: count }, (_, index) =>
    teachers.slice(index * perPage, (index + 1) * perPage),
  );

  return (
    <div
      className={c("carousel")}
      role="region"
      aria-label="Meet our teacher-moms"
      aria-roledescription="carousel"
    >
      <div className={c("toolbar")}>
        <p>Get to know our educators</p>

        <div className={c("controls")}>
          <button
            type="button"
            aria-label="Previous teachers"
            aria-controls="teacher-cards"
            disabled={page === 0}
            onClick={() => go(page - 1)}
          >
            <Arrow previous />
          </button>

          <button
            type="button"
            aria-label="Next teachers"
            aria-controls="teacher-cards"
            disabled={page === count - 1}
            onClick={() => go(page + 1)}
          >
            <Arrow />
          </button>
        </div>
      </div>

      <div
        className={c("viewport")}
        id="teacher-cards"
        tabIndex={0}
        aria-label="Teacher cards. Use left and right arrow keys to browse."
        onKeyDown={(event) => {
          if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowRight"
          ) {
            event.preventDefault();
            go(page + (event.key === "ArrowRight" ? 1 : -1));
          }
        }}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current !== null) {
            const delta =
              event.changedTouches[0].clientX - touchStart.current;

            if (Math.abs(delta) > 50) {
              go(page + (delta < 0 ? 1 : -1));
            }
          }

          touchStart.current = null;
        }}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        <div
          className={c("track")}
          style={{
            transform: `translate3d(-${page * 100}%, 0, 0)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              className={c("slide")}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${count}`}
              aria-hidden={slideIndex !== page}
              inert={slideIndex !== page}
              key={slideIndex}
            >
              {slide.map((teacher, index) => (
                <article
                  key={teacher.name}
                  aria-label={teacher.name}
                  tabIndex={0}
                  className={`${c("card")} ${
                    index === active ? c("expanded") : ""
                  }`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                >
                 <div className={c("portrait")}>
  <img
    src={teacherPhotos[teacher.name]}
    alt={teacher.name}
    className="TeacherMoms-photoImage"
    loading="lazy"
    decoding="async"
    draggable={false}
  />
</div>

                  <div className={c("content")}>
                    <p className={c("experience")}>
                      {teacher.experience}
                    </p>

                    <h3>{teacher.name}</h3>

                    <ul>
                      {teacher.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    {teacher.curriculum && (
                      <span className={c("badge")}>
                        {teacher.curriculum}
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={c("footer")}>
        <p role="status" aria-live="polite" aria-atomic="true">
          Teachers {page * perPage + 1}–
          {Math.min((page + 1) * perPage, teachers.length)} of{" "}
          {teachers.length}
        </p>

        <div
          className={c("pagination")}
          aria-label="Choose teacher slide"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show teachers ${
                index * perPage + 1
              } to ${Math.min(
                (index + 1) * perPage,
                teachers.length,
              )}`}
              aria-current={index === page ? "true" : undefined}
              onClick={() => go(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Arrow({ previous = false }: { previous?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={previous ? "M14 5l-7 7 7 7" : "M10 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}