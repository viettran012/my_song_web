import { ReactNode } from "react"
import Header from "./components/Header"
import TopLoader from "../../components/TopLoader"
import { PlayScreen } from "../../components/PlayScreen"
import useHistory from "../../hooks/useHistory"
import { useAppSelector } from "../../app/hooks"

interface IProps {
  children: ReactNode
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  useHistory()

  const isShowInfo = useAppSelector((state) => state.player.isShoaInfo)
  const isShow = useAppSelector((state) => state.player.isShow)

  return (
    <>
      <div
        className={`${isShowInfo ? "bg-main-bg pr-[12px]" : ""} ${
          isShow ? "pb-playcard" : ""
        }`}
      >
        <TopLoader />
        <div className="absolute h-80 bg-body-bg top-0 left-0 right-0 bg-no-repeat bg-cover"></div>
        <div className="absolute h-80 top-0 left-0 right-0 bg-gradient-to-b from-from-body-bg-gradiant to-to-body-bg-gradiant"></div>
        <Header />
        <div className="pt-20 px-20 relative z-10 flex flex-col items-center">
          <div className="max-w-7xl w-full">{children}</div>
        </div>
      </div>
      <PlayScreen />
    </>
  )
}

export default DefaultLayout
