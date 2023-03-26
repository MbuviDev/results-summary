import React from "react";

function Summary () {

    return (
        <div class="rounded bg-blue-400">
        <div>
            <h1 className="font-bold text-2xl">Summary </h1>
                <li>Reaction   80/100</li>
               <li>Memory     92/100</li> 
                <li>Verbal    61/100</li>
                <li>Virtual   72/100</li>
        </div>
        <div>
            <button className="bg-blue-200 font-bold text-center px-5 py-2 rounded-md"> Continue </button>
        </div>
        </div>
    )
}

export default Summary;