import { ColorAndPower } from "../ColorAndPower";
import { MenuTray, SpecificationsContainer } from "./styles";

interface SpecificationsProps {
  Spec: string;
  SecondSpec: string;
  ThirdSpec: string;
}
export const Specifications = ({
  Spec,
  SecondSpec,
  ThirdSpec,
}: SpecificationsProps) => {
  return (
    <SpecificationsContainer>
      <a href="">Ipad Air</a>

      <MenuTray>
        <ul>
          <li>
            <span>{Spec}</span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="white">{SecondSpec} </span>
          </li>
        </ul>
        <ul>
          <li>
            <span className="white"> {ThirdSpec} </span>
          </li>
        </ul>
        <div>
          <button>comprar</button>
        </div>
      </MenuTray>
      <ColorAndPower />
    </SpecificationsContainer>
  );
};
