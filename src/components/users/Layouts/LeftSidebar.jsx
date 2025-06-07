import React from 'react';


function LeftSidebar() {
    return (

        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                    <div className="brand-container">
                        <Link to="/" className="brand-link">
                            <span className="logo-container">
                                <span className="logo-icon"></span>
                            </span>
                            <span className="brand-text fw-bold ms-2">Materialize</span>
                        </Link>

                        <a href="javascript:void(0);" className="menu-toggle text-large ms-auto">
                            <span className="toggle-icon"></span>
                        </a>
                    </div>

                    <div className="menu-shadow"></div>

                    <ul className="menu-inner py-1">
                        <li className="menu-item active open">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <i className="menu-icon tf-icons mdi mdi-home-outline"></i>
                                <div data-i18n="Dashboards">Dashboards</div>
                            </a>                    
                        </li>

                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <i className="menu-icon tf-icons mdi mdi-window-maximize"></i>
                                <div data-i18n="Layouts">Layouts</div>
                            </a>                    
                        </li>

                        <li className="menu-item">
                            <a href="javascript:void(0);" className="menu-link menu-toggle">
                                <i className="menu-icon tf-icons mdi mdi-flip-to-front"></i>
                                <div data-i18n="Front Pages">Front Pages</div>
                            </a>
                        </li>

                        <li className="menu-header fw-medium mt-4">
                            <span className="menu-header-text" data-i18n="Apps & Pages">
                                Apps &amp; Pages
                            </span>
                        </li>

                        <li className="menu-item">
                            <Link to="/apps/email" className="menu-link">
                                <i className="menu-icon tf-icons mdi mdi-email-outline"></i>
                                <div data-i18n="Email">Email</div>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/apps/chat" className="menu-link">
                                <i className="menu-icon tf-icons mdi mdi-message-outline"></i>
                                <div data-i18n="Chat">Chat</div>
                            </Link>
                        </li>

                        <li className="menu-item">
                            <Link to="/apps/calendar" className="menu-link">
                                <i className="menu-icon tf-icons mdi mdi-calendar-blank-outline"></i>
                                <div data-i18n="Calendar">Calendar</div>
                            </Link>
                        </li>                
                    </ul>
                </aside>
            </div>
        </div>
        
    )
}

export default LeftSidebar;