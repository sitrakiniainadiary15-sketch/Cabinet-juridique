"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Image from "next/image";

const services = [
  {
    icon: "/accounting_5278345.png",
    title: "Externalisation des traitements comptables",
    desc: "Sous-traitement de la préparation et du traitement des dossiers comptables, sans effectuer directement les déclarations qui doivent obligatoirement être certifiées par un expert-comptable.",
  },
  {
    icon: "/icone_contrat.png",
    title: "Création & Formalités",
    desc: "Prise en charge de A à Z : rédaction des statuts, gestion des annonces légales et immatriculation (INPI/EDBM). Un interlocuteur unique pour un Kbis sans délai.",
  },
  {
    icon: "/call-center_2068857.png",
    title: "Secrétariat juridique",
    desc: "Gestion du juridique annuel (approbation des comptes) et exceptionnel (transferts, cessions, modifications). Une haute capacité d'absorption pour vos flux massifs.",
  },
  {
    icon: "/icone_paie.png",
    title: "Gestion Sociale & Paie",
    desc: "Établissement des bulletins de paie, DSN, rédaction des contrats de travail et gestion des organismes (URSSAF, mutuelles). Sécurisez votre gestion RH au quotidien.",
  },
  {
    icon: "/icone_ingénierie.png",
    title: "Ingénierie fiscale",
    desc: "Accompagnement sur les holdings, restructurations, pactes d'associés et flux intra-groupe. Une expertise technique en coordination avec vos conseils habituels.",
  },
];

const steps = [
  { n: 1, title: "Conseil & Cadrage stratégique", desc: "Un échange initial pour valider vos choix stratégiques (régime d'imposition, TVA, capital social) et définir le périmètre de la mission." },
  { n: 2, title: "Rédaction & Collecte des pièces", desc: "Nos experts rédigent vos actes sur-mesure (statuts, PV, contrats). Nous centralisons les justificatifs et coordonnons le dépôt des fonds." },
  { n: 3, title: "Signature & Téléprocédures", desc: "Signature électronique sécurisée (Yousign/Oneflow) et saisie immédiate sur le Guichet Unique (INPI) par nos formalistes dédiés." },
  { n: 4, title: "Livraison & Livrables de synthèse", desc: "Réception de votre K-bis à jour et remise d'une plaquette de synthèse claire expliquant les impacts de l'opération réalisée." },
];

const faqs = [
  {
    q: "Quels types de structures accompagnez-vous ?",
    a: "Nous intervenons pour tous types de formes juridiques françaises (SARL, SAS, SCI, Holding, etc.), qu'il s'agisse de créations, de gestion courante ou d'opérations complexes de restructuration. Nous travaillons principalement en partenariat avec des experts-comptables.",
  },
  {
    q: "Comment garantissez-vous la sécurité de mes données ?",
    a: "La confidentialité est au cœur de notre métier. Nous utilisons des outils de signature électronique sécurisés (Yousign/Oneflow) et pouvons travailler directement sur vos logiciels métiers (Pennylane, Sage, etc.) via des accès sécurisés pour garantir une continuité parfaite sans rupture de données.",
  },
  {
    q: "Quels sont vos délais pour l'obtention d'un Kbis ?",
    a: "Pour une création classique, nous obtenons généralement le Kbis en 2 à 5 jours ouvrés après le dépôt sur le Guichet Unique. Pour les activités artisanales (CMA), les délais peuvent varier entre 4 et 6 semaines selon les chambres consulaires.",
  },
  {
    q: "Pouvez-vous travailler sur nos propres outils métiers ?",
    a: "Tout à fait. Nos équipes sont formées aux logiciels standards du marché (Pennylane, Sage, Cegid, MyUnisoft, etc.). Nous nous intégrons directement à votre écosystème digital pour que notre intervention soit transparente et n'ajoute aucune friction à vos processus actuels.",
  },
  {
    q: "Comment gérez-vous la distance et le décalage horaire ?",
    a: "Madagascar ne possède qu'une à deux heures de décalage avec la France (selon la saison). Cela nous permet de travailler en parfaite synchro avec vos horaires de bureau. Nos processus sont 100% digitalisés, vous offrant une réactivité identique, voire supérieure, à un collaborateur en interne.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* ── À PROPOS ── */}
      <section className="about">
        <div className="about-inner">
          <div className="about-container">
            <div className="about-left">
              <p className="section-label">A propos</p>
              <h2>Libérez votre croissance, nous sécurisons vos formalités.</h2>
            </div>
            <div className="about-right">
              <p>Basés à Madagascar, nous accompagnons les experts-comptables et les dirigeants d&apos;entreprise, localement et à l&apos;international, pour transformer leurs contraintes administratives en leviers de réussite.</p>
              <p>Nous agissons comme le prolongement de vos équipes pour vous faire gagner du temps précieux, en vous concentrant sur votre cœur de métier et le conseil à haute valeur ajoutée. Que vous soyez en phase de création ou en plein pic d&apos;activité annuelle, notre équipe est prête à devenir le prolongement naturel de vos bureaux.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services" id="services">
        <div className="services-container">
          <div className="services-inner">
            <div className="services-header">
              <p className="section-label">Nos services</p>
              <h2>Un accompagnement 360°<br />pour vos formalités</h2>
              <p>Une structure organisée en 4 pôles métiers pour répondre avec précision à l&apos;ensemble des besoins de vos clients.</p>
            </div>
            <div className="services-grid">
              {services.map((service, i) => (
                <div className="service-card" key={i}>
                  <div className="service-icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="services-cta">
              <a href="/nos-services" className="btn-gold">En savoir plus</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how">
        <div className="how-inner">
          <div className="how-header">
            <div className="how-header-left">
              <p className="section-label">Notre approche</p>
              <h2>Comment nous<br />collaborons ?</h2>
            </div>
            <div className="how-header-right">
              <p>Chez Thadéus Externalia Juris, nous avons modélisé des processus rigoureux pour vous garantir réactivité et sécurité à chaque étape de la vie de vos dossiers.</p>
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
          <div className="main-container">
            <div className="faq-header">
              <p className="section-label">FAQ</p>
              <div className="faq-title-container">
                <h2>Vous avez des questions ?</h2>
              </div>
              <p>Nous répondons aux interrogations les plus fréquentes des cabinets et entreprises pour
                faciliter votre transition vers l'externalisation.</p>
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta" id="contact">
        <div className="cta-inner">
          <div className="txt-container">
            <h2>Besoins de plus d&apos;informations ?</h2>
            <p>Notre équipe se tient à disposition pour répondre à toutes vos questions.</p>
          </div>
          <a href="mailto:externalia.juris@yahoo.com" className="btn-gold">
            Contactez-nous !
          </a>
        </div>
      </section>
    </>
  );
}