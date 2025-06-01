import React from "react";

export const InputField = ({ children }) => {
    return (
        <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="ENTER ROOM NUMBER"
            className="w-full px-4 py-2 rounded-md border-2 border-[#01204E] shadow-[3px_3px_0_#01204E] text-[#01204E] placeholder-[#d1d1d1] font-gameplay text-sm focus:outline-none focus:ring-2 focus:ring-[#57adff]"
            />   
        );  

    }