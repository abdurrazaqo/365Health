
import React from 'react';
import { Product } from '../types';
import { Link } from '../router';

const products: Product[] = [
  {
    id: 'pharmacy',
    number: '01',
    name: 'PharmaCore',
    description: 'Cloud-based pharmacy management SaaS with inventory tracking, POS billing, multi-branch support, and role-based access control.',
    image: '/images/products/365pharmacore.svg',
    isComingSoon: true,
    reverseLayout: true,
    features: [
      { icon: 'inventory_2', title: 'Inventory & Expiry Tracking', description: 'Real-time stock monitoring with automated expiry alerts and reorder management.' },
      { icon: 'point_of_sale', title: 'POS & Billing System', description: 'Fast, accurate billing with real-time sales dashboard and analytics.' },
      { icon: 'account_tree', title: 'Multi-Branch & Role Management', description: 'Centralized control with secure role-based access for multiple locations.' },
    ]
  },
  {
    id: 'connect',
    number: '02',
    name: 'my365Pharmacy',
    description: 'Online pharmacy aggregator connecting patients with verified pharmacies for seamless medication access.',
    image: '/images/products/my365pharmacy.svg',
    isComingSoon: true,
    icon: 'local_pharmacy',
    features: [
      { icon: 'search', title: 'Pharmacy Discovery', description: 'Find and compare verified pharmacies near you with real-time availability.' },
      { icon: 'shopping_cart', title: 'Easy Ordering', description: 'Order medications online and choose delivery or pickup options.' },
      { icon: 'verified', title: 'Verified Network', description: 'Access only licensed and verified pharmacies for your safety.' },
    ]
  },
  {
    id: 'insight',
    number: '03',
    name: '365Insight',
    description: 'Unlock hidden operational efficiencies with our Healthcare Analytics Platform.',
    image: '/images/products/365insight.svg',
    isComingSoon: true,
    reverseLayout: true,
    icon: 'monitoring',
    features: [
      { icon: 'dashboard', title: 'Real-time Dashboards', description: 'Live operational data visualization for immediate decision making.' },
      { icon: 'leaderboard', title: 'KPIs & Operational Reports', description: 'Deep dive into clinical outcomes and financial performance.' },
      { icon: 'bubble_chart', title: 'Data Visualization', description: 'Turn complex datasets into actionable visual insights for teams.' },
    ]
  }
];

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const isFirstProduct = product.id === 'pharmacy';
  
  const content = (
    <div className="space-y-4 md:space-y-6">
      <div className="text-primary font-bold text-xs tracking-[0.2em] uppercase">
        Product {product.number}
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-dark-text tracking-tight">
        {product.name}
      </h2>
      <p className="text-base md:text-lg text-dark-text/60 leading-relaxed max-w-md">
        {product.description}
      </p>
      <div className="space-y-4 md:space-y-6 pt-2 md:pt-4">
        {product.features.map((f, i) => (
          <div key={i} className="flex gap-4 md:gap-5 group">
            <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center rounded-lg bg-primary/5 text-primary material-symbols-outlined transition-colors group-hover:bg-primary group-hover:text-white text-xl md:text-2xl">
              {f.icon}
            </div>
            <div>
              <h4 className="font-bold text-dark-text text-sm md:text-base">{f.title}</h4>
              <p className="text-xs md:text-sm text-dark-text/40 mt-0.5 leading-snug">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
      {isFirstProduct && (
        <div className="pt-4">
          <Link 
            to="/products/pharmacore" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-secondary transition-all no-underline"
          >
            Learn More
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      )}
    </div>
  );

  const visual = (
    <div className="relative">
      {product.image ? (
        <div className="relative rounded-[2rem] product-shadow overflow-hidden bg-white p-2 border border-gray-100 aspect-video">
           <img 
            className="w-full h-full object-cover rounded-[1.5rem]" 
            src={product.image} 
            alt={product.name}
          />
          {product.isComingSoon && (
            <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
              Coming Soon
            </div>
          )}
        </div>
      ) : (
        <div className="relative rounded-[2rem] product-shadow bg-gray-50 w-full aspect-video flex items-center justify-center overflow-hidden border border-gray-100">
          <span className="material-symbols-outlined text-[120px] text-primary/10 transition-transform group-hover:scale-110 duration-700">
            {product.icon}
          </span>
          {product.isComingSoon && (
            <div className="absolute top-8 right-8 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
              Coming Soon
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div id={product.id} className={`${isFirstProduct ? '' : 'sticky top-20'} grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-lg group`} style={{marginBottom: '2rem'}}>
      <div className={`order-2 ${product.reverseLayout ? 'lg:order-1' : 'lg:order-2'}`}>
        {visual}
      </div>
      <div className={`order-1 ${product.reverseLayout ? 'lg:order-2' : 'lg:order-1'}`}>
        {content}
      </div>
    </div>
  );
};

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-dark-text">Our Products</h2>
          <p className="text-dark-text/60 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive solutions for modern healthcare operations
          </p>
        </div>
        <div className="space-y-0">
          {products.map((p, index) => (
            <ProductItem key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
