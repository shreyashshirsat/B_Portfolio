import { Briefcase } from 'lucide-react';
import './Experience.css';

const items = [
  {
    icon: <Briefcase size={20} />,
    title: 'DevOps Intern',
    company: 'OpsXpress Services LLP - Online',
    duration: 'Jan 2026 - Apr 2026',
    description: [
      'Monitored metrics, logs, and alerts in Datadog to detect and analyze system issues',
      'Configured Datadog monitors with optimized alert thresholds and notifications',
      'Created custom dashboards to visualize infrastructure and application performance',
      'Installed and managed Datadog agents on AWS EC2 and implemented integrations for metrics and log collection'
    ],
    tag: 'Completed',
    tagColor: '#3b82f6',
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Intern Trainee',
    company: 'Besant Technologies - Online',
    duration: 'Sep 2025 - Nov 2025',
    description: [
      'Applied core AI/ML concepts: data preprocessing, supervised/unsupervised learning, model evaluation',
      'Built models using Linear and Logistic Regression, KNN, Decision Trees, and K-Means',
      'Executed an end-to-end ML project: data prep, training, testing, and analysis',
      'Gained practical exposure to Python-based ML workflows using real-world datasets'
    ],
    tag: 'Completed',
    tagColor: '#10b981',
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Intern Trainee',
    company: 'Netleap IT Solutions - Onsite',
    duration: 'Jan 2025 - Feb 2025',
    description: [
      'Developed a full-stack Uber-like application using MongoDB, Express.js, React, and Node.js',
      'Implemented JWT-based authentication and secure role-based access control',
      'Integrated Google Maps API for real-time location tracking',
      'Used Socket.io for live ride updates and communication'
    ],
    tag: 'Completed',
    tagColor: '#8b5cf6',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section__container">
        <h2 className="section__heading">Experience</h2>
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
                    <p className="experience__company">{item.company}</p>
                  </div>
                  <div className="experience__status-container">
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
                    <p className="experience__duration">{item.duration}</p>
                  </div>
                </div>
                <ul className="experience__desc">
                  {item.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
