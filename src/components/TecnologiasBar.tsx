import { Icon } from "@iconify/react";
import '../global.scss';
const TecnologiasBar = () => {
  return (
    <>
      <div className="info__Container--technologies">
        <div className="info__Container--technologies--ContainerIcon">
          <Icon
            icon="material-symbols:web"
            color="#fafafa"
            width="30"
            height="30"
            className="technologyIcon"
          />
          <div className="titlebarContainer">
            <span className="title__bar">front-end</span>
            <div className="info__Container--technologies--ContainerIcon--bar front-end"></div>
          </div>
        </div>

        <div className="info__Container--technologies--ContainerIcon">
          <Icon
            icon="mdi:sql-query"
            color="#fafafa"
            width="30"
            height="30"
            className="technologyIcon"
          />

          <div className="titlebarContainer">
            <span className="title__bar">back-end</span>
            <div className="info__Container--technologies--ContainerIcon--bar back-end"></div>
          </div>
        </div>

        <div className="info__Container--technologies--ContainerIcon">
          <Icon
            icon="carbon:logo-react"
            color="#fafafa"
            width="30"
            height="30"
            className="technologyIcon"
          />
          <div className="titlebarContainer">
            <span className="title__bar">react js</span>
            <div className="info__Container--technologies--ContainerIcon--bar react-js"></div>
          </div>
        </div>

        <div className="info__Container--technologies--ContainerIcon">
          <Icon
            icon="simple-icons:javascript"
            color="#fafafa"
            width="30"
            height="30"
            className="technologyIcon"
          />
          <div className="titlebarContainer">
            <span className="title__bar">javascript</span>
            <div className="info__Container--technologies--ContainerIcon--bar javascript"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TecnologiasBar;
