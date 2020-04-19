import React, {useContext, useEffect} from 'react';
import { StateContext } from '../Store/Provider';
import Actions from '../Actions/Actions';

function Itens() {
  const [ state, dispatch ] = useContext(StateContext);

  useEffect(() => {
    Actions.carregarUsuarios()(dispatch);
  }, [dispatch]);

  const handlerClick = async (id) => {
    await Actions.removerUsuario(id)(dispatch);
  };

  return (
    <div className="App">
      {
        state.users.map(user => <li onClick={() => handlerClick(user.id)}>{user.name}</li>)
      }
    </div>
  );
}

export default Itens;
