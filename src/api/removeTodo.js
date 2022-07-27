import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export const removeTodo = (todo) => {
  return deleteDoc(doc(db, "todos", todo.id));
};
