// src/firebase/firestore.ts
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { app } from './config';

const db = getFirestore(app);

// Función para agregar un usuario a Firestore con UID
export const addUser = async (uid: string, name: string, age: number) => {
  try {
    await setDoc(doc(db, 'users', uid), { name, age });
    console.log('Usuario agregado con UID:', uid);
  } catch (error) {
    console.error('Error al agregar usuario:', error);
  }
};

// Función para obtener un usuario por UID
export const getUser = async (uid: string) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// Función para actualizar un usuario
export const updateUser = async (
  uid: string,
  updates: Partial<{ name: string; age: number }>
) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, updates);
    console.log('Usuario actualizado:', uid);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
  }
};

// Función para eliminar un usuario
export const deleteUser = async (uid: string) => {
  try {
    await deleteDoc(doc(db, 'users', uid));
    console.log('Usuario eliminado:', uid);
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
  }
};
