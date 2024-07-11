import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const element = <FontAwesomeIcon icon={faGlobeAmericas} size='24px' />
    return (
        <>
            <div className="header--container">
                {element}my travel journal.
            </div>
        </>
    )
}