import { CardListType } from '../../components/BoardPage/BoardPage/BoardPage.type';
import {
  ADD_NEW_LIST,
  ORDER_CARD,
  ORDER_LIST,
  SET_DATA,
} from '../../constants/actionTypes';
import cardsActionType from './cardsReducer.type';

const defaultState = [
  {
    name: '',
    cards: [
      {
        id: '',
        name: '',
      },
    ],
  },
];

const cardsReducer = (
  state = defaultState,
  action: cardsActionType
): CardListType[] => {
  switch (action.type) {
    case SET_DATA:
      if (Array.isArray(action.data)) {
        return [...action?.data];
      }
      return state;
    case ADD_NEW_LIST:
      if (!Array.isArray(action.data) && action.data && action.data.name) {
        return [...state, { name: action?.data?.name, cards: [] }];
      }
      return state;
    case ORDER_LIST: {
      if (
        !Array.isArray(action.data) &&
        action.data &&
        action.data.source &&
        action.data.destination
      ) {
        const items = [...state];
        const [reorderedItem] = items.splice(action.data.source, 1);
        items.splice(action.data.destination, 0, reorderedItem);
      }
      return state;
    }
    case ORDER_CARD: {
      if (
        !Array.isArray(action.data) &&
        action.data &&
        action.data.source &&
        action.data.destination
      ) {
        const items = [...state];
        const sourceId = action.data.sourceDroppableId;
        const sourceIndex = state.findIndex((list) => list.name === sourceId);
        const destinationId = action.data.destinationDroppableId;
        const destinationIndex = state.findIndex(
          (list) => list.name === destinationId
        );

        const [reorderedItem] = items[sourceIndex].cards.splice(
          action.data.source,
          1
        );
        items[destinationIndex].cards.splice(
          action.data.destination,
          0,
          reorderedItem
        );
      }
      return state;
    }
    default:
      return state;
  }
};

export default cardsReducer;
