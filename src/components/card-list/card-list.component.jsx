import "./card-list.styles.css";
import Card from "../card/card.component";
//distructuring the monsters inside of the params, same as const {monsters} = props
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
