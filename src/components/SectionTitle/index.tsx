interface IProps {
  title: string
}

const SectionTitle: React.FC<IProps> = ({ title }) => {
  return <div className="text-3xl font-extrabold">{title}</div>
}

export default SectionTitle
