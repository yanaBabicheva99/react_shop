import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/AddCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getCommentFormText } from '../model/selectors/getCommentForm';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text?: string) => void;
}

const reducer: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;

    const text = useSelector(getCommentFormText);
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const handleChangeText = useCallback((value: string) => {
        dispatch(addCommentFormActions.setTextComment(value));
    }, [dispatch]);

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text);
        dispatch(addCommentFormActions.setTextComment(''));
    }, [dispatch, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    value={text}
                    placeholder={t('Введите текст комментария')}
                    onChange={handleChangeText}
                />
                <Button
                    theme={ThemeButton.OUTLINE}
                    onClick={onSendCommentHandler}
                    disabled={!text}
                    className={cls.sendBtn}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
