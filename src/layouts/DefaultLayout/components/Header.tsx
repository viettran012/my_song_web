import { Link, NavLink } from "react-router-dom"
import FlexTag from "../../../components/FlexTag"
import HEADER_ITEM from "../../../items/HEADER_ITEM"
import { CiSearch } from "react-icons/ci"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const { t } = useTranslation()
  const [isTop, setIsTop] = useState<boolean>(true)

  const handleOnScroll = useCallback(() => {
    const top = document.documentElement.scrollTop
    if (!top) {
      setIsTop(true)
    } else {
      setIsTop(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll)
    // remove event scroll when unmount
    return () => window.removeEventListener("scroll", handleOnScroll)
  }, [])

  return (
    <FlexTag
      styles={`transition duration-300 fixed h-16 top-0 left-0 right-0 border-collapse z-20 border-b tra ${
        isTop ? "border-transparent" : "bg-main-bg border-neutral-800"
      }`}
    >
      <Link to={"/"} className="cursor-pointer absolute left-3">
        <FlexTag>
          <img alt="logo" src="/logo.png" className="h-7 w-7" />
          <div className="text-2xl tracking-tighter font-bold ml-1">
            Solfive
          </div>
        </FlexTag>
      </Link>

      <div className="flex">
        {HEADER_ITEM?.map((item, index) => {
          return (
            <NavLink
              to={item.href}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-neutral-400"
              }
            >
              <div className=" px-6 text-xl font-bold hover:text-white">
                {t(item.title)}
              </div>
            </NavLink>
          )
        })}

        <div className="text-neutral-400 px-6 text-xl font-bold hover:text-white cursor-pointer flex justify-center items-center">
          <CiSearch size={23} />
          <div className="ml-3">{t("search")}</div>
        </div>
      </div>
    </FlexTag>
  )
}

export default Header
