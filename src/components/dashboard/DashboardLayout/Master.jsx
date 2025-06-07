import React, { useEffect } from "react";

function Master() {
  useEffect(() => {
    // Add fonts
    const fontLinks = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" }
    ];

    // Add CSS links
    const cssLinks = [
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/fonts/flag-icons.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/libs/node-waves/node-waves.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/css/rtl/core.css", className: "template-customizer-core-css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/css/rtl/theme-default.css", className: "template-customizer-theme-css" },
      { rel: "stylesheet", href: "../../../styles/assets/css/demo.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/libs/typeahead-js/typeahead.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/libs/apex-charts/apex-charts.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/libs/swiper/swiper.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/css/pages/cards-statistics.css" },
      { rel: "stylesheet", href: "../../../styles/assets/vendor/css/pages/cards-analytics.css" }
    ];

    const scriptLinks = [
      { src: "../../../styles/assets/vendor/libs/jquery/jquery.js" },
      { src: "../../../styles/assets/vendor/libs/popper/popper.js" },
      { src: "../../../styles/assets/vendor/js/bootstrap.js" },
      { src: "../../../styles/assets/vendor/libs/node-waves/node-waves.js" },
      { src: "../../../styles/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js" },
      { src: "../../../styles/assets/vendor/libs/hammer/hammer.js" },
      { src: "../../../styles/assets/vendor/libs/i18n/i18n.js" },
      { src: "../../../styles/assets/vendor/libs/typeahead-js/typeahead.js" },
      { src: "../../../styles/assets/vendor/js/menu.js" },
      { src: "../../../styles/assets/vendor/libs/apex-charts/apexcharts.js" },
      { src: "../../../styles/assets/vendor/libs/swiper/swiper.js" },
      { src: "../../../styles/assets/js/main.js" },
      { src: "../../../styles/assets/js/dashboards-analytics.js" },
      { src: "../../../styles/assets/vendor/js/helpers.js" },
      { src: "../../../styles/assets/vendor/js/template-customizer.js" },
      { src: "../../../styles/assets/js/config.js" }
    ];

    const addLinksToHead = (links) => {
      links.forEach(link => {
        const linkElement = document.createElement(link.rel ? 'link' : 'script');
        Object.entries(link).forEach(([key, value]) => {
          linkElement[key] = value;
        });
        document.head.appendChild(linkElement);
      });
    };

    addLinksToHead(fontLinks);
    addLinksToHead(cssLinks);
    addLinksToHead(scriptLinks);

    return () => {
      const addedLinks = document.querySelectorAll('link[href*="assets"], script[src*="assets"]');
      addedLinks.forEach(link => link.remove());
    };
  }, []);

  return (
    <div>
      
    </div>  
  );
}

export default Master;