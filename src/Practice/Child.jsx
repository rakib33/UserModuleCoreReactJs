import React from "react"

export default function Child({parentToChild}) {
    return (
        <div>
        <h1>{parentToChild}</h1>
        </div>
    )
}