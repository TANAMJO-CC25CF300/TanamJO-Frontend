import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import Dashboard from '../Dashboard';

function MasterUsers() {
    return (
        <>
            <Helmet>

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

                {/* Icons */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="/assets/vendor/fonts/flag-icons.css" />

                {/* Core CSS */}
                <link rel="stylesheet" href="/assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
                <link rel="stylesheet" href="/assets/vendor/css/rtl/theme-default.css" className="template-customizer-theme-css" />
                <link rel="stylesheet" href="/assets/css/demo.css" />

                {/* Vendor CSS */}
                <link rel="stylesheet" href="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
                <link rel="stylesheet" href="/assets/vendor/libs/typeahead-js/typeahead.css" />
                <link rel="stylesheet" href="/assets/vendor/libs/apex-charts/apex-charts.css" />
                <link rel="stylesheet" href="/assets/vendor/libs/swiper/swiper.css" />

                {/* Helpers */}
                <script src="/assets/vendor/js/helpers.js"></script>
                <script src="/assets/vendor/js/template-customizer.js"></script>
                <script src="/assets/js/config.js"></script>

                {/* Core Js */}
                <script src="/assets/vendor/libs/jquery/jquery.js"></script>
                <script src="/assets/vendor/libs/popper/popper.js"></script>
                <script src="/assets/vendor/js/bootstrap.js"></script>
                <script src="/assets/vendor/libs/node-waves/node-waves.js"></script>
                <script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
                <script src="/assets/vendor/libs/hammer/hammer.js"></script>
                <script src="/assets/vendor/libs/i18n/i18n.js"></script>
                <script src="/assets/vendor/libs/typeahead-js/typeahead.js"></script>
                <script src="/assets/vendor/js/menu.js"></script>

                {/* Vendors JS */}
                <script src="/assets/vendor/libs/apex-charts/apexcharts.js"></script>
                <script src="/assets/vendor/libs/swiper/swiper.js"></script>

                {/* Main JS */}
                <script src="/assets/js/main.js"></script>

                {/* Page JS */}
                <script src="/assets/js/dashboards-analytics.js"></script>
                
            </Helmet>

            <Header />
            
            <div style={{ display: 'flex' }}>
                <LeftSidebar />
                <Dashboard />
            </div>
        </>
    )
}

export default MasterUsers; 