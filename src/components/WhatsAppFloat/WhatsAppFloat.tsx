import React from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/919676791734?text=Hello%20AasaiThambi!%20I%20want%20to%20enquire%20about%20Vinayagar%20idols."
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      title="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppFloat;
