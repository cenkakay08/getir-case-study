export const mapFirebaseData = (data) => {
  return data.docs.map((doc) => doc.data().todo);
};
