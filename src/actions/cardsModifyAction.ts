import { updateOrderType } from '../reducers/cardsReducer/cardsReducer.type';
import { CardListType } from '../components/BoardPage/BoardPage/BoardPage.type';
import CardType from '../components/BoardPage/Card/Card.type';

const cardsModifyAction = (
  type: string,
  data: CardListType[] | CardType | updateOrderType
) => ({
  type,
  data,
});

export default cardsModifyAction;
