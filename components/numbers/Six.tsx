import '../../styles/domino.css';
import TopLeft from '../positions/TopLeft';
import TopRight from '../positions/TopRight';
import BottomLeft from '../positions/BottomLeft';
import BottomRight from '../positions/BottomRight';
import Left from '../positions/Left';
import Right from '../positions/Right';

const Six = () => {
  return (
    <div className="container">
      <TopLeft />
      <TopRight />
      <BottomLeft />
      <BottomRight />
      <Left />
      <Right />
    </div>
  );
};

export default Six;
