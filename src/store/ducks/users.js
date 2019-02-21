import { toast } from 'react-toastify';

/**
 * TYPES
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  error: null,
  loading: false,
  user: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ADD_SUCCESS:
      action.payload.history.push('/signin');
      toast.success('Usuário criado com sucesso, já pode fazer login !', { autoClose: 3000 });
      return { ...state, loading: true, error: null };
    case Types.ADD_FAILURE:
      action.payload.errors.map((error) => {
        toast.error(error.message, { autoClose: 3000 });
      });
      return { ...state, loading: true, error: null };
    default:
      return { ...state, loading: false };
  }
}

/**
 * ACTIONS
 */
export const creators = {
  addUserRequest: (user, history) => ({
    type: Types.ADD_REQUEST,
    payload: { user, history },
  }),
  addUserSuccess: (user, history) => ({
    type: Types.ADD_SUCCESS,
    payload: { user, history },
  }),
  addUserFailure: errors => ({
    type: Types.ADD_FAILURE,
    payload: { errors },
  }),
};
