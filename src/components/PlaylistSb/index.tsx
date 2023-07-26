import { IoIosExpand } from "react-icons/io"
import { NavLink, useSearchParams } from "react-router-dom"
import { createPlayListHref } from "../../utils/createHref"
import { AiFillPlayCircle } from "react-icons/ai"

const PlaylistSb: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get("id") || ""
  return (
    <div>
      <div className={`mb-1`}>
        <NavLink
          to={createPlayListHref("favorite")}
          className={({ isActive }) =>
            `${isActive && id == "favorite" ? "group" : ""}`
          }
        >
          <div
            className={`group rounded relative px-3 h-14 flex flex-col justify-center group-[]:bg-white-opacity-17 hover:bg-white-opacity-30`}
          >
            <div className="font-bold text-sm">Danh sách bạn yêu thích</div>
            <div className="text-xs">Danh sách tự động</div>
            <div className="absolute right-2 opacity-0 group-[]:opacity-100">
              <AiFillPlayCircle color={"white"} size={25} />
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default PlaylistSb
