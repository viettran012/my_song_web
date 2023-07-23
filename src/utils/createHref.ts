export const createPlayListHref = (playlistId: string | number) => {
  return `/playlist?id=${playlistId}`
}

export const createPlayerHref = (songID: string, songListId?: string) => {
  return `/player?id=${songID}${songListId ? `&listId=${songListId}` : ""}`
}
