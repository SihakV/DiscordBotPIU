import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";
import commands from "../data/command.json";
import useAuth from "../auth/useAuth";
import NavigationAfterLogin from "../components/Navigation_after_login";
const renderCommandList = () => {
  return (
    <ul>
      {commands.map((command, index) => (
        <li
          key={index}
          className="flex justify-between w-11/12 h-10 pt-1 pl-16 mb-2 text-xl font-medium text-black border-black rounded-sm bg-gray-custom"
        >
          <span className="flex-grow overflow-hidden text-xl font-medium">{command.command}</span>{" "}
          <span className="flex-shrink-0 overflow-hidden flex-basis-300px ">{command.description}</span>
        </li>
      ))}
    </ul>
  );
};

const CommandListPage = () => {
     const { authenticated, signInWithDiscord, signOutUser } = useAuth();

  return (
    <div className="min-h-screen text-white bg-background-color">
      <div className="sticky top-0 z-10">
        {authenticated ? (
          <NavigationAfterLogin signOutUser={signOutUser} />
        ) : (
          <Navigation signInWithDiscord={signInWithDiscord} />
        )}{" "}
      </div>
      <div className="flex flex-col mt-16 md:flex-row md:px-14">
        <div className="w-full mt-12 md:w-1/4">
          <Sidebar />
        </div>
        <div className="relative w-full px-4 py-8 pl-16 pr-32 md:w-3/4 md:py-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 line"></div>
          <section className="mt-10" id="command-list">
          <h3 className="mb-12 text-4xl font-bold font-ibm">LIST OF COMMANDS</h3>
            <div className="w-11/12 pt-2 pl-12 mb-2 border-black rounded-sm h-14 bg-purple-custom">
                <span className="ml-10 text-3xl font-medium text-gray-custom">Command</span>
                <span className="ml-48 text-3xl font-medium text-gray-custom">Description</span>
            </div>
            {renderCommandList()}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommandListPage;
