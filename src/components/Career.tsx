import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>NLP Developer Trainee</h4>
                <h5>Haleform Technologies</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Worked on processing large datasets, data cleaning, preprocessing,
              and populating structured sheets. Designed and implemented NLP
              models to extract meaningful insights and automate data handling
              tasks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Systems Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Supporting DevOps workflows including CI/CD pipeline integration,
              deployment automation, environment configuration, and application
              monitoring. Collaborating with development and AI teams to
              streamline release cycles, improve deployment efficiency, and
              contribute to AI-driven applications in enterprise environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
