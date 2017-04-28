export function selectUser(user) {
  console.log('User has been selected:', user.name);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}

export function addBeverage() {
  console.log('Beverage has been added');
  return {
    type: 'ADD_BEVERAGE'
  }
}

export function removeBeverage() {
  console.log('Beverage has been removed');
  return {
    type: 'REMOVE_BEVERAGE'
  }
}