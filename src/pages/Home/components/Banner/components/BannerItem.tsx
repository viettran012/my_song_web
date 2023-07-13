interface IItem {
  banner: string
}

interface IProps {
  item: IItem
}

const BannerItem: React.FC<IProps> = ({ item }) => {
  return (
    <div>
      <div className="w-96 h-52 mr-6 br rounded flex justify-center items-center overflow-hidden">
        <img className="rounded object-cover" src={item.banner} />
      </div>
    </div>
  )
}

export default BannerItem
