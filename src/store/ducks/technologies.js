import { toast } from 'react-toastify';

/**
 * TYPES
 */
export const Types = {
  GET_REQUEST: 'technologies/GET_REQUEST',
  GET_SUCCESS: 'technologies/GET_SUCCESS',
  GET_FAILURE: 'technologies/GET_FAILURE',
};

/**
 * REDUCER
 */
const INITIAL_STATE = {
  loading: false,
  technologies: [],
};

export default function technologies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, technologies: action.payload.techs };
    case Types.GET_FAILURE:
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
  getTechnologiesRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getTechnologiesSuccess: techs => ({
    type: Types.GET_SUCCESS,
    payload: { techs },
  }),
  getTechnologiesFailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error },
  }),
};
