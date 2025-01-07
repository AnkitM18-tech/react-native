import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type ContextType = {
  startX: number;
  startY: number;
};
const ReanimatedGesturesScreen = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_, context) => {
      context.startX = translateX.value;
      context.startY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
      translateY.value = context.startY + event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.headerText}>ReanimatedGesturesScreen</Text>
        <Text style={[styles.headerText, {color: 'blue', fontSize: 18}]}>
          Drag the below Box and release it
        </Text>
        <PanGestureHandler onGestureEvent={panGestureHandler}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default ReanimatedGesturesScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
    gap: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  box: {
    width: 150,
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d31e4',
  },
});
