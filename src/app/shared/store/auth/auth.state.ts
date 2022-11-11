import { AuthUser } from 'src/app/core/features/auth/models/auth-user';

export interface AuthStoreState {
  authUser: AuthUser | null;
}

export const initialAuthStoreState: AuthStoreState = {
  authUser: null,
};
