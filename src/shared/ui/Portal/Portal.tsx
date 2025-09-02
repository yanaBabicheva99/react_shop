import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    container?: HTMLElement;
    children: ReactNode;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        container = document.body,
    } = props;

    return createPortal(children, container);
};
