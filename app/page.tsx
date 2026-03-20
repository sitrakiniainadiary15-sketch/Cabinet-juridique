"use client";
import { useState } from "react";

const services = [
  {
    title: "Création d'entreprise",
    desc: "Accompagnement complet pour la création et l'immatriculation de votre société auprès des autorités compétentes.",
  },
  {
    title: "Secrétariat juridique",
    desc: "Rédaction d'actes, convocations, procès-verbaux et tous documents juridiques nécessaires à la vie de votre société.",
  },
  {
    title: "Formalités sociales",
    desc: "Gestion des déclarations sociales, bulletins de paie et relations avec les organismes sociaux.",
  },
  {
    title: "Téléprocédures INPI",
    desc: "Gestion intégrale de vos dépôts et formalités en ligne via le guichet unique INPI.",
  },
  {
    title: "Fiscalité & Comptabilité",
    desc: "Externalisation de vos obligations fiscales et comptables avec rigueur et conformité.",
  },
  {
    title: "Conseil juridique",
    desc: "Conseils personnalisés pour sécuriser vos décisions stratégiques et opérationnelles.",
  },
];

const steps = [
  { n: 1, title: "Prise de contact", desc: "Prenez rendez-vous pour une consultation en nous appelant au +261 76 128 99 41" },
  { n: 2, title: "Analyse de vos besoins", desc: "Nous étudions votre situation et identifions les formalités nécessaires à réaliser." },
  { n: 3, title: "Mise en œuvre", desc: "Notre équipe prend en charge toutes vos démarches juridiques, sociales et fiscales." },
  { n: 4, title: "Suivi & Livraison", desc: "Vous recevez vos documents finalisés et nous restons disponibles pour tout suivi." },
];

const faqs = [
  { q: "What services do you offer?", a: "Nous proposons des services complets d'externalisation juridique, sociale et fiscale (BPO) adaptés aux experts-comptables, cabinets de conseil et dirigeants d'entreprise." },
  { q: "How much do services cost?", a: "Nos tarifs varient selon vos besoins et les services choisis. Nous proposons une tarification transparente et des options de paiement flexibles." },
  { q: "Can you help with cultural traditions?", a: "Notre équipe maîtrise parfaitement les réglementations françaises et malgaches, et nous adaptons nos services à chaque contexte culturel." },
  { q: "Do you provide grief counseling?", a: "Nous offrons un accompagnement complet à chaque étape de vos démarches, avec un suivi personnalisé et un support continu." },
  { q: "What areas do you serve?", a: "Nous intervenons à Madagascar et à l'international, notamment pour les téléprocédures françaises via le guichet unique INPI." },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO FLOTTANT ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-pattern" />
          <div className="hero-content">
            <div className="hero-badge">
              <span>EXTERNALIA JURIS (SARL)</span>
            </div>
            <h1>Thadeus Externalia<br />Juris</h1>
            <p className="hero-subtitle">
              Externalisation Juridique, Sociale et Fiscale (BPO)
            </p>
            <div className="hero-buttons">
              <a href="/nos-services" className="btn-primary">Nos services</a>
              <a href="#contact" className="btn-outline">Nous contacter</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section className="about">
        <div className="about-inner">
          <p className="section-label">À propos</p>
          <h2>Empowering legal solutions</h2>
          <p>Basée à Madagascar, Thadeus Externalia Juris (SARL) est votre partenaire de confiance spécialisé dans l'externalisation (BPO) des formalités juridiques, administratives et sociales.</p>
          <p>Nous accompagnons les experts-comptables, les cabinets de conseil et les dirigeants d'entreprise, tant au niveau local qu'à l'international. Dotés d'une forte expertise sur les réglementations françaises, nous gérons pour vous l'intégralité des téléprocédures (notamment sur le guichet unique INPI).</p>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-header">
            <p className="section-label">Nos services</p>
            <h2>Des solutions adaptées<br />à vos besoins</h2>
            <p>Nous prenons en charge l'intégralité de vos formalités pour vous permettre de vous concentrer sur votre cœur de métier.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon"><div className="service-icon-dot" /></div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how">
        <div className="how-inner">
          <div className="how-header">
            <div className="how-header-left">
              <p className="section-label">Notre approche</p>
              <h2>How it's work ?</h2>
            </div>
            <div className="how-header-right">
              <p>Un processus simple et transparent pour vous accompagner à chaque étape de vos formalités.</p>
            </div>
          </div>
          <div className="how-steps">
            {steps.map((step) => (
              <div className="step-card" key={step.n}>
                <div className="step-number"><span>{step.n}</span></div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq">
        <div className="faq-inner">
          <div className="faq-header">
            <p className="section-label">FAQ</p>
            <h2>Vous avez des questions ?</h2>
            <p>Retrouvez les réponses aux questions les plus fréquentes.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? "∧" : "∨"}</span>
                </button>
                {openFaq === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <h2>Besoins de plus d'informations ?</h2>
          <p>Notre équipe se tient à disposition pour répondre à toutes vos questions.</p>
          <a href="mailto:externalia.juris@yahoo.com" className="btn-gold">Contactez-nous !</a>
        </div>
      </section>
    </>
  );
}
