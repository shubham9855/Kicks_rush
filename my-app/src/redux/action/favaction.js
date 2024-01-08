export const addtofav = (item) => ({
  type: "ADD_TO_FAV",
  payload: item,
});

export const removeformfav = (id) => ({
  type: "REMOVE_FROM_FAV",
  payload: id,
});
