import { UserRole } from '../../../../shared/const/userConsts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    inited: boolean;
}
