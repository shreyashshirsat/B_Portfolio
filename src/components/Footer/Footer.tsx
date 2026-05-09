import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <a className="footer__logo" href="#hero">&lt;SS /&gt;</a>
          <div className="footer__socials">
            <a href="https://github.com/shreyashshirsat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/shreyashshirsat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:dev.shreyashshirsat@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="footer__divider" />
        <p className="footer__copy">
          Built with <Heart size={13} className="footer__heart" /> by Shreyash Shirsat &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
