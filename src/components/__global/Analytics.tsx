import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Delay analytics loading to prioritize main content
    const timer = setTimeout(() => {
      // 1. Google Tag Manager (gtag.js)
      const gtmScript = document.createElement('script');
      gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-M2KXWZ9272';
      gtmScript.async = true;
      document.head.appendChild(gtmScript);

      const gtmInlineScript = document.createElement('script');
      gtmInlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-M2KXWZ9272', {
          'cookie_domain': 'puigadai.co.id',
          'cookie_flags': 'SameSite=None;Secure'
        });
      `;
      document.head.appendChild(gtmInlineScript);

      // 2. Facebook Pixel
      const fbScript = document.createElement('script');
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1669965257655878');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default Analytics;
