import React, { useState } from "react";

function ToggleButton() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return (
    <label className="flex cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="sr-only" checked={isToggled} onChange={handleToggle}/>
        <div className="block my-2 bg-red-600 rounded-full w-14 h-7">
          <div className={`
              block w-7 h-7 mt-1 bg-white rounded-full shadow transform transition-transform duration-300 ease-in-out
              ${isToggled ? 'translate-x-full' : ''}
            `}>
          </div>
        </div>
      </div>
      <div className="mt-1 ml-3 text-2xl ">
        {isToggled ? "On" : "Off"}
      </div>
    </label>
  );
}

export default ToggleButton;