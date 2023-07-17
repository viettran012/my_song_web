import { useTranslation } from "react-i18next"
import { IPlayList } from "../../../types/item"
import { PlayListVariants } from "./PlayListVariants"
import getTime from "../../../utils/getTime"
import SectionTitle from "../../../components/SectionTitle"

interface IProps {
  data: IPlayList
}

const PlayListBsInfo: React.FC<IProps> = ({ data }) => {
  const { t } = useTranslation()
  return (
    <div className="flex">
      <div>
        <div className="h-64 w-64 rounded">
          <img
            className="h-full w-full rounded"
            alt="playlist-thumbnail"
            src={data?.thumbnailM}
          />
        </div>
      </div>
      <div className="ml-9">
        <div className="py-5">
          <SectionTitle title={data?.title || ""}></SectionTitle>
        </div>
        <div className="text-whiteT1">
          <div className="">
            <div className="py-1">{t("playlist")} • Solfive</div>
            <div className="py-1">
              {`${data?.song?.total} ${t("song")} • 
            ${
              data?.song?.totalDuration
                ? getTime.caculateTime(data?.song?.totalDuration)
                : ""
            }`}
            </div>
          </div>
          <div className="mt-3 text-sm">{data?.sortDescription}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayListBsInfo
