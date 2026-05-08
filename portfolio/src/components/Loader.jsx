import React from "react";

const Loader = ({ progress, fadeOut }) => {
    return (
        <div
            className={`fixed inset-0 bg-white flex font-mono items-center justify-center z-50 transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"
                }`}
        >
            <div className="flex flex-col items-center">
                <h1 className="md:text-7xl text-5xl font-bold">
                    {progress}%
                </h1>

            </div>
        </div>
    );
};

export default Loader;