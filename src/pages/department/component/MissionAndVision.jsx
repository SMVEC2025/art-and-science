import React from 'react';

const MissionVision = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        <h2 className="mv-heading">Our Vision & Mission</h2>
        <div className="mv-cards">
          <div className="mv-card vision">
            <h3 className="mv-title">Vision</h3>
            <p className="mv-text">
              To create professionally competent individuals who can lead and innovate in diverse professional sectors while upholding ethical values and a commitment to lifelong learning.
            </p>
          </div>
          <div className="mv-card mission">
            <h3 className="mv-title">Mission</h3>
            <p className="mv-text">
              To deliver quality professional education with a global outlook. To foster a learning environment that promotes critical thinking, innovation, and social responsibility. To build industry partnerships that provide students with exposure and employment opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;