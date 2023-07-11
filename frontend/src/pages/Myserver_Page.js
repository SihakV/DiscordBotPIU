import React, { useEffect, useState } from "react";
import NavigationAfterLogin from "../components/Navigation_after_login";
import useAuth from "../auth/useAuth";
import { getUserGuilds } from "../api/DiscordAPI";
import ServerCard from "../components/Server_Card";
import supabase from "../components/SupabaseClient";

function Myserver() {
  const { authenticated, user, signOutUser } = useAuth();
  const [userServers, setUserServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = user?.user_metadata?.full_name;

const fetchUserServers = async () => {
 
    const session = supabase.auth.session();
    console.log("Supabase client instance:", supabase); // Log the Supabase client instance
    console.log("Supabase client auth:", supabase.auth); // Log the auth property of the Supabase client
    console.log("Supabase client session:", session); // Log the session

    const discordAccessToken = session?.provider_token;
    let servers = [];

    const MAX_RETRIES = 5;
    let retryCount = 0;
    let waitTime = 1000; // Initial wait time in milliseconds

    while (retryCount < MAX_RETRIES) {
      try {
 console.log("Discord Access Token in discordapi3:", discordAccessToken);        servers = await getUserGuilds(discordAccessToken);
        setLoading(false);
        setError(null);
        break; // Exit the loop if the API call is successful
      } catch (error) {
        if (error.response && error.response.status === 429) {
          const retryAfter = error.response.headers["retry-after"];
          waitTime = retryAfter ? parseInt(retryAfter) * 1000 : waitTime;

          console.log(
            `Rate limited. Retrying after ${waitTime / 1000} seconds.`
          );
          await new Promise((resolve) => setTimeout(resolve, waitTime));
          retryCount++;
          waitTime *= 2; // Exponential backoff
        } else {
          throw error;
        }
      }
    }
    console.log("Fetched servers:", servers);
    setUserServers(servers);
  
};


  useEffect(() => {
    if (authenticated) {
      setLoading(true);
    }
  }, [authenticated]);

  return (
    <div className="bg-background-color min-h-screen">
      <NavigationAfterLogin signOutUser={signOutUser} />
      <div className="py-10 text-center text-gray-custom">
        <h3 className="text-4xl font-bold font-ibm mb-4">
          Bonjour, {username || "Unknown User"}
        </h3>
        <h3 className="text-gray font-medium text-3xl font-ibm">
          Please select a server to get started
        </h3>
      </div>
      {loading ? (
        <div className="py-10 text-center text-white">Loading...</div>
      ) : error ? (
        <div className="text-white text-center py-10">Error: {error}</div>
      ) : userServers.length > 0 ? (
        <div className="flex flex-wrap justify-center p-4">
         
          {userServers
            .filter((server) => server.owner)
            .map((server) => (
              <ServerCard
                id={server.id}
                name={server.name}
                imageUrl={server.icon}
                isOwner={server.owner}
              />
            ))}
        </div>
      ) : (
        <div className="text-white text-center py-10">No servers found</div>
      )}
    </div>
  );
}

export default Myserver;
