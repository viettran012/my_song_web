import { useAppSelector } from "../../../../app/hooks"

interface IProps {}

const PlayerAction: React.FC<IProps> = () => {
  const songId = useAppSelector((state) => state?.player?.songId)
  return <div>Action</div>
}

export default PlayerAction
