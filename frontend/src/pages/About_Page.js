import React from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar_AboutPage_Component";
import useAuth from "../auth/useAuth";
import NavigationAfterLogin from "../components/Navigation_after_login";

const AboutPage = () => {
  const { authenticated, signInWithDiscord, signOutUser } = useAuth();

  return (
    <div className="min-h-screen bg-background-color text-white">
      {authenticated ? (
        <NavigationAfterLogin signOutUser={signOutUser} />
      ) : (
        <Navigation signInWithDiscord={signInWithDiscord} />
      )}

      <div className="sticky top-0 z-10"></div>
      <div className="flex flex-col md:flex-row mt-16 md:px-14">
        <div className="w-full mt-12 md:w-1/4">
          <Sidebar />
        </div>
        <div className="w-full md:w-3/4 py-8 pl-16 pr-32 md:py-0 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-purple-600 line"></div>
          <section className="mt-8" id="quick-start">
            <h3 className="mb-6 text-4xl font-bold uppercase">
              Welcome to PIU Discord bot
            </h3>
            <p className="pr-32 mb-6 mr-32 text-2xl leading-normal uppercase font-ibm text-description-color">
              The PIU Discord bot is a powerful and easy-to-use tool that helps
              you manage your server and enhance your Discord experience.
            </p>
            <h3 className="mb-4 text-4xl font-bold uppercase font-ibm">
              Purpose
            </h3>
            <p className="pr-32 mb-6 mr-32 text-2xl leading-normal uppercase font-ibm text-description-color">
              The purpose of the PIU Discord bot is to provide users with a wide
              range of features, such as music playback, moderation, and various
              utility commands to improve server management.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
