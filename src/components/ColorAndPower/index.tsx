import {
  ImageContainer,
  LinksOfView,
  PictureIpad,
  TitleSection,
  TitlesApresentation,
} from "./styles";
import figure from "../../assets/figure.jpg";
import { CaretRight, PlayCircle } from "phosphor-react";

export const ColorAndPower = () => {
  return (
    <ImageContainer>
      <div>
        <img src={figure} alt="figure" />
      </div>

      <TitleSection>
        <p>
          Cor e potência <br />
          no ar.
        </p>
      </TitleSection>

      <TitlesApresentation>
        <p>
          O poderoso chip M1 da Apple <br />
          está aqui.
        </p>

        <p>
          Câmera frontal ultra-angular <br />
          de 12 MP com Palco Central
        </p>
        <p>5G ultrarrápido.</p>
        <p className="name">Compatível com Apple Pencil e Magic Keyboard.</p>
        <p className="cores">Cinco cores lindas.</p>
      </TitlesApresentation>

      <LinksOfView>
        <ul>
          <li>
            <a href="https://github.com">
              <span>Assistir video</span>
              <PlayCircle size={32} />
            </a>
          </li>
          <li>
            <a href="https://github.com">
              <span>Assistir ao evento</span>
              <CaretRight size={32} />
            </a>
          </li>
          <PictureIpad></PictureIpad>
        </ul>
      </LinksOfView>
    </ImageContainer>
  );
};
