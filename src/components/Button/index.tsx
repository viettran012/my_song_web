import { ReactNode, CSSProperties } from "react"

interface ICirButton {
  children: ReactNode
  radius?: string | number
  styles?: CSSProperties
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
  isTransparent?: boolean
  isStopPropagation?: boolean
}

export const CirButton: React.FC<ICirButton> = ({
  children,
  radius = "40px",
  styles,
  onClick,
  disabled = false,
  isTransparent = false,
  isStopPropagation = true,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    isStopPropagation && e.stopPropagation()
    onClick && onClick(e)
  }

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer transition-all rounded-full flex justify-center items-center border active:scale-90 ${
        !isTransparent ? "border-bdm" : "border-transparent"
      } hover:bg-whv`}
      style={{
        width: radius,
        height: radius,
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? 0.3 : 1,
        ...styles,
      }}
    >
      {children}
    </div>
  )
}
