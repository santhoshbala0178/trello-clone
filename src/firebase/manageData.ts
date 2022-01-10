import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
  orderBy,
  Timestamp,
} from 'firebase/firestore';
import { CardListType } from '../components/BoardPage/BoardPage/BoardPage.type';
import { db } from './firebase';

const DATA_COLLECTION = 'data';

/*
Add New Worspace with the given name
*/
export const addNewWorkspace = async (workspaceName: string) => {
  try {
    await addDoc(collection(db, DATA_COLLECTION), {
      name: workspaceName,
      created: Timestamp.now(),
    });
  } catch (err) {
    console.log(err);
  }
};

/*
Get all workspace Data
*/
export const getAllWorkspacesQuery = () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log('heree', user);
    const q = query(collection(db, DATA_COLLECTION), orderBy('created'));

    return q;
  } catch (err) {
    console.log(err);
  }

  return false;
};

/*
Get all workspace Names
*/
export const getAllWorkspaceNames = async () => {
  try {
    const q = query(collection(db, DATA_COLLECTION), orderBy('created'));
    const querySnapshot = await getDocs(q);
    const workspaces: any = [];
    querySnapshot.forEach((eachDoc) => workspaces.push(eachDoc.data().name));
    return workspaces;
  } catch (err) {
    console.log(err);
  }

  return [];
};

/*
Get the Worspace with the given name
*/
export const getWorkspace = async (workspaceName: string) => {
  try {
    const q = query(
      collection(db, DATA_COLLECTION),
      where('name', '==', workspaceName)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0];
    }
  } catch (err) {
    console.log(err);
  }

  return '';
};

/*
Add New Board with the given name under the given workspace
*/
export const addNewBoard = async (workspaceName: string, boardName: string) => {
  try {
    const workspaceData = await getWorkspace(workspaceName);
    if (workspaceData !== '') {
      const docRef = doc(db, DATA_COLLECTION, workspaceData.id);
      const newItem = { name: boardName, starred: false };
      let boardList = workspaceData.get('boards');
      if ('boards' in workspaceData.data()) {
        boardList.push(newItem);
      } else {
        boardList = [newItem];
      }
      console.log(boardList);
      updateDoc(docRef, { boards: boardList });
    }
  } catch (err) {
    console.log(err);
  }
};

/*
Star the given Board
*/
export const updateStarredBoard = async (
  workspaceName: string,
  boardName: string
) => {
  try {
    const workspaceData = await getWorkspace(workspaceName);
    if (workspaceData !== '') {
      const docRef = doc(db, DATA_COLLECTION, workspaceData.id);
      const boardList = workspaceData.get('boards');
      const boardIdx = boardList.findIndex(
        (board: any) => board.name === boardName
      );
      boardList[boardIdx].starred = !boardList[boardIdx].starred;

      updateDoc(docRef, { boards: boardList });
    }
  } catch (err) {
    console.log(err);
  }
};

/*
Get the board with the given name
*/
export const getBoard = async (
  workspaceName: string,
  boardName: string,
  returnIdx: boolean
) => {
  try {
    const workspaceData = await getWorkspace(workspaceName);
    if (workspaceData !== '' && 'boards' in workspaceData.data()) {
      const boardList = workspaceData.get('boards');
      const boardIdx = boardList.findIndex(
        (board: any) => board.name === boardName
      );
      if (returnIdx) return boardIdx;

      if (boardIdx !== -1) return boardList[boardIdx];
    } else {
      return -1;
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};

/*
Get the board with the given name
*/
export const saveCardChanges = async (
  workspaceName: string,
  boardName: string,
  cards: CardListType[]
) => {
  try {
    const workspaceData = await getWorkspace(workspaceName);
    if (workspaceData !== '') {
      const docRef = doc(db, DATA_COLLECTION, workspaceData.id);
      const boardList = workspaceData.get('boards');
      const boardIdx = boardList.findIndex(
        (board: any) => board.name === boardName
      );

      boardList[boardIdx].lists = cards;
      updateDoc(docRef, { boards: boardList });
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};
