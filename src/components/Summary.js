import React from "react";

function Summary () {

    return (
        <div class="rounded-md bg-blue-400 text-center ">
        <div class="">
            <h1 className="font-bold text-2xl underline underline-offset-8 mt-4">Summary </h1>
               <div class="py-8 hover:italic">
                <li>Reaction   80/100</li>
               <li>Memory     92/100</li> 
                <li>Verbal    61/100</li>
                <li>Virtual   72/100</li>
                </div>
        </div>
        <div>
            <button type="submit" className="bg-blue-200 font-bold text-center px-5 py-2  rounded-md hover:bg-blue-800"> Continue </button>
        </div>
        </div>
    )
}

export default Summary;