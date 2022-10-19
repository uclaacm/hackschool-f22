import React, { Component } from 'react'

export default function Plant({ species, age, name, image }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} className="img" width={200} height={300} />
            <h3>{species}</h3>
            <h3>Currently {age} year(s) old</h3>
        </div>
    )
}
