import app from "../firebaseConfig";
import {
  doc,
  getDoc,
  query,
  where,
  getFirestore,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";

const db = getFirestore(app);

export const getAllDocs = async (collectionName) => {
  const col = collection(db, collectionName);
  const q = query(col, orderBy("semester", "asc"));
  const snapshot = await getDocs(q);

  const list = snapshot.docs.map((doc) => {
    return { ...doc.data(), selfId: doc.id };
  });
  return list;
};

export const getSubCollection = async (
  parentCollectionName,
  docName,
  childCollectionName
) => {
  const collectionRef = collection(
    db,
    parentCollectionName,
    docName,
    childCollectionName
  );
  const docSnap = await getDocs(collectionRef);
  const list = docSnap.docs.map((doc) => {
    return { ...doc.data(), selfId: doc.id };
  });
  return list;
};

export const addDocInSubCollection = async (
  parentCollectionName,
  docName,
  childCollectionName,
  body
) => {
  try {
    const couponRef = collection(
      db,
      `${parentCollectionName}/${docName}/${childCollectionName}`
    );
    const docRef = await addDoc(couponRef, body);
    return {
      result: "success",
      message: `document added successfully with id = ${docRef.id}`,
    };
  } catch (err) {
    return { result: "failed", message: err };
  }
};

export const updateDocInSubCollection = async (
  parentCollectionName,
  docName,
  childCollectionName,
  body
) => {
  try {
    const couponRef = doc(
      db,
      `${parentCollectionName}/${docName}/${childCollectionName}/${body.selfId}`
    );
    const docRef = await updateDoc(couponRef, body);
    return {
      result: "success",
      message: `document updated successfully`,
    };
  } catch (err) {
    return { result: "failed", message: err };
  }
};

export const deleteDocInSubcollection = async (
  parentCollectionName,
  docName,
  childCollectionName,
  childDocName
) => {
  try {
    const docRef = doc(
      db,
      `${parentCollectionName}/${docName}/${childCollectionName}/${childDocName}`
    );
    await deleteDoc(docRef);
  } catch (err) {
    return { result: "failed", message: err };
  }
};
