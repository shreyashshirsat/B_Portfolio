import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const links = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'dev.shreyashshirsat@gmail.com',
    href: 'mailto:dev.shreyashshirsat@gmail.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/shreyashshirsat',
    href: 'https://linkedin.com/in/shreyashshirsat',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/shreyashshirsat',
    href: 'https://github.com/shreyashshirsat',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="section__container">
        <h2 className="section__heading">Get In Touch</h2>
        <p className="section__subheading">I'd love to hear from you</p>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              Whether you have a question, a project idea, or just want to say hi &mdash;
              my inbox is always open. Feel free to reach out through any of the channels below.
            </p>

            <div className="contact__links">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                  className="contact__link"
                >
                  <span className="contact__link-icon">{link.icon}</span>
                  <div>
                    <strong>{link.label}</strong>
                    <span>{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact__success">
                <Send size={28} />
                <p>Thanks for reaching out! I'll get back to you soon.</p>
              </div>
            ) : (
              <>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Your name" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="What's on your mind?" required />
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
