import usersService from '../Services/Users';

function carregarUsuarios() {
  return async dispatch => {
    const users = await usersService.getAllUsers();
    dispatch({
      type: 'CARREGAR_USUARIOS',
      payload: {
        users,
      },
    });
  };
}

function removerUsuario(id) {
  return async dispatch => {
    await usersService.removerUsuario(id);
    dispatch({
      type: 'REMOVER_USUARIO',
      payload: {
        id,
      },
    });
  };
}

export default {
  carregarUsuarios,
  removerUsuario,
}
