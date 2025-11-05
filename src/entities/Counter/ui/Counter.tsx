import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import cls from './Counter.module.scss';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { decrement, increment } = useCounterActions();
    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <div className={cls.btnActions}>
                <Button data-testid="increment-button" onClick={handleIncrement} theme={ThemeButton.OUTLINE}>
                    {t('Инкремент')}
                </Button>
                <Button data-testid="decrement-button" onClick={handleDecrement} theme={ThemeButton.OUTLINE}>
                    {t('Декремент')}
                </Button>
            </div>
        </div>
    );
};
