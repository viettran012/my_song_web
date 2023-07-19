interface IRoute {
  home: string
  explore: string
  library: string
  playlist: string
  player: string
}

const routesConfig: IRoute = {
  home: "/",
  explore: "/explore",
  library: "/library",
  playlist: "/playlist",
  player: "/player",
}

export default routesConfig
