import { useCallback, useMemo, useState } from 'react';

type TMouseHoverBind = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type TMouseHoverResult = [boolean, TMouseHoverBind]

export function useHover() {
    const [hover, setHover] = useState(false);

    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, []);

    return useMemo<TMouseHoverResult>(() => [hover, {
        onMouseEnter,
        onMouseLeave,
    }], [hover, onMouseEnter, onMouseLeave]);
}
