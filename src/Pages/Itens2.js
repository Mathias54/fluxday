import React, {useContext, useEffect, useRef} from 'react';
import { StateContext, useSelector, useDispatch } from '../Store/Provider';
import Actions from '../Actions/Actions';

function Itens2() {

  const dispatch = useRef(useDispatch());

  useEffect(() => {
    dispatch.current(Actions.carregarUsuarios());
  }, []);

  const users = useSelector(({users}) => users);

  const handlerClick = (id) => {
    dispatch.current(Actions.removerUsuario(id));
  };

  return (
    <div className="App">
      {
        users.map(user => <li onClick={() => handlerClick(user.id)}>{user.name}</li>)
      }
    </div>
  );
}

export default Itens2;
