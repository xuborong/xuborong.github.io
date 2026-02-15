export type SpotifyEmbedItem = {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
};

export const spotifyPlaylists: SpotifyEmbedItem[] = [
  {
    id: "fav-playlist",
    title: "我的歌单",
    description: "Spotify 收藏歌单。",
    embedUrl: "https://open.spotify.com/embed/playlist/4CFVnfwUWNZSG6shKFchzm?utm_source=generator"
  }
];

export const spotifyTracks: SpotifyEmbedItem[] = [
  {
    id: "fav-track",
    title: "我的单曲",
    description: "Spotify 收藏单曲。",
    embedUrl: "https://open.spotify.com/embed/track/4oE7MyJhqSD3BaHRpNs8Nl?utm_source=generator"
  }
];
