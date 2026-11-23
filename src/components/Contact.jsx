import { useState } from 'react';
import Icon from './Icons';
import MagneticButton from './MagneticButton';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { profile } from '../data/portfolioData';

/**
 * Delivery modes (kept honest):
 *  - If VITE_FORM_ENDPOINT is set (e.g. a Formspree URL), the form POSTs there and
 *    only reports success when the service confirms it.
 *  - Otherwise it opens the visitor's email app with the message prefilled.
 *    Nothing is sent automatically, and the UI says so.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const EMPTY = { name: '', email: '', subject: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email address does not look valid.';
  if (values.subject.trim().length < 3) errors.subject = 'Please add a subject (at least 3 characters).';
  if (values.message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.';
  else if (values.message.length > 1000) errors.message = 'Please keep the message under 1000 characters.';
  return errors;
}

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', autoComplete: 'off' },
];

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ state: 'idle', text: '' });
  const [copied, setCopied] = useState(false);

  const errors = validate(values);
  const showError = (field) => touched[field] && errors[field];

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const current = validate(values);
    if (Object.keys(current).length) {
      setStatus({ state: 'error', text: 'Please fix the highlighted fields and try again.' });
      const first = Object.keys(current)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    if (ENDPOINT) {
      setStatus({ state: 'sending', text: 'Sending your message...' });
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus({ state: 'success', text: 'Thanks! Your message was sent.' });
        setValues(EMPTY);
        setTouched({});
      } catch {
        setStatus({
          state: 'error',
          text: `The message could not be sent. Please email me directly at ${profile.email}.`,
        });
      }
      return;
    }

    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus({
      state: 'info',
      text: 'Your email app should open with the message ready. Nothing is sent until you press Send there.',
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setStatus({ state: 'info', text: `Copy failed. My email is ${profile.email}.` });
    }
  };

  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          id="contact-title"
          title={
            <>
              Let's <span className="text-gradient">work together.</span>
            </>
          }
          intro="Have a question, an opportunity or a project in mind? The quickest way to reach me is by email or LinkedIn."
        />

        <div className="contact__grid">
          <Reveal className="contact__links">
            <div className="contact-card spot">
              <span className="contact-card__icon">
                <Icon name="mail" size={20} />
              </span>
              <div className="contact-card__body">
                <p className="contact-card__label">Email</p>
                <a href={`mailto:${profile.email}`} className="contact-card__value">
                  {profile.email}
                </a>
              </div>
              <button type="button" className="icon-btn icon-btn--sm" onClick={copyEmail} aria-label="Copy email address">
                <Icon name={copied ? 'check' : 'copy'} size={16} />
              </button>
              <span className="sr-only" role="status">
                {copied ? 'Email address copied' : ''}
              </span>
            </div>

            <a className="contact-card spot" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="contact-card__icon">
                <Icon name="linkedin" size={20} />
              </span>
              <div className="contact-card__body">
                <p className="contact-card__label">LinkedIn</p>
                <p className="contact-card__value">kamali-murugesan</p>
              </div>
              <Icon name="external" size={16} className="contact-card__arrow" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            <a className="contact-card spot" href={profile.github} target="_blank" rel="noopener noreferrer">
              <span className="contact-card__icon">
                <Icon name="github" size={20} />
              </span>
              <div className="contact-card__body">
                <p className="contact-card__label">GitHub</p>
                <p className="contact-card__value">Kamalimurugesan12</p>
              </div>
              <Icon name="external" size={16} className="contact-card__arrow" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <form className="form gradient-border" onSubmit={onSubmit} noValidate aria-label="Contact form">
              <div className="form__row">
                {FIELDS.slice(0, 2).map((f) => (
                  <Field key={f.name} field={f} values={values} error={showError(f.name)} onChange={onChange} onBlur={onBlur} />
                ))}
              </div>
              <Field field={FIELDS[2]} values={values} error={showError('subject')} onChange={onChange} onBlur={onBlur} />

              <div className={`field ${showError('message') ? 'has-error' : ''}`}>
                <label htmlFor="field-message">Message</label>
                <textarea
                  id="field-message"
                  name="message"
                  rows="5"
                  maxLength={1200}
                  value={values.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  aria-invalid={Boolean(showError('message'))}
                  aria-describedby={showError('message') ? 'error-message' : undefined}
                  required
                />
                <div className="field__foot">
                  <span id="error-message" className="field__error" role="alert">
                    {showError('message') || ''}
                  </span>
                  <span className="field__count mono">{values.message.length}/1000</span>
                </div>
              </div>

              <div className="form__footer">
                <MagneticButton type="submit" strength={0.15} disabled={status.state === 'sending'}>
                  {status.state === 'sending' ? 'Sending...' : ENDPOINT ? 'Send message' : 'Compose email'}
                  <Icon name="send" size={18} />
                </MagneticButton>
                <p className={`form__status form__status--${status.state}`} role="status" aria-live="polite">
                  {status.text}
                </p>
              </div>
              {!ENDPOINT ? (
                <p className="form__note">
                  This form opens your email app with everything filled in. No messages are stored on this site.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ field, values, error, onChange, onBlur }) {
  const id = `field-${field.name}`;
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{field.label}</label>
      <input
        id={id}
        name={field.name}
        type={field.type}
        autoComplete={field.autoComplete}
        value={values[field.name]}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `error-${field.name}` : undefined}
        required
      />
      <div className="field__foot">
        <span id={`error-${field.name}`} className="field__error" role="alert">
          {error || ''}
        </span>
      </div>
    </div>
  );
}
