import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { creators as subscriptionsActions } from '../ducks/subscriptions';

export function* loadRegistereds(action) {
  try {
    const {
      data: { data, lastPage },
    } = yield call(
      api.get,
      `subscriptions?registered=true&page=${action.payload.page}&search=${action.payload.search
        || ''}`,
    );
    yield put(subscriptionsActions.loadRegisteredsSuccess(data, lastPage));
  } catch (error) {
    yield put(subscriptionsActions.loadRegisteredsFailure(error.response.data));
  }
}

export function* loadNotRegistereds(action) {
  try {
    const {
      data: { data, lastPage },
    } = yield call(
      api.get,
      `subscriptions?registered=false&page=${action.payload.page}&search=${action.payload.search
        || ''}`,
    );
    console.tron.log(action.payload.page);
    yield put(subscriptionsActions.loadNotRegisteredsSuccess(data, lastPage));
  } catch (error) {
    yield put(subscriptionsActions.loadNotRegisteredsFailure(error.response.data));
  }
}

export function* loadRecomendeds(action) {
  try {
    const {
      data: { data, lastPage },
    } = yield call(
      api.get,
      `subscriptions?page=${action.payload.page}&search=${action.payload.search || ''}`,
    );
    yield put(subscriptionsActions.loadRecomendedsSuccess(data, lastPage));
  } catch (error) {
    yield put(subscriptionsActions.loadRecomendedsFailure(error.response.data));
  }
}

export function* createSubscription(action) {
  try {
    yield call(api.post, `subscriptions/${action.payload.meetup_id}`);
    yield put(subscriptionsActions.createSubscriptionSuccess());
  } catch (error) {
    yield put(subscriptionsActions.createSubscriptionFailure(error.response.data));
  }
}
