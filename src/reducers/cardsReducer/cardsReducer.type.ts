import { CardListType } from '../../components/BoardPage/BoardPage/BoardPage.type';
import CardType from '../../components/BoardPage/Card/Card.type';

type cardsActionType = {
  type: string;
  data?: CardListType[] | updateOrderType;
};

export type updateOrderType = {
  name?: string;
  modifiedName?: string;
  listName?: string;
  source?: number;
  destination?: number;
  sourceDroppableId?: string;
  destinationDroppableId?: string;
};

export default cardsActionType;
