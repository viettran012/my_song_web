import SectionTitle from "../SectionTitle";

interface ISong {
  items: any[];
  title: string;
}

interface IProps {
  data: ISong;
}

const Banner: React.FC<IProps> = ({ data }) => {
  return (
    <div>
      <SectionTitle title={"Thịnh hành"} />
    </div>
  );
};

export default Banner;
