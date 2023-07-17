import { ReactNode, CSSProperties } from "react"

interface ICirButton {
  children: ReactNode
  radius?: string | number
  styles?: CSSProperties
  onClick?: () => void
  disabled?: boolean
}

export const CirButton: React.FC<ICirButton> = ({
  children,
  radius = "40px",
  styles,
  onClick,
  disabled = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-all rounded-full flex justify-center items-center border border-bdm hover:bg-whv`}
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
