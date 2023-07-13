interface IArtists {
  name: string
}

interface IItem {
  thumbnailM: string
  title: string
  artists: IArtists[]
}

interface IProps {
  item: IItem
}

const BannerItem: React.FC<IProps> = ({ item }) => {
  return (
    <div>
      <div className="group w-52 h-52 mr-6 br rounded relative">
        <img
          className="rounded h-full object-cover cursor-pointer"
          src={item.thumbnailM}
        />
        <div className="hidden group-hover:block rounded absolute w-full h-full top-0 cursor-pointer bg-gradient-to-b from-from-body-bg-gradiant to-transparent"></div>
      </div>
      <div className="mt-4">
        <div className="font-bold mb-2 cursor-pointer hover:underline">
          {item?.title}
        </div>
        <div className="text-whiteT1 text-sm">
          {item?.artists?.map((item, index) =>
            index < 3 ? item?.name || "" : "",
          )}
          ...
        </div>
      </div>
    </div>
  )
}

export default BannerItem
