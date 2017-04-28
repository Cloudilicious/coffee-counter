export default function(state = 0, action) {
  switch(action.type) {
    case 'ADD_BEVERAGE':
      return state + 1;
    case 'REMOVE_BEVERAGE':
      return state - 1;
  }
  return state
}