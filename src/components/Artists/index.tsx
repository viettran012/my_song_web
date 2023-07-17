import { Link } from "react-router-dom"
import { IArtists } from "../../types/item"
import { createPlayListHref } from "../../utils/createHref"

interface IProps {
  artists: IArtists[]
}

const Artists: React.FC<IProps> = ({ artists }) => {
  return artists?.map((item, index) =>
    index < 3
      ? (
          <Link
            key={index}
            to={createPlayListHref(item?.playlistId)}
            className="hover:underline"
          >
            {`${item?.name}, `}
          </Link>
        ) || ""
      : "",
  )
}

export default Artists
