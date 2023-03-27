import React from "react";

function Results () {
    return (
    <div class="bg-white rounded-md text-center">
        <div class="">
        <h1 className="font-mono text-2xl font-bold underline underline-offset-8 mt-4  "> Your Result</h1>
         <div class="  mt-2 mb-2 relative absolute left-80 rounded-full bg-sky-200 w-24 h-24 p-2">
             <p className="text-3xl font-bold mt-4" >76 </p>
             <p>of 100</p>
        </div> 
        <p className="text-2xl font-bold">Great</p>
        <p> You scored higher than 65% of the people who have taken this test</p>
    </div>
    </div>
    )
}
export default Results;