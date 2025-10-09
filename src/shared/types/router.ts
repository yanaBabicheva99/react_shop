import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export interface AppRouteProps extends RouteProps {
    authOnly?: boolean;
    roles?: UserRole[];
}
