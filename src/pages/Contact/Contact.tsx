import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import './Contact.css';

const SIZE_OPTIONS = [
  '3 Feet', '4 Feet', '5 Feet', '6 Feet', '7 Feet', '8 Feet',
  '9 Feet', '10 Feet', '11 Feet', '12 Feet', '13 Feet', 'Custom Size',
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  size: string;
  qty: string;
  message: string;
}

const initialState: FormState = { name: '', phone: '', email: '', size: '', qty: '', message: '' };

const Contact: React.FC = () => {
  const { showToast } = useApp();
  const [form, setForm] = useState<FormState>(initialState);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submitContact = () => {
    const { name, phone, email, size, qty, message } = form;

    if (!name.trim()) { showToast('Please enter your name.'); return; }
    if (!phone.trim()) { showToast('Please enter your phone number.'); return; }

    setSending(true);

    let waMsg = `🙏 *New Enquiry – AasaiThambi Clay Works*\n\n`;
    waMsg += `👤 *Name:* ${name}\n`;
    waMsg += `📞 *Phone:* ${phone}\n`;
    if (email) waMsg += `📧 *Email:* ${email}\n`;
    if (size) waMsg += `📐 *Idol Size:* ${size}\n`;
    if (qty) waMsg += `🔢 *Quantity:* ${qty}\n`;
    if (message) waMsg += `💬 *Message:* ${message}\n`;
    waMsg += `\n_Sent from AasaiThambi website_`;

    const waURL = `https://wa.me/919676791734?text=${encodeURIComponent(waMsg)}`;
    window.open(waURL, '_blank');

    setSent(true);
    showToast(`🙏 Thank you, ${name}! WhatsApp opened — please press Send to complete your enquiry.`);
    setForm(initialState);

    setTimeout(() => {
      setSending(false);
      setSent(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section section-gap">
      <div className="container">
        <div className="section-header text-center mb-5">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Contact & Custom Orders</h2>
        </div>
        <div className="row g-5">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h4>AasaiThambi Clay Works</h4>
              <p className="text-muted">Reach us through any channel — we&apos;d love to help you bring your vision to life.</p>
              <div className="contact-detail">
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <strong>Workshop Address</strong>
                  <span>Bommala Quarters, Tirupathi, Andhra Pradesh – 533 221, India</span>
                </div>
              </div>
              <div className="contact-detail">
                <i className="fa-solid fa-phone-volume"></i>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <span>+91 9676791734</span>
                </div>
              </div>
              <div className="contact-detail">
                <i className="fa-solid fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <span>aasaithambi@clayworks.in</span>
                </div>
              </div>
              <div className="contact-detail">
                <i className="fa-solid fa-clock"></i>
                <div>
                  <strong>Working Hours</strong>
                  <span>24/7</span>
                </div>
              </div>
              <div className="social-icons mt-4 d-flex gap-3">
                <a href="#" className="social-icon" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="social-icon" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="social-icon" title="YouTube"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="social-icon" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h4>Send Us a Message</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Your Name *</label>
                  <input type="text" className="form-control custom-input" placeholder="Enter your name"
                    value={form.name} onChange={update('name')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number *</label>
                  <input type="tel" className="form-control custom-input" placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={update('phone')} />
                </div>
                <div className="col-12">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control custom-input" placeholder="you@example.com"
                    value={form.email} onChange={update('email')} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Idol Size Required</label>
                  <select className="form-control custom-input" value={form.size} onChange={update('size')}>
                    <option value="">Select Size</option>
                    {SIZE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control custom-input" placeholder="e.g. 1" min={1}
                    value={form.qty} onChange={update('qty')} />
                </div>
                <div className="col-12">
                  <label className="form-label">Message / Special Requirements</label>
                  <textarea className="form-control custom-input" rows={4}
                    placeholder="Describe your requirements, event date, delivery location..."
                    value={form.message} onChange={update('message')}></textarea>
                </div>
                <div className="col-12">
                  <button className="btn-primary-custom w-100" onClick={submitContact} disabled={sending}
                    style={sent ? { background: 'linear-gradient(135deg, #25d366, #128c7e)' } : undefined}>
                    {sending ? (
                      <><i className="fa-solid fa-spinner fa-spin me-2"></i> {sent ? 'Sent via WhatsApp!' : 'Opening WhatsApp...'}</>
                    ) : (
                      <><i className="fa-solid fa-paper-plane me-2"></i> Send Enquiry</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
