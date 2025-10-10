import { RouteProps } from 'react-router-dom';
import { UserRole } from '../const/userConsts';

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
    roles?: UserRole[];
}
