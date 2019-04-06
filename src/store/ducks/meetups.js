import { toast } from 'react-toastify';

/**
 * TYPES
 */
export const Types = {
  ADD_REQUEST: 'meetups/ADD_REQUEST',
  ADD_SUCCESS: 'meetups/ADD_SUCCESS',
  ADD_FAILURE: 'meetups/ADD_FAILURE',

  SHOW_REQUEST: 'meetups/SHOW_REQUEST',
  SHOW_SUCCESS: 'meetups/SHOW_SUCCESS',
  SHOW_FAILURE: 'meetups/SHOW_FAILURE',

  UPLOAD_REQUEST: 'meetups/UPLOAD_REQUEST',
  UPLOAD_FAILURE: 'meetups/UPLOAD_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  meetup: [],
};

export default function meetups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      toast.success('Meetup criado com sucesso !', {
        autoClose: 3000,
      });
      return { ...state, loading: false };
    case Types.ADD_FAILURE:
      action.payload.errors.map(error => toast.error(error.message, { autoClose: 3000 }));
      return { ...state, loading: false };

    case Types.SHOW_REQUEST:
      return { ...state, loading: true };
    case Types.SHOW_SUCCESS:
      return { ...state, loading: false, meetup: action.payload.meetup };
    case Types.SHOW_FAILURE:
      toast.error(action.payload.error.message, { autoClose: 3000 });
      return { ...state, loading: false };
    case Types.UPLOAD_REQUEST:
      return { ...state, loading: true };
    case Types.UPLOAD_FAILURE:
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
  addMeetupRequest: (meetup, history) => ({
    type: Types.ADD_REQUEST,
    payload: { meetup, history },
  }),
  addMeetupSuccess: (meetup, history) => ({
    type: Types.ADD_SUCCESS,
    payload: { meetup, history },
  }),
  addMeetupFailure: errors => ({
    type: Types.ADD_FAILURE,
    payload: { errors },
  }),

  showMeetupRequest: (id, history) => ({
    type: Types.SHOW_REQUEST,
    payload: { id, history },
  }),
  showMeetupSuccess: meetup => ({
    type: Types.SHOW_SUCCESS,
    payload: { meetup },
  }),
  showMeetupFailure: error => ({
    type: Types.SHOW_FAILURE,
    payload: { error },
  }),

  uploadRequest: (meetup, history) => ({
    type: Types.UPLOAD_REQUEST,
    payload: { meetup, history },
  }),
  uploadFailure: errors => ({
    type: Types.UPLOAD_FAILURE,
    payload: { errors },
  }),
};
