import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { name, email, subject, message } = formData;

  const handleChangeInput = (event) => {
    const { name: fieldName, value } = event.target;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please add your name, email, and a message.");
      return;
    }

    setError("");
    setIsLoading(true);

    const body = new FormData();
    body.append("name", name.trim());
    body.append("email", email.trim());
    body.append("subject", subject.trim() || "Portfolio inquiry");
    body.append("message", message.trim());
    body.append("access_key", process.env.REACT_APP_API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });
      const data = await response.json();
      if (data.success) {
        setIsFormSubmitted(true);
      } else {
        setError("The message did not send. Try again, or email me directly.");
      }
    } catch {
      setError("The message did not send. Try again, or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="cta-card rv">
          <span className="eyebrow">Contact</span>
          <h2>
            Let's build something <span className="grad">great together</span>
          </h2>
          <p>
            Grab a coffee and tell me about your project. I usually reply
            within a day.
          </p>
          <div className="contact-row">
            <a className="ci" href="mailto:mianhassan155156@gmail.com">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>
                <small>Email</small>
                <b>mianhassan155156@gmail.com</b>
              </span>
            </a>
            <a className="ci" href="tel:+923095899751">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              <span>
                <small>Phone / WhatsApp</small>
                <b>+92 309 5899751</b>
              </span>
            </a>
          </div>
          {isFormSubmitted ? (
            <p className="form-success" role="status">
              Thank you. Your message is on its way, and I will reply soon.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={name}
                  onChange={handleChangeInput}
                  autoComplete="name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={handleChangeInput}
                  autoComplete="email"
                  required
                />
              </label>
              <label className="full">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="Project, plugin, or a question"
                  value={subject}
                  onChange={handleChangeInput}
                />
              </label>
              <label className="full">
                Message
                <textarea
                  name="message"
                  placeholder="Tell me what you want to build"
                  value={message}
                  onChange={handleChangeInput}
                  required
                />
              </label>
              {error ? (
                <p className="form-error full" role="alert">
                  {error}
                </p>
              ) : null}
              <button
                className="btn btn-primary full"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending message" : "Send message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
