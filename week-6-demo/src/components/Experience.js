import React, { Component } from 'react'
import './Experience.css';

function Experience({ name, start, end, title, description }) {
    return (
        <div className="container">
            <div className="heading">
                <h2>{name}</h2>
                <div>
                    <p className="subtitle">{start} - {end}</p>
                    <p className="subtitle">{title}</p>
                </div>
            </div>
            <p className="description">{description}</p>
        </div>
    )
}

export default Experience;