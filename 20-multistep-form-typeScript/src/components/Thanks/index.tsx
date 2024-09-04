import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./styles.css";
import { ReactElement } from "react";

type emojiObject = {
  unsatisfied: ReactElement;
  neutral: ReactElement;
  satisfied: ReactElement;
  very_satisfied: ReactElement;
};

const emojiData: emojiObject = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
};

type thanksProps = {
  data: {
    name: string;
    review: string;
    comment: string;
  };
};

const Thanks = ({ data }: thanksProps) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}: </h3>
      <p className="review-data">
        <span>
          Satisfação com o produto:{" "}
          {emojiData[data.review as keyof typeof emojiData]}
        </span>
      </p>
      <p className="review-data">
        <span>Comentário: {data.comment}</span>
      </p>
    </div>
  );
};

export default Thanks;
