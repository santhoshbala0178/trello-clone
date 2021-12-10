import { CardListType } from '../../components/BoardPage/BoardPage/BoardPage.type';
import cardsOrderActionType from './cardsOrderReducer.type';

const defaultState = [
  {
    cardName: '',
    cards: [
      {
        id: '',
        name: '',
      },
    ],
  },
];

const cardsOrderReducer = (
  state = defaultState,
  action: cardsOrderActionType
): CardListType[] => {
  switch (action.type) {
    case 'LIST': {
      const items = [...state];
      const [reorderedItem] = items.splice(action.source, 1);
      items.splice(action.destination, 0, reorderedItem);
      return [...items];
    }
    case 'CARD': {
      const sourceIndex = state.findIndex(
        (list) => list.cardName === action.sourceDroppableId
      );
      const destinationIndex = state.findIndex(
        (list) => list.cardName === action.destinationDroppableId
      );
      const items = [...state];
      const [reorderedItem] = items[sourceIndex].cards.splice(action.source, 1);
      items[destinationIndex].cards.splice(
        action.destination,
        0,
        reorderedItem
      );
      return [...items];
    }
    default:
      return state;
  }
};

export default cardsOrderReducer;
