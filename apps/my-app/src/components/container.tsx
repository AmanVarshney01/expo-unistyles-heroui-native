import { cn } from 'heroui-native';
import { type FC, type PropsWithChildren } from 'react';
import { Platform, View, type ViewProps } from 'react-native';
import Animated, { type AnimatedProps } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const AnimatedView = Animated.createAnimatedComponent(View);

interface Props extends AnimatedProps<ViewProps> {
    className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
    children,
    className,
    ...props
}) => {
    const insets = useSafeAreaInsets();

    return (
        <AnimatedView
            className={cn('flex-1 bg-background', className)}
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom + 32,
            }}
            {...props}
        >
            {children}
        </AnimatedView>
    );
};

