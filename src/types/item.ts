export interface IBanner {
  banner: string
}

export interface IArtists {
  name: string
  playlistId: string | number
}

export interface IPlayList {
  thumbnailM?: string
  thumbnail?: string
  title?: string
  artists?: IArtists[]
  song?: ISongList
  sortDescription?: string
}

export interface ISong {
  title: string
  thumbnailM: string
  artists: IArtists[]
  duration: number
}

export interface ISongList {
  total?: string
  totalDuration?: number
  items?: ISong[]
}
