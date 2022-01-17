import classNames from "classnames";

const ChoiceItem = (props) => {
  const { image, name, getChoice, getChoiceMade } = props;

  const choiceClass = classNames();

  const clickHandler = () => {
    getChoice(name);
    getChoiceMade();
  };

  return (
    <div className="choice-item" onClick={clickHandler}>
      <p className="choice-name">{name}</p>
      <img src={image} className="choice-image" alt="choices" />
    </div>
  );
};

export default ChoiceItem;
