import {
  ContainerAll,
  ContainerFooter,
  ImageHeader,
  ParagraphContainer,
} from "./styles";
import maca from "../../assets/maca.png";

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerAll>
        <div>
          <ImageHeader>
            <h2>
              <img src={maca} alt="logo" /> Meio ambiente
            </h2>
          </ImageHeader>

          <ParagraphContainer>
            <p>
              A Apple é neutra em emissão de carbono. E, até 2030, tudo o que
              produzimos também será. Estamos comprometidos para que todos os
              nossos produtos e embalagens sejam 100% feitos com materiais
              reciclados e renováveis, energia limpa e sem emissão de carbono.
            </p>
            <p>
              <a href="">
                <span>A Apple e o meio ambiente</span>
              </a>
            </p>
          </ParagraphContainer>
        </div>
        <div>
          <ImageHeader>
            <h2>
              <img src={maca} alt="logo" /> Privacidade
            </h2>
          </ImageHeader>
          <ParagraphContainer>
            <p>
              Como todos os produtos Apple, nós projetamos o iPad pensando na
              sua privacidade e segurança. Uma tarefa que nem sempre é fácil.
              Mas é neste tipo de inovação que nós acreditamos.
            </p>
            <p>
              <a href="">
                <span>Saiba mais sobre como lidamos com privacidade</span>
              </a>
            </p>
          </ParagraphContainer>
        </div>
        <div>
          <ImageHeader>
            <h2>
              <img src={maca} alt="logo" />
              Acessibilidade
            </h2>
          </ImageHeader>
          <ParagraphContainer>
            <p>
              A tecnologia é mais poderosa quando todo mundo pode usar. Por
              isso, o iPad vem com recursos de acessibilidade para pessoas com
              deficiências visuais, auditivas, cognitivas ou de mobilidade.
            </p>
            <p>
              <a href="">
                <span>Explorar todos os recursos de acessibilidade </span>
              </a>
            </p>
          </ParagraphContainer>
        </div>
      </ContainerAll>
    </ContainerFooter>
  );
};
