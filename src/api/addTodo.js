import { doc, setDoc } from "firebase/firestore";
import { db } from "../services/firestore";

export const addTodo = (todo) => {
  return setDoc(doc(db, "todos", todo.id), { todo });
};
