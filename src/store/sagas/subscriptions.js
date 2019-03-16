import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { creators as subscriptionsActions } from '../ducks/subscriptions';

export function* loadRegistereds(action) {
  try {
    const {
      data: { data },
    } = yield call(api.get, `subscriptions?registered=true&page=${action.payload.page}`);
    yield put(subscriptionsActions.loadRegisteredsSuccess(data));
  } catch (error) {
    yield put(subscriptionsActions.loadRegisteredsFailure(error.response.data));
  }
}

export function* loadNotRegistereds(action) {
  try {
    const {
      data: { data },
    } = yield call(api.get, `subscriptions?registered=false&page=${action.payload.page}`);
    yield put(subscriptionsActions.loadNotRegisteredsSuccess(data));
  } catch (error) {
    yield put(subscriptionsActions.loadNotRegisteredsFailure(error.response.data));
  }
}

export function* loadRecomendeds(action) {
  try {
    const {
      data: { data },
    } = yield call(api.get, `subscriptions?page=${action.payload.page}`);
    yield put(subscriptionsActions.loadRecomendedsSuccess(data));
  } catch (error) {
    yield put(subscriptionsActions.loadRecomendedsFailure(error.response.data));
  }
}
