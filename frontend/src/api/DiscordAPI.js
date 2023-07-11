import axios from "axios";

const DISCORD_API_URL = "https://discord.com/api";
let lastRequestTime = 0;
const responseCache = {}; // Added a response cache

async function delayIfNeeded() {
  const currentTime = Date.now();
  const timeSinceLastRequest = currentTime - lastRequestTime;

  if (timeSinceLastRequest < 1000) {
    const delayMs = 1000 - timeSinceLastRequest;
    return new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return Promise.resolve();
}

function updateLastRequestTime(response) {
  const rateLimitReset = parseInt(response.headers["x-ratelimit-reset"]) / 1000;
  lastRequestTime = Math.max(rateLimitReset, Date.now());
}

export async function getUserDetails(discordAccessToken) {
 // console.log("Discord Access Token in discordapi1:", discordAccessToken); 
  await delayIfNeeded();
 // console.log("Discord Access Token in discordapi2:", discordAccessToken); 
  const response = await axios.get(`${DISCORD_API_URL}/users/@me`, {
    headers: {
      Authorization: `Bearer ${discordAccessToken}`,
    },
  });

  updateLastRequestTime(response);

  return response.data;
}

export async function getUserGuilds(discordAccessToken) {
 //   console.log("Discord Access Token in discordapi3:", discordAccessToken); 

  await delayIfNeeded();
 //   console.log("Discord Access Token in discordapi4:", discordAccessToken); 
  // Check the cache first
  if (responseCache[discordAccessToken]) {
    return responseCache[discordAccessToken];
  }

  const MAX_RETRIES = 5;
  let retryCount = 0;
  let waitTime = 1000; // Initial wait time in milliseconds

  while (retryCount < MAX_RETRIES) {
    try {
      const response = await axios.get(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: {
          Authorization: `Bearer ${discordAccessToken}`,
        },
      });

      updateLastRequestTime(response);

      // Cache the response data
      responseCache[discordAccessToken] = response.data;

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        const retryAfter = error.response.headers["retry-after"];
        waitTime = retryAfter ? parseInt(retryAfter) * 1000 : waitTime;

        console.log(`Rate limited. Retrying after ${waitTime / 1000} seconds.`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        retryCount++;
        waitTime *= 2; // Exponential backoff
      } else {
        throw error;
      }
    }
  }

  throw new Error(`Exceeded maximum number of retries (${MAX_RETRIES}).`);
}
