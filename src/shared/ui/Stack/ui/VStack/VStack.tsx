import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
    const { children, align = 'start', ...rest } = props;

    return (
        <Flex direction="column" align={align} {...rest}>
            {children}
        </Flex>
    );
};
