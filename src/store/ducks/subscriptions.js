import { toast } from "react-toastify";

/**
 * TYPES
 */
export const Types = {
  LOAD_REQUEST: "subscriptions/LOAD_REQUEST",
  LOAD_SUCCESS: "subscriptions/LOAD_SUCCESS",
  LOAD_FAILURE: "subscriptions/LOAD_FAILURE"
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  meetupsRegistered: [],
  meetupsNotRegistered: [],
  meetupsRecomendeds: []
};

export default function meetups(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return { ...state, loading: false };
    case Types.LOAD_FAILURE:
      action.payload.errors.map(error =>
        toast.error(error.message, { autoClose: 3000 })
      );
      return { ...state, loading: false };

    default:
      return { ...state, loading: false };
  }
}

/**
 * ACTIONS
 */
export const creators = {
  loadSubscriptionsRequest: (meetups, history) => ({
    type: Types.UPDATE_REQUEST,
    payload: { meetups, history }
  }),
  loadSubscriptionsSuccess: (user, history) => ({
    type: Types.UPDATE_SUCCESS,
    payload: { user, history }
  }),
  loadSubscriptionsFailure: errors => ({
    type: Types.UPDATE_FAILURE,
    payload: { errors }
  })
};
