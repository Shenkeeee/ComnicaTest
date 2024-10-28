import "./sidebar.css";
import ActionButton from "../Button/actionButton";

const Sidebar = () => {
  const handleButtonClick = () => {
    console.log("Yessir!");
  };

  return (
    <div id="sidebar">
      <h1>
        Üdvözlöm a <br /> Comnica Signature-ben!
      </h1>
      <p>
        A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán. A
        folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje
        el, ha készen áll rá.
      </p>
      <ActionButton label="Kezdhetjük" onClick={handleButtonClick} />
    </div>
  );
};

export default Sidebar;
