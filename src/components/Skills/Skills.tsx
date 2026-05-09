import { Container, Cloud, Code2, Globe, Wrench } from 'lucide-react';
import './Skills.css';

const categories = [
  {
    icon: <Container size={20} />,
    title: 'DevOps',
    color: '#60a5fa',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Linux'],
  },
  {
    icon: <Cloud size={20} />,
    title: 'Cloud',
    color: '#22d3ee',
    skills: ['AWS'],
  },
  {
    icon: <Code2 size={20} />,
    title: 'Programming',
    color: '#34d399',
    skills: ['Python', 'JavaScript'],
  },
  {
    icon: <Globe size={20} />,
    title: 'Web',
    color: '#f59e0b',
    skills: ['React', 'HTML', 'CSS'],
  },
  {
    icon: <Wrench size={20} />,
    title: 'Tools',
    color: '#f472b6',
    skills: ['Git', 'GitHub', 'VS Code', 'Prometheus', 'Grafana', 'Datadog'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section__container">
        <h2 className="section__heading">Skills</h2>
        <p className="section__subheading">Technologies and tools I work with</p>

        <div className="skills__grid">
          {categories.map((cat) => (
            <div className="skills__card" key={cat.title}>
              <div className="skills__card-header">
                <span className="skills__card-icon" style={{ color: cat.color }}>
                  {cat.icon}
                </span>
                <h3 className="skills__card-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span className="skills__tag" key={skill} style={{ borderColor: `${cat.color}33` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
