function Reducer(state, action) {
  switch (action.type) {
    case 'REMOVER_USUARIO':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
      };
    case 'CARREGAR_USUARIOS':
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
}

export default Reducer;
