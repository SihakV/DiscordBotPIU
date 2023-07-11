import { NavLink } from "react-router-dom";
export default function Menu() {
   return (
     <div>
       <NavLink to="/about">
         <button
           exact={true.toString()}
           onClick={() => console.log("About link clicked")}
           className="px-4 py-2 font-bold transition duration-300 ease-in-out transform rounded-lg bg-purple-custom text-description-color font-ibm hover:text-white hover:bg-purple-600 hover:scale-105"
           activeClassName="bg-purple-600 text-white"
         >
           About
         </button>
       </NavLink>
     </div>
   );
  
}