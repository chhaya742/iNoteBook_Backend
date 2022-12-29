import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div style={{display: "flex", height: "100vh"}}>
            <div className="sc-fvEvSO jXkqrm pro-sidebar">
                <div className="sc-fcCDlF gweCKE">
                    <div className="sc-GKYbw dKAmWg">
                        <div className="sc-bWOGAC jKDjrc">
                            <div className="head-div">
                                <span className="head-text">
                                <Link  to="/" className="text-decoration-none" style={{color: "inherit"}}>Sidebar</Link>
                                  
                                </span>
                                <span className="icon-suffix">
                                    <i className="fa fa-bars fa-large"></i>
                                </span>
                            </div>
                        </div>
                        <div className="sc-gsGlKL cLrvsF pro-sidebar-content sidebar-content">
                            <nav className="sc-eGugkK jiwJnY pro-menu">
                                <ul className="sc-csDkEv eAcaWT">
                                <Link  to="/" activeClassName="activeClicked" firstchild="1" popperarrow="0" className="">
                                  
                                        <li className="sc-brePNt dlWkwb">
                                            <div className="sc-dEVLtI kAodil" tabindex="0" role="button">
                                                <i data-test="fa" className="sc-gJqSRm czPzuC fa fa-columns fa-md side-icon"></i>
                                                <span className="item-content">Dashboard</span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link  to="/tables" activeClassName="activeClicked" firstchild="1" popperarrow="0" className="">
                                  
                                        <li className="sc-brePNt dlWkwb">
                                            <div className="sc-dEVLtI kAodil" tabindex="0" role="button">
                                                <i data-test="fa" className="sc-gJqSRm czPzuC fa fa-table fa-md side-icon"> </i>
                                                <span className="item-content">Tables</span>
                                            </div>
                                        </li>
                                    </Link>
                                    <Link  to="/profile" activeClassName="activeClicked" firstchild="1" popperarrow="0" className="">
                                        <li className="sc-brePNt dlWkwb">
                                            <div className="sc-dEVLtI kAodil" tabindex="0" role="button">
                                                <i data-test="fa" className="sc-gJqSRm czPzuC fa fa-user fa-md side-icon"></i>
                                                <span className="item-content">Profile page</span>
                                            </div>
                                        </li>
                                        </Link>
                                        <Link  to="/analytic" activeClassName="activeClicked" firstchild="1" popperarrow="0" className="">
                                        <li className="sc-brePNt dlWkwb">
                                            <div className="sc-dEVLtI kAodil" tabindex="0" role="button">
                                                <i data-test="fa" className="sc-gJqSRm czPzuC fa fa-chart-line fa-md side-icon"></i>
                                                <span className="item-content">Analytics</span>
                                            </div>
                                        </li>
                                        </Link>
                                        <Link  to="/_black" activeClassName="activeClicked" firstchild="1" popperarrow="0" className="">
                                        <li className="sc-brePNt dlWkwb">
                                            <div className="sc-dEVLtI kAodil" tabindex="0" role="button">
                                                <i data-test="fa" className="sc-gJqSRm czPzuC fa fa-exclamation-circle fa-md side-icon"></i>
                                                <span className="item-content">404 page</span>
                                            </div>
                                        </li>
                                        </Link>
                                </ul>
                            </nav>
                        </div>
                        <div className="pro-sidebar-footer" style={{textAlign: "center"}}>
                            <div style={{padding: "20px 5px"}}>Sidebar Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideBar