import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firestore";

export const fetchTodos = () => {
  return getDocs(collection(db, "todos"));
};
