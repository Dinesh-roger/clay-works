import React from 'react';
import './TopRibbon.css';

const TopRibbon: React.FC = () => {
  return (
    <div className="top-ribbon">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap gap-2">
        <div className="ribbon-left d-flex align-items-center gap-3">
          <span><i className="fa-solid fa-phone-volume me-1"></i> +91 9551668554</span>
          <span><i className="fa-solid fa-phone-volume me-1"></i> +91 9840571687</span>
          <span><i className="fa-solid fa-phone-volume me-1"></i> +91 9676791734</span>
          <span><i className="fa-solid fa-envelope me-1"></i> aasaithambi@clayworks.in</span>
        </div>
        <div className="ribbon-right d-flex align-items-center gap-3">
          <span>pure clay and hand made</span>
          <span><i className="fa-solid fa-award me-1"></i> 25+ Years of Legacy</span>
        </div>
      </div>
    </div>
  );
};

export default TopRibbon;
