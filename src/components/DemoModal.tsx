import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Recruitment Agency / Staffing Partner',
    volume: '200–500 resumes/month',
    preferredDate: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-forest-dark/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white border border-border rounded-3xl shadow-deep overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-forest px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BrandLogo variant="light" symbolOnly={true} />
            <div>
              <h3 className="text-lg font-bold text-white">Book a 20-Min Platform Demo</h3>
              <p className="text-xs text-sage-light">Tailored to your hiring pipeline & volume</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sage-light hover:text-white hover:bg-forest-surface transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-mint/30 text-forest mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-forest-deep">Demo Request Received</h4>
              <p className="text-xs sm:text-sm text-ink-muted max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || 'there'}</strong>. We have logged your request for <strong>{formData.company || 'your team'}</strong> ({formData.volume}).
              </p>
              <div className="p-4 bg-mist rounded-2xl border border-border text-xs text-left space-y-2">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Confirmed Work Email:</span>
                  <span className="font-semibold text-forest-deep">{formData.email || 'Provided Email'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Selected Segment:</span>
                  <span className="font-semibold text-forest-deep">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Preferred Timing:</span>
                  <span className="font-semibold text-forest-deep">{formData.preferredDate || 'Earliest available'}</span>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-[11px] text-ink-muted mb-4">
                  Need immediate access? Email us directly at{' '}
                  <a
                    href={`mailto:contact@cognihire.com?subject=CogniHire Demo Request - ${encodeURIComponent(
                      formData.company || 'New Partner'
                    )}&body=Hi CogniHire team,%0D%0A%0D%0AI would like to schedule a demo for ${encodeURIComponent(
                      formData.company
                    )} (${encodeURIComponent(formData.role)}).%0D%0AEmail: ${encodeURIComponent(
                      formData.email
                    )}%0D%0AVolume: ${encodeURIComponent(formData.volume)}`}
                    className="text-forest font-bold underline"
                  >
                    contact@cognihire.com
                  </a>
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-forest text-white font-semibold text-xs rounded-xl hover:bg-forest-hover transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-forest-deep">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-forest-deep">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-forest-deep">Company / Agency *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TalentFirst Partners"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-forest-deep">Organization Type</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle cursor-pointer"
                  >
                    <option>Recruitment Agency / Staffing Partner</option>
                    <option>In-House Corporate Talent Acquisition</option>
                    <option>Executive Search Firm</option>
                    <option>High-Growth Startup / Founder</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-forest-deep">Monthly Resume Volume</label>
                  <select
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle cursor-pointer"
                  >
                    <option>Under 100 resumes/month</option>
                    <option>100–300 resumes/month</option>
                    <option>300–800 resumes/month</option>
                    <option>800–2,500+ resumes/month</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-forest-deep">Preferred Date / Timing</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-white px-3.5 py-2.5 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle cursor-pointer"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-forest-deep">Hiring Roles or Specific Needs (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Ingesting 400 tech resumes/month for client mandates; need voice interview screening for senior roles..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white px-3.5 py-2 rounded-xl border border-border text-xs text-forest-deep focus:outline-none focus:ring-2 focus:ring-forest/20 shadow-subtle"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-forest text-white font-bold text-sm hover:bg-forest-hover active:bg-forest-dark transition-all shadow-elevated flex items-center justify-center gap-2 group"
                >
                  <span>Confirm Demo Request</span>
                  <ArrowRight className="w-4 h-4 text-mint group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <p className="text-[10px] text-center text-ink-muted">
                No credit card required. Sessions include a custom rubric setup and voice screening test.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
