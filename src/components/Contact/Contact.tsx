import { useRef, useState, type FormEvent } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
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
    href: 'https://www.linkedin.com/in/shreyash-shirsat-728578281/',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/shreyashshirsat',
    href: 'https://github.com/shreyashshirsat',
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage(
        'Email service is not configured. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your environment.'
      );
      return;
    }

    setStatus('sending');
    setErrorMessage(null);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS send error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong while sending your message. Please try again or email me directly.');
    }
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

          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            {status === 'success' ? (
              <div className="contact__success">
                <Send size={28} />
                <p>Thanks for reaching out! I got your message and will respond soon.</p>
              </div>
            ) : (
              <>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="from_name" type="text" placeholder="Your name" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="reply_to" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="What's on your mind?" required />
                </div>

                {status === 'error' && errorMessage ? (
                  <p className="contact__error">{errorMessage}</p>
                ) : null}

                <button type="submit" className="btn btn--primary btn--full" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
