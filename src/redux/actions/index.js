export const ADD_SONG_TO_SELECTED = "ADD_SONG_TO_SELECTED";

export let addSongToSelectedAction = (songSelected) => {
  return (dispatch, getState) => {
    console.log("This action has been dispatched ");
    console.log(" check current state here: ", getState());

    dispatch({
      type: ADD_SONG_TO_SELECTED,
      payload: songSelected,
    });
  };
};
