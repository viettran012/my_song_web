import { Link, NavLink } from "react-router-dom"
import FlexTag from "../../../components/FlexTag"
import HEADER_ITEM from "../../../items/HEADER_ITEM"
import { CiMenuBurger, CiSearch } from "react-icons/ci"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { Button, CirButton } from "../../../components/Button"
import { RxHamburgerMenu } from "react-icons/rx"
import { VscMenu } from "react-icons/vsc"
import { toggleSidebar } from "../../../features/ui/uiSlice"
import Search from "../../../components/Search"
import UserAvatar from "../../../components/UserAvatar"
import { ui } from "../../../utils/ui"

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const { t } = useTranslation()
  const dispath = useAppDispatch()

  const isExpand = useAppSelector((state) => state?.ui?.sidebarExpand)
  const isShow = useAppSelector((state) => state?.player?.isShoaInfo)
  const isLogin = useAppSelector((state) => state?.user?.isLogin)

  const [isTop, setIsTop] = useState<boolean>(true)

  const handleOnScroll = useCallback(() => {
    setIsTop(!document.documentElement.scrollTop)
  }, [])

  const handleToggleSidebar = () => {
    dispath(toggleSidebar(!isExpand))
  }

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll)
    // remove event scroll when unmount
    return () => window.removeEventListener("scroll", handleOnScroll)
  }, [])

  return (
    <FlexTag
      styles={`transition duration-300 fixed h-header top-0 left-0 right-0 border-collapse z-50 border-b ${
        isTop && !isShow
          ? `border-transparent`
          : "bg-main-bg border-neutral-800"
      } ${isShow ? "bg-main-bg pr-[12px] border-neutral-800" : ""}`}
    >
      <div className="cursor-pointer absolute z-20 left-4 flex items-center">
        <div className="mr-2">
          <CirButton isTransparent onClick={handleToggleSidebar}>
            <RxHamburgerMenu size={22} color={"white"} />
          </CirButton>
        </div>
        <Link to={"/"} className="cursor-pointer">
          <FlexTag>
            <img alt="logo" src="/logo.png" className="h-7 w-7" />
            <div className="text-2xl tracking-[-3px] let font-bold ml-1">
              Solfive
            </div>
          </FlexTag>
        </Link>
      </div>

      <div
        className={`w-full px-24 relative z-10 flex flex-col items-center ${
          isExpand ? "ml-sidebar-width-expand" : "ml-sidebar-width-narrow"
        }`}
      >
        <div className="max-w-7xl w-full flex items-center justify-between">
          <Search />
          {isLogin ? (
            <div>
              <UserAvatar />
            </div>
          ) : (
            <div>
              <Button
                styles={{ height: "44px" }}
                isAnimated={false}
                isActiveBg={true}
                onClick={ui.showLoginModal}
              >
                Đăng nhập
              </Button>
            </div>
          )}
        </div>
      </div>
    </FlexTag>
  )
}

export default Header
