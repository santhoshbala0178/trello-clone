import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const DATA_COLLECTION = 'data';

/*
Add New Worspace with the given name
*/
export const addNewWorkspace = async (workspaceName: string) => {
  try {
    await addDoc(collection(db, DATA_COLLECTION), {
      name: workspaceName,
    });
  } catch (err) {
    console.log(err);
  }
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
        boardList = newItem;
      }
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
export const getBoard = async (workspaceName: string, boardName: string) => {
  try {
    const workspaceData = await getWorkspace(workspaceName);
    if (workspaceData !== '') {
      const boardList = workspaceData.get('boards');
      const boardIdx = boardList.findIndex(
        (board: any) => board.name === boardName
      );
      return boardIdx;
    }
  } catch (err) {
    console.log(err);
  }

  return -1;
};
