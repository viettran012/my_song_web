import { NavLink, useLocation } from "react-router-dom"
import HEADER_ITEM from "../../../items/HEADER_ITEM"
import { useTranslation } from "react-i18next"
import { GoHomeFill, GoHome } from "react-icons/go"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { toggleSidebar } from "../../../features/ui/uiSlice"
import { IPath } from "../../../types/item"
import { useCallback, useEffect, useState } from "react"

interface IProps {}

const Sidebar: React.FC<IProps> = ({}) => {
  const { t } = useTranslation()
  const dispath = useAppDispatch()
  const path: IPath = useLocation()
  const [isTop, setIsTop] = useState<boolean>(true)

  const isExpand = useAppSelector((state) => state?.ui?.sidebarExpand)
  const isPlayerShow = useAppSelector((state) => state?.player?.isShoaInfo)

  const handleOnScroll = useCallback(() => {
    setIsTop(!document.documentElement.scrollTop)
  }, [])
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll)
    // remove event scroll when unmount
    return () => window.removeEventListener("scroll", handleOnScroll)
  }, [])

  return (
    <div
      className={`fixed z-20 pt-header px-2 overflow-auto bottom-0 top-0 left-0 border-neutral-800 ${
        isExpand
          ? "w-sidebar-width-expand bg-main-bg  border-r"
          : "w-sidebar-width-narrow"
      } ${isPlayerShow || !isTop ? "bg-main-bg  border-r" : ""}`}
    >
      <div className="mt-2">
        {HEADER_ITEM?.map((item, index) => {
          const Icon =
            path?.pathname == item?.href
              ? item?.iconActive
              : item.icon || GoHomeFill

          return (
            <div className={`mb-1 key={index}`} key={index}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  `${isActive ? "group font-bold" : "font-semibold"}`
                }
              >
                <div
                  className={`rounded-md flex justify-between items-center group-[]:bg-white-opacity-17 hover:bg-white-opacity-30 ${
                    isExpand ? "px-3 py-3 h-12" : "flex-col px-1 py-3 h-16"
                  }`}
                >
                  <div className="w-10 flex justify-center">
                    <Icon size={22} />
                  </div>
                  <div
                    className={`text-white flex-1 ${
                      isExpand ? "text-base ml-2" : "text-[10px] text-center"
                    }`}
                  >
                    {t(item.title)}
                  </div>
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
