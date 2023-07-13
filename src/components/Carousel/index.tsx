import SectionTitle from "../../pages/Home/components/SectionTitle"
import { ReactNode } from "react"

interface Iprops {
  title: string
  items: any[]
  renderItem: (item: any, index: number) => ReactNode
}

const Carousel: React.FC<Iprops> = ({ title, items, renderItem }) => {
  return items?.length ? (
    <div className="overscroll-x-none">
      <SectionTitle title={title} />
      <div className="flex overflow-auto w-full no-scrollbar">
        {items?.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  ) : null
}

export default Carousel
