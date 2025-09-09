import { DropdownDirection } from 'shared/types/ui';
import cls from './popup.module.scss';

export const dropdownDirectionClasses: Record<DropdownDirection, string> = {
    'top left': cls.directionTopLeft,
    'top right': cls.directionTopRight,
    'bottom left': cls.directionBottomLeft,
    'bottom right': cls.directionBottomRight,
};
