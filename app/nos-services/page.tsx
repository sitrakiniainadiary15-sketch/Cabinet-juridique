"use client";

import { useState } from "react";
import "./nos-services.css";

const slides = [
  {
    quote: "Soleo saepe ante oculos ponere",
    title: "Nous gérons la naissance de votre entreprise de A à Z",
    body1: "Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula.",
    body2: "Verum ad istam omnem orationem brevis est defensio. Nam quoad aetas M. Caeli dare potuit isti suspicioni locum, fuit primum ipsius pudore, deinde etiam patris diligentia disciplinaque munita. Qui ut huic virilem togam dedit, nihil dicam hoc loco de me; tantum sit, quantum vos existimatis: hoc dicam.",
  },
  {
    quote: "Fides et iustitia semper prima",
    title: "Nous vous accompagnons dans vos litiges",
    body1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    body2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  },
  {
    quote: "Lex est ratio summa",
    title: "Expertise en droit des sociétés et fiscal",
    body1: "Praesent vulputate odio quis lorem hendrerit ultrices. Nam molestie blandit arcu, vel hendrerit tortor fringilla ut. Sed et velit at ligula placerat pretium.",
    body2: "Aliquam erat volutpat. Nam accumsan molestie ante, at faucibus enim rhoncus eget. Curabitur tempor diam at libero semper, id dignissim elit tincidunt.",
  },
];

export default function NosServicesPage() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrent((i) => (i + 1) % slides.length);
  const slide = slides[current];

  return (
    <>
      {/* ── HERO FLOTTANT ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-pattern" />
          <div className="hero-content">
            <h1>Thadeus Externalia Juris</h1>
            <p className="hero-subtitle">Externalisation Juridique, Sociale et Fiscale (BPO)</p>
          </div>
        </div>
      </section>

      {/* ── SECTION SERVICES ── */}
      <section className="services-section">
        <div className="services-wrapper">
          <div className="services-card">
            <div className="services-left">
              <div className="services-circle" />
              <p className="services-quote">{slide.quote}</p>
              <div className="services-nav">
                <button className="nav-btn" onClick={prev}>&#8249;</button>
                <button className="nav-btn" onClick={next}>&#8250;</button>
              </div>
            </div>
            <div className="services-divider" />
            <div className="services-right">
              <h2 className="services-title">{slide.title}</h2>
              <p className="services-body">{slide.body1}</p>
              <p className="services-body">{slide.body2}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
