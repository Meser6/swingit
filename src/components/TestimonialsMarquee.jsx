import { testimonials as defaultItems } from "../data/testimonials";
import { Reveal } from "../hooks/Reveal";

function Stars() {
  return (
    <div className="testimonial-stars" aria-label="Ocena 5 na 5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="testimonial-star">
          ★
        </span>
      ))}
      <span className="testimonial-stars__note">5/5</span>
    </div>
  );
}

function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <article className="testimonial-card">
      <blockquote className="testimonial-card__quote">
        <p>{quote}</p>
      </blockquote>
      <Stars />
      <footer className="testimonial-card__footer">
        <img className="testimonial-card__photo" src={avatar} alt="" width={52} height={52} loading="lazy" />
        <div className="testimonial-card__meta">
          <cite className="testimonial-card__name">{name}</cite>
          <span className="testimonial-card__role">{role}</span>
        </div>
      </footer>
    </article>
  );
}

export function TestimonialsMarquee({ items = defaultItems }) {
  const loop = [...items, ...items];

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <Reveal>
        <h2 id="testimonials-heading" className="section-title">
          Opinie klientów
        </h2>
      </Reveal>
      <div className="testimonials-marquee" role="region" aria-label="Opinie klientów, przewijane automatycznie">
        <div className="testimonials-marquee__track">
          {loop.map((t, i) => (
            <TestimonialCard
              key={`${t.id}-${i}`}
              quote={t.quote}
              name={t.name}
              role={t.role}
              avatar={t.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
