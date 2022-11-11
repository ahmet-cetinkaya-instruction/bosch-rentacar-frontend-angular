import { createReducer, on } from '@ngrx/store';
import { deleteAuthUser, setAuthUser } from './auth.actions';

import { initialAuthStoreState } from './auth.state';

export const authReducer = createReducer(
  initialAuthStoreState,
  on(setAuthUser, (currentState, action) => {
    //: Componentlerin farkedebilmesi için
    //: Yeni bir referans üretmemiz gerekiyor.
    return {
      ...currentState, //: şuan ki state'i buraya kopyala
      authUser: action.authUser, //: günceleme
    };
  }),
  on(deleteAuthUser, (currentState) => {
    return {
      ...currentState,
      authUser: null,
    };
  })
);
