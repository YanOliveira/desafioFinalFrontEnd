import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { creators as technologiesActions } from '../ducks/technologies';

export function* loadTechnologies() {
  try {
    const { data: technologies } = yield call(api.get, 'technologies');
    yield put(technologiesActions.getTechnologiesSuccess(technologies));
  } catch (error) {
    yield put(technologiesActions.createSessionFailure('Não foi possível obter as tecnologias.'));
  }
}
