import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/About">{props.about}</Link>
                    </li> */}

                </ul>
            
                <div className={`form-check form-switch mx-3 text-${props.mode==='light'?"dark":"light"}`}>
                    <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckChecked"/>
                    <label className="form-check-label "  htmlFor="flexSwitchCheckChecked">Mode</label>
                </div>
                <div className={`form-check form-switch mx-3 text-${props.mode==='light'?"dark":"light"}`}>
                    <input className="form-check-input" onClick={props.darkmode2} type="checkbox" id="flexSwitchCheckChecked2"/>
                    <label className="form-check-label "  htmlFor="flexSwitchCheckChecked">Mode</label>
                </div>
                <div className={`form-check form-switch mx-3 text-${props.mode==='light'?"dark":"light"}`}>
                    <input className="form-check-input" onClick={props.darkmode3} type="checkbox" id="flexSwitchCheckChecked3"/>
                    <label className="form-check-label "  htmlFor="flexSwitchCheckChecked">Mode</label>
                </div>
            </div>
        </nav>

    );
}

Navbar.propType = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: "set title here",
    about: "about text here"
}
