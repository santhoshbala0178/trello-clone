import {
  faStar,
  faAngleDown,
  faAngleUp,
  faPlus,
  faUser,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarRegular,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

const iconMap = new Map<string, any>();
iconMap.set('star', faStarRegular);
iconMap.set('starFilled', faStar);
iconMap.set('downArrow', faAngleDown);
iconMap.set('upArrow', faAngleUp);
iconMap.set('plus', faPlus);
iconMap.set('user', faUser);
iconMap.set('delete', faTrash);
iconMap.set('close', faTimesCircle);

export default iconMap;
