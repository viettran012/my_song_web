interface IProps {
  title: string
  fontSize?: string
}

const SectionTitle: React.FC<IProps> = ({ title, fontSize = "3xl" }) => {
  return <div className={`text-${fontSize} font-extrabold`}>{title}</div>
}

export default SectionTitle
