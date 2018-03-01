// @flow

import React from 'react';

const sectionStyle = {
    "width": "250px",
    "margin": "0 auto",
    "marginTop": "20px",
    "fontSize": "90%"
}

const ulStyle = {
    "listStyleType": "none",
    "margin": "0",
    "padding": "0"
}

const about = () => {
    return (
        <section style={sectionStyle}>
            <ul style={ulStyle}>
                <li>React</li>
                <li>Redux</li>
                <li>react-router</li>
                <li>reactstrap</li>
                <li>flow</li>
            </ul>
        </section>
    )
}

export default about;