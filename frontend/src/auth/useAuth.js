import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../components/SupabaseClient";
import { getUserDetails, getUserGuilds } from "../api/DiscordAPI"; // Import the functions

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [discordServers, setDiscordServers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted
    let cachedUserDetails = null; // Variable to store cached user details
    let cachedUserGuilds = null; // Variable to store cached user guilds

    supabase.auth.onAuthStateChange(async (event, session) => {
      const user = session?.user;
      const discordAccessToken = session?.provider_token;
//console.log('Discord Access Token in useAuth:', discordAccessToken); 
      setUser(user);
      setAuthenticated(!!user);

      switch (event) {
        case "SIGNED_IN":
          console.log("Authenticated:", !!user);

          if (discordAccessToken) {
            // Check if user details are already cached
            if (cachedUserDetails) {
              setUser(cachedUserDetails);
            } else {
              // Fetch user details and cache the result
              const userDetails = await getUserDetails(discordAccessToken);
              cachedUserDetails = userDetails;
              setUser(userDetails);
            }

            // Check if user guilds are already cached
            if (cachedUserGuilds) {
              setDiscordServers(cachedUserGuilds);
            } else {
              // Fetch user guilds and cache the result
              const userGuilds = await getUserGuilds(discordAccessToken);
              cachedUserGuilds = userGuilds;
              setDiscordServers(userGuilds);
            }

            navigate("/Success");
          }
          break;
        case "SIGNED_OUT":
          setDiscordServers([]);
          navigate("/");
          console.log("User signed out");
          break;
        default:
          break;
      }
    });

    return () => {
      isMounted = false; // Update the mounted flag when unmounting the component
    };
  }, [navigate]);

  // Handle Signin
  const signInWithDiscord = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: "discord",
        options: {
          scopes: "identify guilds",
        },
      });

      if (error) {
        //  console.log("Error with Discord sign in:", error);
      }
    } catch (error) {
      //console.log("Error with Discord sign in:", error);
    }
  };

  const signOutUser = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      // console.log("Error signing out:", error.message);
    }
  };

  return {
    authenticated,
    user,
    discordServers,
    signInWithDiscord,
    signOutUser,
  };
};

export default useAuth;
