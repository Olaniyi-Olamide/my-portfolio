import React from "react";
import { Mail } from "lucide-react";

export function ContactForm() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const user = "olamideolaniyi616";
    const domain = "gmail.com";
    const subject = encodeURIComponent("Project Inquiry");

    window.location.href = `mailto:${user}@${domain}?subject=${subject}`;
  };

  return (
    <div
      className="flex items-center justify-center  bg-[#0a0a0a] rounded-none border border-primary/10 p-6 sm:p-10 backdrop-blur-md lg:w-[60%]"
      id="contact-inner-grid"
    >
      <div className="">
        <h3 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
          Let's forge something meaningful together.
        </h3>
        <p className="font-sans text-md text-accent leading-relaxed mb-6 font-light">
          Whether you want to talk about a potential project or ask a question,
          my inbox is always open.
        </p>
        <button className="w-full flex gap-3 items-center justify-center rounded-full px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-all duration-300 pointer-events-auto">
          <Mail />
          <a href="#" onClick={handleEmailClick} id="btn-email">
            Send me an Email
          </a>
        </button>
      </div>
    </div>
  );
}
