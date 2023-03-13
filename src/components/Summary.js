import React from "react";

function Summary () {

    return (
        <div>
        <div>
            <h1>Summary </h1>
                <li>Reaction   80/100</li>
               <li>Memory     92/100</li> 
                <li>Verbal    61/100</li>
                <li>Virtual   72/100</li>
        </div>
        <div>
            <button className="bg-blue-200 underline "> Continue </button>
        </div>
        </div>
    )
}

export default Summary;