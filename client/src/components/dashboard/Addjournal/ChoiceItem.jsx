import classNames from "classnames";

const ChoiceItem = (props) => {
  const { image, name, getChoice, getChoiceMade, selected } = props;

  const choiceClass = classNames("choice-item", {
    "choice-item-selected": selected,
  });

  const clickHandler = () => {
    getChoice(name);
    getChoiceMade();
  };

  return (
    <div className={choiceClass} onClick={clickHandler}>
      <p className="choice-name">{name}</p>
      <img src={image} className="choice-image" alt="choices" />
    </div>
  );
};

export default ChoiceItem;
