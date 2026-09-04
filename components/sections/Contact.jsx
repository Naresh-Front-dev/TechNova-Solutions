"use client";

import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validateField(name, value) {
  const cleanValue = value.trim();

  if (!cleanValue) {
    const labels = {
      name: "Name",
      email: "Email",
      phone: "Phone number",
      message: "Message",
    };
    return `${labels[name]} is required.`;
  }

  if (name === "name" && cleanValue.length < 2) {
    return "Name must be at least 2 characters";
  }

  if (name === "name" && !/^[A-Za-z\s]+$/.test(cleanValue)) {
    return "Name can only contain letters and spaces";
  }

  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanValue)) {
    return "Please enter a valid email address.";
  }

  if (name === "phone") {
    const digits = cleanValue.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      return "Please enter a valid phone number.";
    }
  }

  if (name === "message" && cleanValue.length < 10) {
    return "Message must be at least 10 characters.";
  }

  return "";
}

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setIsSubmitted(false);

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = Object.keys(formData).reduce((result, field) => {
      const error = validateField(field, formData[field]);
      if (error) result[field] = error;
      return result;
    }, {});

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="bg-surface py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[84rem] px-5 sm:px-8">
        <div className="grid border-y border-line lg:grid-cols-[0.68fr_1.32fr]">
          <motion.div
            className="py-10 lg:pr-14 lg:py-14"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand-500 uppercase">
              <span className="h-px w-7 bg-current" aria-hidden="true" />
              Start a conversation
            </p>
            <h2 className="mt-5 max-w-sm text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-ink-950 sm:text-4xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted">
              Have a product idea or technology challenge? Tell us what you&apos;re
              working on and our team will get in touch.
            </p>

            <ul className="mt-10 border-t border-line text-sm">
              <li className="grid grid-cols-[1.5rem_1fr] gap-3 border-b border-line py-4">
                <Mail size={17} className="mt-0.5 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href="mailto:hello@technovasolutions.com" className="mt-1 block font-medium hover:text-brand-500">
                    hello@technovasolutions.com
                  </a>
                </div>
              </li>
              <li className="grid grid-cols-[1.5rem_1fr] gap-3 border-b border-line py-4">
                <Phone size={17} className="mt-0.5 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <a href="tel:+919876543210" className="mt-1 block font-medium hover:text-brand-500">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="grid grid-cols-[1.5rem_1fr] gap-3 py-4">
                <MapPin size={17} className="mt-0.5 text-brand-500" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="mt-1 font-medium">Bengaluru, India</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.form
            className="border-t border-line py-10 lg:border-t-0 lg:border-l lg:py-14 lg:pl-14"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xl font-medium text-ink-950">Tell us about your project</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Share a few details. All fields are required.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <FormField
                label="Name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                error={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="name"
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                error={errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                error={errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="tel"
              />
              <div className="hidden sm:block" aria-hidden="true" />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-ink-950">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  placeholder="Tell us a little about your project"
                  className="field-control mt-2 resize-y"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-brand-500 sm:w-auto"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            >
              Send message <ArrowRight size={17} aria-hidden="true" />
            </motion.button>

            {isSubmitted && (
              <p
                className="mt-5 flex items-start gap-2 border-l-2 border-brand-500 bg-brand-50 p-4 text-sm font-medium text-brand-600"
                role="status"
              >
                <CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
                Thank you! Your message has been submitted successfully.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, error, ...inputProps }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="field-control mt-2"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...inputProps}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
