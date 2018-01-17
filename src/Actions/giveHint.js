export function giveHint () {
  return dispatch => {
    dispatch({ type: 'GIVE_HINT' })
  }
}