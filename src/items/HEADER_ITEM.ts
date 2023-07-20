interface IHeaderItem {
  id: number
  href: string
  title: string
}

const HEADER_ITEM: IHeaderItem[] = [
  {
    id: 1,
    href: "/",
    title: "home",
  },
  {
    id: 2,
    href: "/explore",
    title: "explore",
  },
  {
    id: 3,
    href: "/library",
    title: "library",
  },
]

export default HEADER_ITEM
