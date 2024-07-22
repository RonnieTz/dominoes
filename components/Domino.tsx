import '../styles/domino.css';
import Five from './numbers/Five';
import Four from './numbers/Four';
import One from './numbers/One';
import Six from './numbers/Six';
import Three from './numbers/Three';
import Two from './numbers/Two';

type DominoProps = {
  positionOne: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  positionTwo: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};
const Domino = ({ positionOne, positionTwo }: DominoProps) => {
  const renderPosition = (position: number) => {
    switch (position) {
      case 1:
        return <One />;
      case 2:
        return <Two />;
      case 3:
        return <Three />;
      case 4:
        return <Four />;
      case 5:
        return <Five />;
      case 6:
        return <Six />;
      default:
        return null;
    }
  };

  return (
    <div className="domino">
      <div className="position-one">{renderPosition(positionOne)}</div>
      <div className="divider"></div>
      <div className="position-two">{renderPosition(positionTwo)}</div>
    </div>
  );
};

export default Domino;
