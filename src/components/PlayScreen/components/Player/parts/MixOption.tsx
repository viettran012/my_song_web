import { CiRepeat, CiShuffle } from "react-icons/ci"
import { CirButton } from "../../../../Button"
import { useAppSelector } from "../../../../../app/hooks"
import { player_ } from "../../../../../utils/player_"

const MixOption: React.FC = () => {
  const isMix = useAppSelector((state) => state?.player?.status?.isMix)

  return (
    <div className="mr-3">
      <CirButton
        isTransparent
        onClick={() => {
          player_.toggleMix()
        }}
      >
        <CiShuffle
          size={25}
          color={isMix ? "var(--turquoise)" : "var(--whiteT1)"}
        />
      </CirButton>
    </div>
  )
}

export default MixOption
