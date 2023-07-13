import { ReactNode } from "react"

interface IHomeSectionWrapperProps {
  children: ReactNode
}

export const HomeSectionWrapper: React.FC<IHomeSectionWrapperProps> = ({
  children,
}) => {
  return <div className="mb-12">{children}</div>
}
