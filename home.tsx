import React, { useState } from "react";
import "./HomePage.css";

const steps = [
{
number: 1,
color: "pink",
title: "Crie sua conta",
text: "O cadastro é rápido e gratuito. Com ele, você terá um espaço só seu para organizar suas turmas e acompanhar o
progresso de cada aluno com autonomia.",
},
{
number: 2,
color: "yellow",
title: "Crie suas turmas e adicione seus alunos",
text: "Organize suas turmas da forma que preferir e cadastre cada aluno individualmente. No perfil de cada um, você pode
registrar informações importantes como a neurodivergência presente, características e necessidades específicas — tudo em
um único lugar, acessível sempre que precisar.",
},
{
number: 3,
color: "green",
title: "Crie e adapte atividades",
text: "Com o perfil do aluno em mãos, nosso Agente de Inteligência Artificial sugere e adapta atividades pedagógicas de
acordo com as especificidades de cada neurodivergência. Chega de retrabalho: você recebe orientações práticas, prontas
para aplicar em sala de aula.",
},
];

const faqs = [
{
question: "Quem pode usar a plataforma?",
answer:
"A plataforma foi feita para professoras e professores que atendem crianças neurodivergentes, em escolas regulares ou
especializadas.",
},
{
question: "Funciona para qualquer diagnóstico?",
answer:
"Sim! Você pode registrar diferentes neurodivergências no perfil de cada aluno e nossa IA adapta as atividades de acordo
com as necessidades específicas de cada um.",
},
{
question: "O uso é gratuito?",
answer:
"Sim! Totalmente gratuito. É só criar sua conta e já começar a adaptar atividades, configurar o perfil da criança e
explorar todos os formatos.",
},
];

const testimonials = [
{
name: "Rafaela Silva",
role: "Professora da Escola E. Vila Feliz",
text: "A MetamorphIA facilitou muito a minha vida!",
},
{
name: "Getúlio Alves",
role: "Professor da Escola Estudar",
text: "Não estava acreditando, mas definitivamente superou minhas expectativas.",
},
];

export default function HomePage() { 
const [openFaq, setOpenFaq] = useState(2);
const [testimonialIndex, setTestimonialIndex] = useState(0);

const toggleFaq = (index) => {
setOpenFaq(openFaq === index ? -1 : index);
};

const prevTestimonial = () => {
setTestimonialIndex((prev) =>
prev === 0 ? testimonials.length - 1 : prev - 1
);
};

const nextTestimonial = () => {
setTestimonialIndex((prev) =>
prev === testimonials.length - 1 ? 0 : prev + 1
);
};

const scrollToTop = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};

return (
<div className="page">
    {/* HEADER */}
    <header className="header">
        <div className="logo">
            <span className="logo-icon">🅥</span> MetamorphIA
        </div>
        <div className="header-actions">
            <button className="btn btn-outline-light">Cadastro</button>
            <button className="btn btn-purple">Login</button>
        </div>
    </header>

    {/* HERO */}
    <section className="hero">
        <div className="hero-text">
            <h1>
                Cada criança aprende
                <br />
                <strong>do seu jeito.</strong>
                <br />
                <span className="highlight">A gente adapta!</span>
            </h1>
            <p className="hero-description">
                Nossa IA transforma qualquer atividade pedagógica em uma versão
                feita sob medida para crianças neurodivergentes — em segundos,
                sem precisar de formação especializada.
            </p>
            <div className="hero-buttons">
                <button className="btn btn-purple-outline">
                    Adaptar uma atividade
                </button>
                <button className="btn btn-ghost">Como funciona?</button>
            </div>
        </div>
        <div className="hero-image">
            <img src="/assets/professora-quadro.jpg" alt="Professora ensinando alunos em frente ao quadro branco" />
        </div>
    </section>

    <div className="wave-divider" aria-hidden="true"></div>

    {/* COMO FUNCIONA */}
    <section className="how-it-works">
        <span className="eyebrow">Como funciona?</span>

        <div className="step-row">
            <div className="step-illustration">
                <img src="/assets/illustration-1.svg" alt="" />
            </div>
            <div className="step-content">
                <div className="step-header">
                    <span className="step-number circle-pink">1</span>
                    <h3>{steps[0].title}</h3>
                </div>
                <p>{steps[0].text}</p>
            </div>
        </div>

        <div className="step-row reverse">
            <div className="step-content">
                <div className="step-header">
                    <span className="step-number circle-yellow">2</span>
                    <h3>{steps[1].title}</h3>
                </div>
                <p>{steps[1].text}</p>
            </div>
            <div className="step-illustration">
                <img src="/assets/illustration-2.svg" alt="" />
            </div>
        </div>

        <div className="step-row">
            <div className="step-illustration">
                <img src="/assets/illustration-3.svg" alt="" />
            </div>
            <div className="step-content">
                <div className="step-header">
                    <span className="step-number circle-green">3</span>
                    <h3>{steps[2].title}</h3>
                </div>
                <p>{steps[2].text}</p>
            </div>
        </div>

        <div className="cta-center">
            <button className="btn btn-purple-outline">
                Adaptar uma atividade
            </button>
        </div>
    </section>

    <div className="wave-divider" aria-hidden="true"></div>

    {/* FAQ */}
    <section className="faq-section">
        <h2>FAQ</h2>
        <div className="faq-list">
            {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
                <button className="faq-question" onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                    >
                    {faq.question}
                    <span className={`chevron ${openFaq===index ? "up" : "" }`}>
                        ▾
                    </span>
                </button>
                {openFaq === index && (
                <div className="faq-answer">{faq.answer}</div>
                )}
            </div>
            ))}
        </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="testimonials-section">
        <span className="eyebrow">Eles aprovam:</span>
        <div className="testimonial-carousel">
            <button className="arrow-btn" onClick={prevTestimonial} aria-label="Depoimento anterior">
                ‹
            </button>

            <div className="testimonial-track">
                {testimonials.map((t) => (
                <div className="testimonial-card" key={t.name}>
                    <p className="testimonial-author">
                        {t.name} - {t.role}
                    </p>
                    <p className="testimonial-text">{t.text}</p>
                </div>
                ))}
            </div>

            <button className="arrow-btn" onClick={nextTestimonial} aria-label="Próximo depoimento">
                ›
            </button>
        </div>
    </section>

    {/* SCROLL TO TOP */}
    <button className="scroll-top" onClick={scrollToTop} aria-label="Voltar ao topo">
        ↑
    </button>

    {/* FOOTER */}
    <footer className="footer">
        <div className="footer-brand">
            <div className="logo">
                <span className="logo-icon">🅥</span> MetamorphIA
            </div>
            <p>
                Nossa IA transforma qualquer atividade pedagógica em uma versão
                feita sob medida para crianças neurodivergentes — em segundos,
                sem precisar de formação especializada.
            </p>
            <p className="footer-contact">
                Dúvidas?
                <br />
                Fale conosco: metamorphia@gmail.com
            </p>
        </div>

        <div className="footer-links">
            <h4>Página</h4>
            <a href="#como-funciona">Como funciona?</a>
            <a href="#faq">FAQ</a>
        </div>

        <div className="footer-links">
            <h4>Termos</h4>
            <a href="#politica">Política de Privacidade</a>
            <a href="#termos">Termos de serviço</a>
        </div>
    </footer>
</div>
);
}