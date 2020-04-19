const usuarios = [
  {
    id: 0,
    name: 'Mathias',
  },
  {
    id: 1,
    name: 'Nadine'
  },
  {
    id: 3,
    name: 'Felipe'
  }
];

function getAllUsers() {
  return Promise.resolve(usuarios);
}

function removerUsuario(id) {
  return new Promise(resolve => {
    const usuariosFiltrados = usuarios.filter(usuario => usuario.id !== id);
    resolve(usuariosFiltrados);
  });
}

export default {
  getAllUsers,
  removerUsuario,
};
