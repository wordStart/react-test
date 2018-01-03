const ADD = 'ADD'
const REMOVE = 'REMOVE'
export function counter(state=0, action) {
  switch(action.type) {
    case ADD:
      return state + 1
    case REMOVE:
      return state - 1
    default:
      return 10
  }
}
export function addGun() {
  return {type: ADD}
}
export function removeGun() {
  return {type: REMOVE}
}