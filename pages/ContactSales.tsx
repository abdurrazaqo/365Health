import React from 'react';
import { Link } from '../router';

const ContactSales: React.FC = () => {
  return (
    <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 px-6 md:px-12 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">
            Contact Sales
          </h1>
          <p className="text-dark-text/60 text-base md:text-lg">
            Get in touch with our team to discuss Enterprise solutions
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark-text mb-1">Email Us</h3>
                  <a href="mailto:hello@365health.online" className="text-primary hover:text-secondary text-sm">
                    hello@365health.online
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark-text mb-1">Response Time</h3>
                  <p className="text-dark-text/60 text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-bold text-dark-text mb-4">What to Include</h3>
              <ul className="space-y-2 text-dark-text/60 text-sm">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Number of pharmacy branches
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Expected number of users
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Any specific integration requirements
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                  Preferred implementation timeline
                </li>
              </ul>
            </div>

            <div className="flex justify-center pt-4">
              <a 
                href="mailto:hello@365health.online?subject=Enterprise%20Plan%20Inquiry"
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-secondary transition-all no-underline text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSales;
