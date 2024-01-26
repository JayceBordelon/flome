import React from 'react';
import { FOOTER } from '../data/footer';

export default function Footer() {
  return (
    <footer className="bg-dark-background text-white p-4">
      <div className="container mx-auto text-center">
        {/* Contact Section */}
        <div className="mb-4">
          <a href={`mailto:${FOOTER.contact.email.value}`} className="flex justify-center items-center gap-2">
            {FOOTER.contact.email.icon}
            <span>{FOOTER.contact.email.value}</span>
          </a>
        </div>

        {/* Disclaimer Section */}
        <div className="text-xs">
          <p>{FOOTER.contact.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
