import "../Collapse/collapse.css"
import { useState } from "react"
import React from "react"

function Collapse({ h1Content , descriptionContent, classNameAdapt}) {

    const [Content, setContent] = useState(false)

    function toggleClick() {
        setContent(!Content)
    }

    return (
        <div className="collapse-surcontainer">
            <div className={`collapse-container`}>
                <h1>{h1Content}</h1>
                <i onClick={toggleClick} className={`fa-solid ${Content ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </div>
            <div className={`collapse-content ${Content ? 'open-content' : 'closed-content'}`}>
                {descriptionContent}
            </div>
        </div>
    )
}

export default Collapse