import { Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    title: 'Self-Healing Cloud Project',
    description:
      'An automated cloud infrastructure that detects failures and recovers without manual intervention. Built with health checks, auto-scaling, and self-repair mechanisms.',
    stack: ['AWS', 'Docker', 'Kubernetes', 'MERN', 'ML'],
    github: 'https://github.com/shreyashshirsat/self-healing-cloud',
  },
  {
    title: 'Log-Parser',
    description:
      'A Python-based log analysis tool that processes system logs through the Linux terminal with automated execution using cron jobs, providing insights and alerts for system monitoring.',
    stack: ['Python', 'Linux', 'Cron'],
    github: 'https://github.com/shreyashshirsat/strive',
    demo: '#',
  },
  {
    title: 'Uber Clone',
    description:
      'A MERN-based ride booking application with real-time communication, secure authentication, and Google Maps integration for live ride management, showcasing full-stack development skills.',
    stack: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    github: 'https://github.com/shreyashshirsat/fornova',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section__container">
        <h2 className="section__heading">Projects</h2>
        <p className="section__subheading">Things I've built and am proud of</p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="projects__card" key={project.title}>
              <div className="projects__card-body">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>
                <div className="projects__card-stack">
                  {project.stack.map((tech) => (
                    <span className="projects__tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="projects__card-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__link"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
