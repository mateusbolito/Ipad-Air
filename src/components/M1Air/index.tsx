import { ImageM1, M1Container, SectionContent } from "./styles";
import m1 from "../../assets/m1.jpg";
import pencil from "../../assets/pencil.jpg";
import { Footer } from "../Footer";

export const M1Air = () => {
  return (
    <M1Container>
      <p>
        A diversão não perde tempo com o <strong>M1.</strong>{" "}
      </p>

      <ImageM1>
        <img src={m1} alt="" />
      </ImageM1>

      <SectionContent>
        <p>
          O revolucionário chegou ao <strong>iPad Air.</strong> A CPU de oito
          núcleos é até 60% mais rápida que a geração anterior, transformando o
          iPad Air em uma potência. Use vários apps poderosos ao mesmo tempo,
          <strong>jogue com gráficos</strong> pesados ou crie um hit usando o
          <strong>Logic</strong> Pro para iPad.
        </p>
        <p>
          <strong> O iPad Air é compatível </strong> com a segunda geração do
          Apple Pencil, para você ilustrar, tomar notas e fazer marcações em
          capturas de tela e fotos. <strong>Ele é simples de manusear</strong> e
          está pronto sempre que surgir uma ideia3.
        </p>

        <div>
          <img src={pencil} alt="foot" />
          <p>
            <strong> Apple Pencil e Magic Keyboard.</strong> Mais que
            acessórios, parceiros. Use o Smart Keyboard Folio ou conte com a
            digitação responsiva e o trackpad integrado do Magic Keyboard. Eles
            são perfeitos para escrever o que você quiser, de Emails a um
            <strong> bestSeller.</strong> Ou garanta proteção frente e verso com
            as capas <strong> Smart Folio</strong> em novas cores5.
          </p>
        </div>
      </SectionContent>
      <Footer />
    </M1Container>
  );
};
