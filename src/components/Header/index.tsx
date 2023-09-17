import { ClipboardText, MagnifyingGlass } from "phosphor-react";
import { ContainerHeader, LogosHeader } from "./styles";
import { Specifications } from "../Specifications";
import Apple from "../../assets/Apple.svg";

export interface HeaderProps {
  title: string;
  description: string;
  type: string;
}
export interface IRate {
  items: HeaderProps[];
}

export const Header = ({ items }: IRate) => {
  return (
    <ContainerHeader>
      <div>
        <ul>
          <img src={Apple} alt="" />

          {items.map((item, index) => (
            <li key={index}>
              <a href="#"> {item.title} &#x25BE;</a>
              <ul className="dropdown">
                <li>
                  <a href="#"> {item.description}</a>
                  <a href="#"> {item.description}</a>
                  <a href="#"> {item.description}</a>
                  <a href="#">{item.description}</a>
                </li>
              </ul>
            </li>
          ))}
          <li>
            <LogosHeader>
              <MagnifyingGlass size={15} style={{ margin: "20px" }} />
              <ClipboardText size={15} style={{ margin: "20px" }} />
            </LogosHeader>
          </li>
          <Specifications
            Spec="Visao Geral"
            SecondSpec="Por que Ipad"
            ThirdSpec="Especificações"
          />
        </ul>
      </div>
    </ContainerHeader>
  );
};
