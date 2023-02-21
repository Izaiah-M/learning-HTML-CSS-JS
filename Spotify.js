const client_id = "";
const client_secret = "";

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
