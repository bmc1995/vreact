import { useSelector } from 'react-redux';
import { RootState } from '../../app/redux/store';
import { RoleType } from '../../common/models/role';

export const useRBAC = (component: React.ReactNode, validRoles: RoleType[]) => {
  const role = useSelector((state: RootState) => state.auth.user?.role || '');

  if (validRoles.includes(role)) {
    return component;
  }
  return null;
};
