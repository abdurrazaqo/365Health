import React, { useState, useEffect } from 'react';

export interface Route {
  path: string;
  component: React.ComponentType;
  title?: string;
  description?: string;
}

interface RouterProps {
  routes: Route[];
  notFound?: React.ComponentType;
}

export const Router: React.FC<RouterProps> = ({ routes, notFound: NotFound }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const route = routes.find(r => r.path === currentPath);
    if (route?.title) {
      document.title = route.title;
    }
    if (route?.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', route.description);
    }
  }, [currentPath, routes]);

  const route = routes.find(r => r.path === currentPath);
  
  if (!route) {
    return NotFound ? <NotFound /> : <div>404 - Page Not Found</div>;
  }

  const Component = route.component;
  return <Component />;
};

export const navigate = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const Link: React.FC<{ 
  to: string; 
  children: React.ReactNode;
  className?: string;
}> = ({ to, children, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};
