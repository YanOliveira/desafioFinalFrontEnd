import { toast } from 'react-toastify';

/**
 * TYPES
 */
export const Types = {
  GET_REQUEST: 'sessions/GET_REQUEST',
  GET_SUCCESS: 'sessions/GET_SUCCESS',

  CREATE_REQUEST: 'sessions/CREATE_REQUEST',
  CREATE_SUCCESS: 'sessions/CREATE_SUCCESS',
  CREATE_FAILURE: 'sessions/CREATE_FAILURE',

  DESTROY_REQUEST: 'sessions/DESTROY_REQUEST',
  DESTROY_SUCCESS: 'sessions/DESTROY_SUCCESS',
  DESTROY_FAILURE: 'sessions/DESTROY_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
};

export default function sessions(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: false };
    case Types.GET_SUCCESS:
      if (action.payload.countSessions <= 1) {
        action.payload.history.push('/preferences');
      }
      return { ...state, loading: false };

    case Types.CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.CREATE_SUCCESS:
      toast.success('Login efetuado com sucesso !', { autoClose: 2000 });
      action.payload.history.push('/');
      return { ...state, loading: false };
    case Types.CREATE_FAILURE:
      toast.error(action.payload.error, { autoClose: 3000 });
      return { ...state, loading: true };

    case Types.DESTROY_REQUEST:
      return { ...state, loading: true };
    case Types.DESTROY_SUCCESS:
      toast.success('Até a próxima! ;)', { autoClose: 1000 });
      action.payload.history.push('/signin');
      return { ...state, loading: false };
    case Types.DESTROY_FAILURE:
      toast.error(action.payload.error, { autoClose: 3000 });
      return { ...state, loading: true };

    default:
      return { ...state, loading: false };
  }
}

/**
 * ACTIONS
 */
export const creators = {
  getSessionsRequest: history => ({
    type: Types.GET_REQUEST,
    payload: { history },
  }),
  getSessionsSuccess: (countSessions, history) => ({
    type: Types.GET_SUCCESS,
    payload: { countSessions, history },
  }),

  createSessionRequest: (user, history) => ({
    type: Types.CREATE_REQUEST,
    payload: { user, history },
  }),
  createSessionSuccess: (user, history) => ({
    type: Types.CREATE_SUCCESS,
    payload: { user, history },
  }),
  createSessionFailure: error => ({
    type: Types.CREATE_FAILURE,
    payload: { error },
  }),

  destroySessionRequest: history => ({
    type: Types.DESTROY_REQUEST,
    payload: { history },
  }),
  destroySessionSuccess: history => ({
    type: Types.DESTROY_SUCCESS,
    payload: { history },
  }),
  destroySessionFailure: error => ({
    type: Types.DESTROY_FAILURE,
    payload: { error },
  }),
};
