export const play = ({
  spotify_uri,
  playerInstance: {
    _options: { getOAuthToken, id },
  },
}) => {
  getOAuthToken((access_token) => {
    fetch(
      `https://api.spotify.com/v1/me/player/play?device_id=${window.device_id}`,
      {
        method: "PUT",
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
  });
};
