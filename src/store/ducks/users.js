import { toast } from 'react-toastify';

/**
 * TYPES
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',

  UPDATE_REQUEST: 'users/UPDATE_REQUEST',
  UPDATE_SUCCESS: 'users/UPDATE_SUCCESS',
  UPDATE_FAILURE: 'users/UPDATE_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  user: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      action.payload.history.push('/signin');
      toast.success('Usuário criado com sucesso, já pode fazer login !', {
        autoClose: 3000,
      });
      return { ...state, loading: false };
    case Types.ADD_FAILURE:
      action.payload.errors.map(error => toast.error(error.message, { autoClose: 3000 }));
      return { ...state, loading: false };

    case Types.UPDATE_REQUEST:
      return { ...state, loading: true };
    case Types.UPDATE_SUCCESS:
      action.payload.history.push('/');
      toast.success('Preferências atualizadas com sucesso !', {
        autoClose: 3000,
      });
      return { ...state, loading: false };
    case Types.UPDATE_FAILURE:
      action.payload.errors.map(error => toast.error(error.message, { autoClose: 3000 }));
      return { ...state, loading: false };

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

  updateUserRequest: (user, history) => ({
    type: Types.UPDATE_REQUEST,
    payload: { user, history },
  }),
  updateUserSuccess: (user, history) => ({
    type: Types.UPDATE_SUCCESS,
    payload: { user, history },
  }),
  updateUserFailure: errors => ({
    type: Types.UPDATE_FAILURE,
    payload: { errors },
  }),
};
