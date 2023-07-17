interface IRoute {
  home: string
  explore: string
  library: string
  playlist: string
}

const routesConfig: IRoute = {
  home: "/",
  explore: "/explore",
  library: "/library",
  playlist: "/playlist",
}

export default routesConfig
