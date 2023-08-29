import React from "react";

const Error = ({ message }) => {
  return (
    <div className="bg-red-600 p-3 mb-2">
      <p className="text-lg text-white text-center">{message}</p>
    </div>
  );
};

export default Error;
