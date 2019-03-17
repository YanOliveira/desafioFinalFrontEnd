import { toast } from 'react-toastify';

/**
 * TYPES
 */
export const Types = {
  LOAD_REGISTEREDS_REQUEST: 'subscriptions/LOAD_REGISTEREDS_REQUEST',
  LOAD_REGISTEREDS_SUCCESS: 'subscriptions/LOAD_REGISTEREDS_SUCCESS',
  LOAD_REGISTEREDS_FAILURE: 'subscriptions/LOAD_REGISTEREDS_FAILURE',

  LOAD_NOTREGISTEREDS_REQUEST: 'subscriptions/LOAD_NOTREGISTEREDS_REQUEST',
  LOAD_NOTREGISTEREDS_SUCCESS: 'subscriptions/LOAD_NOTREGISTEREDS_SUCCESS',
  LOAD_NOTREGISTEREDS_FAILURE: 'subscriptions/LOAD_NOTREGISTEREDS_FAILURE',

  LOAD_RECOMENDEDS_REQUEST: 'subscriptions/LOAD_RECOMENDEDS_REQUEST',
  LOAD_RECOMENDEDS_SUCCESS: 'subscriptions/LOAD_RECOMENDEDS_SUCCESS',
  LOAD_RECOMENDEDS_FAILURE: 'subscriptions/LOAD_RECOMENDEDS_FAILURE',

  ADD_REQUEST: 'subscriptions/ADD_REQUEST',
  ADD_SUCCESS: 'subscriptions/ADD_SUCCESS',
  ADD_FAILURE: 'subscriptions/ADD_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  registereds: [],
  notRegistereds: [],
  recomendeds: [],
};

export default function meetups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REGISTEREDS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_REGISTEREDS_SUCCESS:
      return { ...state, loading: false, registereds: action.payload.meetups };
    case Types.LOAD_REGISTEREDS_FAILURE:
      action.payload.errors.map(error => toast.error(error.message, { autoClose: 3000 }));
      return { ...state, loading: false };

    case Types.LOAD_NOTREGISTEREDS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_NOTREGISTEREDS_SUCCESS:
      return { ...state, loading: false, notRegistereds: action.payload.meetups };
    case Types.LOAD_NOTREGISTEREDS_FAILURE:
      action.payload.errors.map(error => toast.error(error.message, { autoClose: 3000 }));
      return { ...state, loading: false };

    case Types.LOAD_RECOMENDEDS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_RECOMENDEDS_SUCCESS:
      return { ...state, loading: false, recomendeds: action.payload.meetups };
    case Types.LOAD_RECOMENDEDS_FAILURE:
      action.payload.errors.map(error => toast.error(error.message, { autoClose: 3000 }));
      return { ...state, loading: false };

    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      toast.success('Inscrição realizada com sucesso ! :)', { autoClose: 3000 });
      return { ...state, loading: false };
    case Types.ADD_FAILURE:
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
  loadRegisteredsRequest: page => ({
    type: Types.LOAD_REGISTEREDS_REQUEST,
    payload: { page },
  }),
  loadRegisteredsSuccess: meetups => ({
    type: Types.LOAD_REGISTEREDS_SUCCESS,
    payload: { meetups },
  }),
  loadRegisteredsFailure: errors => ({
    type: Types.LOAD_REGISTEREDS_FAILURE,
    payload: { errors },
  }),

  loadNotRegisteredsRequest: page => ({
    type: Types.LOAD_NOTREGISTEREDS_REQUEST,
    payload: { page },
  }),
  loadNotRegisteredsSuccess: meetups => ({
    type: Types.LOAD_NOTREGISTEREDS_SUCCESS,
    payload: { meetups },
  }),
  loadNotRegisteredsFailure: errors => ({
    type: Types.LOAD_NOTREGISTEREDS_FAILURE,
    payload: { errors },
  }),

  loadRecomendedsRequest: page => ({
    type: Types.LOAD_RECOMENDEDS_REQUEST,
    payload: { page },
  }),
  loadRecomendedsSuccess: meetups => ({
    type: Types.LOAD_RECOMENDEDS_SUCCESS,
    payload: { meetups },
  }),
  loadRecomendedsFailure: errors => ({
    type: Types.LOAD_RECOMENDEDS_FAILURE,
    payload: { errors },
  }),

  createSubscriptionRequest: meetup_id => ({
    type: Types.ADD_REQUEST,
    payload: { meetup_id },
  }),
  createSubscriptionSuccess: () => ({
    type: Types.ADD_SUCCESS,
  }),
  createSubscriptionFailure: errors => ({
    type: Types.ADD_FAILURE,
    payload: { errors },
  }),
};
