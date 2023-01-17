const client_id = "4fff23c99ab74f8aa1b7fd4fdbac92a8";
const client_secret = "e80c9af0551b44cab9c37541d81b04a7";

const Spotify = {
  async getAccessToken() {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
    };

    const result = await fetch(
      "https://accounts.spotify.com/api/token",
      authParams
    );
    const data = await result.json();

    return await data.access_token;
  },

  async getTrack() {},
}();
