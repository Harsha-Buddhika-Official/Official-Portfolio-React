import React, { useState, useRef, useEffect } from "react";
import Eastern from '../components/images/logo/UniLogo.png';

function Education(){
    return(
        <>
            <div className="font-extrabold flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4 text-center w-full"> Education </h1>

                <div className="bg-gray-800 flex md:flex-row flex-col items-center gap-x-3 p-4 rounded-2xl">
                    <img src={Eastern} alt="Logo png" className="invert brightness-0 w-[100px] h-[100px]"/>
                    <div className="flex flex-row md:flex:row">
                        <h2 className="text-left">Eastern University of Sri Lanka</h2>
                        <div className="flex items-center">
                            {/* Calendar Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                            <h3>2024-2027</h3>
                        </div>
                        <h4>Bachelor of Computer Science</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Education