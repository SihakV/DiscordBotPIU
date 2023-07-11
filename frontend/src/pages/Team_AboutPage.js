import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";
import commands from "../data/command.json";
import useAuth from "../auth/useAuth";
import NavigationAfterLogin from "../components/Navigation_after_login";

const TeamPage = () => {
  const { authenticated, signInWithDiscord, signOutUser } = useAuth();

  const teamMembers = [
    {
      name: "Vechaka Chhom",
      position: "Frontend Developer",
      description: "",
    },
    {
      name: "Chanbora Seng",
      position: "Python Developer",
      description: "",
    },
    {
      name: "Rithy Phal",
      position: "Frontend Developer",
      description: "",
    },
    {
      name: "Samrin Noun",
      position: "Requirement Engineer",
      description: "",
    },
    {
      name: "Sihak Vityea Sam",
      position: "Backend Developer",
      description: "",
    },
    {
      name: "Sophavong Heng",
      position: "Requirement Engineer",
      description: "",
    },
    // Add more team members here
  ];

  return (
    <div className="min-h-screen text-white bg-background-color">
      <div className="sticky top-0 z-10">
        {authenticated ? (
          <NavigationAfterLogin signOutUser={signOutUser} />
        ) : (
          <Navigation signInWithDiscord={signInWithDiscord} />
        )}
      </div>
      <div className="flex flex-col px-4 mt-16 md:flex-row md:px-14">
        <div className="w-full mt-12 md:w-1/4">
          <Sidebar />
        </div>
        <div className="relative w-full py-8 pl-16 pr-32 md:w-3/4 md:py-0">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 line"></div>
          <section className="mt-16">
            <h3 className="w-11/12 pt-2 pl-12 mb-2 text-3xl font-medium border-black rounded-sm h-14 text-description-color bg-purple-custom">
              MEET OUR TEAM{" "}
            </h3>
            <div className="container grid pt-12 mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-custom rounded-md p-4 mb-4">
                  <h4 className="text-xl text-black font-bold">
                    {member.name}
                  </h4>
                  <p className="text-lg text-black">{member.position}</p>
                  <p className="text-base">{member.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
