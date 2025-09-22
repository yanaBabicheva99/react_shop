import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <div className={cls.btnActions}>
                <Button
                    data-testid="increment-button"
                    onClick={increment}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Инкремент')}
                </Button>
                <Button
                    data-testid="decrement-button"
                    onClick={decrement}
                    theme={ThemeButton.OUTLINE}
                >
                    {t('Декремент')}
                </Button>

            </div>
        </div>
    );
};
