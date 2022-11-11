import { createAction, props } from '@ngrx/store';

import { AuthUser } from 'src/app/core/features/auth/models/auth-user';

export const setAuthUser = createAction(
  '[Auth] Set Auth User', // action type/key, benzersiz olmalı
  props<{ authUser: AuthUser }>() // action payload verileri
);

export const deleteAuthUser = createAction('[Auth] Delete Auth User');
