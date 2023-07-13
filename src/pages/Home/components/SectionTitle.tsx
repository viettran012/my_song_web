interface IProps {
  title: string
}

const SectionTitle: React.FC<IProps> = ({ title }) => {
  return <div className="py-4 text-3xl font-bold">{title}</div>
}

export default SectionTitle
