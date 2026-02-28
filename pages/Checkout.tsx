import React, { useEffect, useState } from 'react';
import { Link } from '../router';

const Checkout: React.FC = () => {
  const [plan, setPlan] = useState<string>('');
  const [product, setProduct] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setPlan(params.get('plan') || '');
    setProduct(params.get('product') || '');
  }, []);

  return (
    <section className="pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-24 lg:pb-32 px-6 md:px-12 lg:px-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">
            Checkout
          </h1>
          <p className="text-dark-text/60 text-base md:text-lg">
            Complete your subscription to {product === 'pharmacore' ? 'PharmaCore' : 'our service'}
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-dark-text mb-2">Selected Plan</h2>
              <p className="text-dark-text/60 capitalize">{plan} Plan</p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <p className="text-dark-text/60 text-sm leading-relaxed">
                This is a placeholder checkout page. Integration with Paystack payment gateway will be implemented here.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <button 
                className="px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-secondary transition-all"
                disabled
              >
                Proceed to Payment (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
