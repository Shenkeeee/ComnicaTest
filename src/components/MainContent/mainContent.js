import "./mainContent.css";
import laptop from "../../assets/laptop.png";

const MainContent = () => {
  return (
    <div>
      <div id="mainContent">
        <div>
          <h1>Comnica Signature</h1>
          <h2>Digitális aláíró szolgáltatás a Comnicától</h2>
        </div>
        <img src={laptop} alt="laptop"></img>
      </div>
    </div>
  );
};

export default MainContent;
