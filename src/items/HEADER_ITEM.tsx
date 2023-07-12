interface IHeaderItem {
  id: number;
  href: string;
  title: string;
}

const HEADER_ITEM: IHeaderItem[] = [
  {
    id: 1,
    href: "/",
    title: "Trang chủ",
  },
  {
    id: 2,
    href: "/explore",
    title: "Khám phá",
  },
  {
    id: 3,
    href: "/library",
    title: "Thư viện",
  },
];

export default HEADER_ITEM;
