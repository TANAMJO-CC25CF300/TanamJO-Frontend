import React from 'react';


function Header() {
    return (
        
        <div className="layout-page">
           
            <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i className="mdi mdi-menu mdi-24px"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item navbar-search-wrapper mb-0">
                            <a className="nav-item nav-link search-toggler fw-normal px-0" href="javascript:void(0);">
                                <i className="mdi mdi-magnify mdi-24px scaleX-n1-rtl"></i>
                                <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                            </a>
                        </div>
                    </div>

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item dropdown-language dropdown me-1 me-xl-0">
                            <a className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i className="mdi mdi-translate mdi-24px"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="en" data-text-direction="ltr">
                                        <span className="align-middle">English</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="fr" data-text-direction="ltr">
                                        <span className="align-middle">French</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="ar" data-text-direction="rtl">
                                        <span className="align-middle">Arabic</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="de" data-text-direction="ltr">
                                        <span className="align-middle">German</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown-style-switcher dropdown me-1 me-xl-0">
                            <a className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <i className="mdi mdi-24px"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-theme="light">
                                        <span className="align-middle"><i className="mdi mdi-weather-sunny me-2"></i>Light</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
                                        <span className="align-middle"><i className="mdi mdi-weather-night me-2"></i>Dark</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-theme="system">
                                        <span className="align-middle"><i className="mdi mdi-monitor me-2"></i>System</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-1 me-xl-0">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <i className="mdi mdi-view-grid-plus-outline mdi-24px"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end py-0">
                                <div className="dropdown-menu-header border-bottom">
                                <div className="dropdown-header d-flex align-items-center py-3">
                                    <h5 className="text-body mb-0 me-auto">Shortcuts</h5>
                                    <a
                                    href="javascript:void(0)"
                                    className="dropdown-shortcuts-add text-muted"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Add shortcuts"
                                    >
                                    <i className="mdi mdi-view-grid-plus-outline mdi-24px"></i>
                                    </a>
                                </div>
                                </div>
                                <div className="dropdown-shortcuts-list scrollable-container">
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-calendar fs-4"></i>
                                            </span>
                                            <a href="app-calendar.html" className="stretched-link">Calendar</a>
                                            <small className="text-muted mb-0">Appointments</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-file-document-outline fs-4"></i>
                                            </span>
                                            <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                                            <small className="text-muted mb-0">Manage Accounts</small>
                                        </div>
                                    </div>

                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-account-outline fs-4"></i>
                                            </span>
                                            <a href="app-user-list.html" className="stretched-link">User App</a>
                                            <small className="text-muted mb-0">Manage Users</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-shield-check-outline fs-4"></i>
                                            </span>
                                            <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                                            <small className="text-muted mb-0">Permission</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-chart-pie-outline fs-4"></i>
                                            </span>
                                            <a href="index.html" className="stretched-link">Dashboard</a>
                                            <small className="text-muted mb-0">Analytics</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-cog-outline fs-4"></i>
                                            </span>
                                            <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                                            <small className="text-muted mb-0">Account Settings</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-help-circle-outline fs-4"></i>
                                            </span>
                                            <a href="pages-faq.html" className="stretched-link">FAQs</a>
                                            <small className="text-muted mb-0">FAQs & Articles</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                                                <i className="mdi mdi-dock-window fs-4"></i>
                                            </span>
                                            <a href="modal-examples.html" className="stretched-link">Modals</a>
                                            <small className="text-muted mb-0">Useful Popups</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                
                </div>
            </nav>
        
        </div>
    )
}

export default Header;