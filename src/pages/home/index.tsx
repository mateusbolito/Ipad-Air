import { Header } from "../../components/Header";
import { M1Air } from "../../components/M1Air";

import { ContainerHome } from "./styles";

interface HeaderProps {
  title: string;
  description: string;
  type: string;
}

const items: HeaderProps[] = [
  { title: "Loja", description: "Box", type: "Mac" },
  {
    title: "Mac",
    description: "Samsumg",
    type: " acessorios",
  },
  { title: "Ipad", description: "IPAD", type: "iphone" },
  { title: "Iphone", description: "Macbook", type: "iphone" },
  { title: "Watch", description: "Watch", type: "iphone" },
  { title: "AirPods", description: "Galaxy", type: "iphone" },
  { title: "TV e Casa", description: "Box", type: "iphone" },
  { title: "Entretenimento", description: "Musica", type: "iphone" },
  { title: "Acessorios", description: "IPHONE", type: "mac" },
  { title: "Suporte", description: "Mac 16 Pro", type: "iphone" },
];
export const Home = () => {
  return (
    <ContainerHome>
      <Header items={items} />
      <M1Air />
    </ContainerHome>
  );
};
