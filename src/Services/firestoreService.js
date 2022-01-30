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

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const db = getFirestore(app);
const auth = getAuth();

export const getAllDocs = async (collectionName) => {
  const col = collection(db, collectionName);
  const q = query(col, orderBy("semester", "asc"));
  const snapshot = await getDocs(q);

  const list = snapshot.docs.map((doc) => {
    return { ...doc.data(), selfId: doc.id };
  });
  return list;
};

export const getSingleDoc = async (collectionName, docName) => {
  const docRef = doc(db, collectionName, docName);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return { code: 400, message: "document not found" };
  }
};
export const getSubCollectionDoc = async (
  collectionName,
  docName,
  childCollectionName,
  childDocName
) => {
  const docRef = doc(
    db,
    collectionName,
    docName,
    childCollectionName,
    childDocName
  );
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return { code: 400, message: "document not found" };
  }
};
export const setSingleDocument = async (collectionName, docName, body) => {
  try {
    await setDoc(doc(db, collectionName, docName), body, { merge: true });
    return { result: "success", message: "document added successfully" };
  } catch (err) {
    return { result: "failed", message: err };
  }
};
export const addSingleDoc = async (collectionName, body) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), body);
    return {
      result: "success",
      message: `document added successfully with id = ${docRef.id}`,
    };
  } catch (err) {
    return { result: "failed", message: err };
  }
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

export const createUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return resolve(user);
    } catch (err) {
      console.log(err.message);
      return reject(err.message);
    }
  });
};

export const signInUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      return resolve(user);
    } catch (err) {
      console.log(err.message);
      return reject(err.message);
    }
  });
};

export const getSessionals = async (
  parentCollectionName,
  docName,
  childDocName
) => {
  try {
    const col = collection(
      db,
      `${parentCollectionName}/${docName}/courses/${childDocName}/sessionals`
    );
    const q = query(col);
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc) => {
      return { ...doc.data(), selfId: doc.id };
    });
    return list;
  } catch (err) {
    return { result: "failed", message: err };
  }
};

export const getFinals = async (
  parentCollectionName,
  docName,
  childDocName
) => {
  try {
    const col = collection(
      db,
      `${parentCollectionName}/${docName}/courses/${childDocName}/finals`
    );
    const q = query(col);
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc) => {
      return { ...doc.data(), selfId: doc.id };
    });
    return list;
  } catch (err) {
    return { result: "failed", message: err };
  }
};

export const getMids = async (parentCollectionName, docName, childDocName) => {
  try {
    const col = collection(
      db,
      `${parentCollectionName}/${docName}/courses/${childDocName}/mids`
    );
    const q = query(col);
    const snapshot = await getDocs(q);
    const list = snapshot.docs.map((doc) => {
      return { ...doc.data(), selfId: doc.id };
    });
    return list;
  } catch (err) {
    return { result: "failed", message: err };
  }
};
