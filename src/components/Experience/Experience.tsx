import { Award, BookOpen, Briefcase } from 'lucide-react';
import './Experience.css';

const items = [
  {
    icon: <Award size={20} />,
    title: 'AWS Solutions Architect',
    subtitle: 'Certification Preparation',
    description:
      'Studying for the AWS Solutions Architect Associate certification. Covering EC2, S3, VPC, IAM, Lambda, and core cloud design patterns.',
    tag: 'In Progress',
    tagColor: '#22d3ee',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'DevOps Practice Projects',
    subtitle: 'Hands-on Learning',
    description:
      'Building CI/CD pipelines, containerizing applications with Docker, orchestrating with Kubernetes, and automating infrastructure provisioning.',
    tag: 'Ongoing',
    tagColor: '#34d399',
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Internship / Training',
    subtitle: 'Professional Experience',
    description:
      'Seeking opportunities to apply DevOps and cloud skills in a professional environment. Open to internships and collaborative projects.',
    tag: 'Open',
    tagColor: '#f59e0b',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section__container">
        <h2 className="section__heading">Experience & Learning</h2>
        <p className="section__subheading">My journey and current focus areas</p>

        <div className="experience__timeline">
          {items.map((item, i) => (
            <div className="experience__item" key={item.title}>
              <div className="experience__line">
                <div className="experience__dot" style={{ borderColor: item.tagColor }} />
                {i < items.length - 1 && <div className="experience__connector" />}
              </div>
              <div className="experience__card">
                <div className="experience__card-header">
                  <span className="experience__icon" style={{ color: item.tagColor }}>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="experience__title">{item.title}</h3>
                    <p className="experience__subtitle">{item.subtitle}</p>
                  </div>
                  <span
                    className="experience__tag"
                    style={{
                      color: item.tagColor,
                      borderColor: `${item.tagColor}33`,
                      background: `${item.tagColor}0d`,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <p className="experience__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
