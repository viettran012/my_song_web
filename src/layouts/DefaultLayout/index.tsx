import { ReactNode } from "react"
import Header from "./components/Header"
import TopLoader from "../../components/TopLoader"

interface IProps {
  children: ReactNode
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <TopLoader />
      <div className="absolute h-80 bg-body-bg top-0 left-0 right-0 bg-no-repeat bg-cover"></div>
      <div className="absolute h-80 top-0 left-0 right-0 bg-gradient-to-b from-from-body-bg-gradiant to-to-body-bg-gradiant"></div>
      <Header />
      <div className="pt-20 px-20 relative z-10 flex flex-col items-center">
        <div className="max-w-7xl w-full">{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
