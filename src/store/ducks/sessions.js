import { toast } from 'react-toastify';
import { login } from '../../services/auth';

/**
 * TYPES
 */
export const Types = {
  CREATE_REQUEST: 'sessions/CREATE_REQUEST',
  CREATE_SUCCESS: 'sessions/CREATE_SUCCESS',
  CREATE_FAILURE: 'sessions/CREATE_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
};

export default function sessions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.CREATE_SUCCESS:
      toast.success('Login efetuado com sucesso !');
      login(action.payload.token);
      action.payload.history.push('/');
      return { ...state, loading: false };
    case Types.CREATE_FAILURE:
      toast.error(action.payload.error);
      return { ...state, loading: true };
    default:
      return { ...state, loading: false };
  }
}

/**
 * ACTIONS
 */
export const creators = {
  createSessionRequest: (user, history) => ({
    type: Types.CREATE_REQUEST,
    payload: { user, history },
  }),
  createSessionSuccess: (token, history) => ({
    type: Types.CREATE_SUCCESS,
    payload: { token, history },
  }),
  createSessionFailure: error => ({
    type: Types.CREATE_FAILURE,
    payload: { error },
  }),
};
