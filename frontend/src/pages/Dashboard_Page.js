import React from "react";
import NavigationAfterLogin from "../components/Navigation_after_login";
import ToggleButton from "../components/ToggleButton";
import Card from "../components/Command_Card";

function DashboardPage({ signOutUser }) {
    return (
      <div className="min-h-screen text-white bg-background-color">
        <div className="sticky top-0 z-10">
          {/* Navigation */}
          <NavigationAfterLogin signOutUser={signOutUser} />
        </div>
        <div class="relative">
          <div class="overflow-x-hidden ">
            <div className="w-full mx-20">
              <div className="px-20 pb-16 text-4xl font-semibold font-ibm text-gray-custom pt-28 mx-28">
                GENERAL
              </div>
              <div className="container grid pt-12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                <Card
                  title="/handbook"
                  content="
List down all the available commands"
                />
                <Card
                  title="/campus-facilities"
                  content="Query through the student handbook for information"
                />
                <Card
                  title="/cc"
                  content="
Info for the Academic Support Unit"
                />
                <Card
                  title="/club"
                  content="
Info for the Alumni Affairs"
                />
                <Card
                  title="/drgp"
                  content="
Info for the Student Council"
                />
                <Card
                  title="/facilities"
                  content="
info about the Campus Facilities"
                />
                <Card
                  title="/grading-sys"
                  content="
Info about the Grading and Evaluation Criteria."
                />
                <Card
                  title="/financial-aid"
                  content="Info about the Financial Aid and Scholarships"
                />
                <Card
                  title="/stu-org"
                  content="Info about the student organization "
                />
              </div>

              <div className="my-20 border-2 border-black"></div>

              <div className="w-full">
                <div className="px-20 text-3xl font-semibold font-ibm text-gray-custom mx-28">
                  FACULTY OF ENGINEERING
                </div>
                <div className="container grid pt-12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                  <Card title="/ARC" content="All information from ARC department" />
                  <Card title="/CE" content="All information from CE department" />
                  <Card title="/IE" content="All information from IE department" />
                </div>
              </div>

              <div className="my-20 border-2 border-black"></div>

              <div className="w-full">
                <div className="px-20 text-3xl font-semibold font-ibm text-gray-custom mx-28">
                  FACULTY OF ICT
                </div>
                <div className="container grid pt-12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                  <Card
                    title="/CS"
                    content="All information from CS department"
                  />
                  <Card
                    title="/MIS"
                    content="All information from MIS department"
                  />
                </div>
              </div>

              <div className="my-20 border-2 border-black"></div>

              <div className="w-full">
                <div className="px-20 text-3xl font-semibold font-ibm text-gray-custom mx-28">
                  FACULTY OF ECONOMICS AND ADMINISTRATIVE SCIENCES
                </div>
                <div className="container grid pt-12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                  <Card
                    title="/BUS"
                    content="All information from BUS department"
                  />
                  <Card
                    title="/IR"
                    content="All information from IR department"
                  />
                  <Card
                    title="/BFA"
                    content="All information from BFA department"
                  />
                </div>
              </div>

              <div className="my-20 border-2 border-black"></div>

              <div className="w-full">
                <div className="px-20 text-3xl font-semibold font-ibm text-gray-custom mx-28">
                  ENGLISH PREPARATORY SCHOOL
                </div>
                <div className="container grid pt-12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ">
                  <Card
                    title="/EPS"
                    content="All information from ENGLISH PREPARATORY SCHOOL"
                  />
                </div>
              </div>

              <div className="my-20 border-2 border-black"></div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default DashboardPage;