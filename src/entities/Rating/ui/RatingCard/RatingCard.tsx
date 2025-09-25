import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedBack?: boolean;
    onCancel?: (startsCount: number) => void;
    onAccept?: (startsCount: number, feedback?: string) => void;
}

export const RatingCard = (props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedBack,
        onAccept,
        onCancel,
    } = props;

    const { t } = useTranslation();
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [startsCount, setStarsCount] = useState(0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((starsNumber: number) => {
        setStarsCount(starsNumber);
        if (hasFeedBack) {
            setIsOpenModal(true);
        } else {
            onAccept?.(startsCount);
        }
    }, [hasFeedBack, onAccept, startsCount]);

    const cancelHandle = () => {
        setIsOpenModal(false);
        onCancel?.(startsCount);
    };

    const acceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(startsCount, feedback);
    }, [feedback, onAccept, startsCount]);

    const content = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Ваш отзыв')} value={feedback} onChange={setFeedback} />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={startsCount} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isOpenModal} onClose={cancelHandle} lazy>
                    <VStack gap="32" max>
                        {content}
                        <HStack gap="8" justify="end" max>
                            <Button theme={ThemeButton.OUTLINE} onClick={acceptHandler}>{t('Отправить')}</Button>
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandle}>{t('Закрыть')}</Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isOpenModal} onClose={cancelHandle}>
                    <VStack gap="32" max>
                        {content}
                        <VStack gap="16" max>
                            <Button
                                theme={ThemeButton.OUTLINE}
                                onClick={acceptHandler}
                                fullWidth
                            >
                                {t('Отправить')}
                            </Button>
                            <Button
                                theme={ThemeButton.OUTLINE_RED}
                                onClick={cancelHandle}
                                fullWidth
                            >
                                {t('Закрыть')}
                            </Button>
                        </VStack>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
};
