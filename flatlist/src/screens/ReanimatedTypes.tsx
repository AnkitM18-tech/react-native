import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedTypes = () => {
  const translateX = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          scale: scale.value,
        },
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  //   Timing
  const timingAnimation = () => {
    translateX.value = withTiming(200, {
      duration: 1500,
      easing: Easing.out(Easing.exp),
    });
  };
  //   Spring
  const springAnimation = () => {
    scale.value = withSpring(2, {damping: 10, stiffness: 100});
  };
  //   Decay
  const decayAnimation = () => {
    translateX.value = withDecay({
      velocity: 200,
      clamp: [0, 300],
    });
  };
  //   Sequence
  const sequenceAnimation = () => {
    rotate.value = withSequence(
      withTiming(180, {duration: 1000}),
      withTiming(0, {duration: 500}),
    );
  };
  //   Delay
  const delayAnimation = () => {
    translateX.value = withDelay(1000, withSpring(200));
  };
  //   Repeat
  const repeatAnimation = () => {
    scale.value = withRepeat(withTiming(1.2, {duration: 1500}), 6, true);
  };
  //   Reset
  const resetAnimation = () => {
    translateX.value = withTiming(0);
    scale.value = withSpring(1);
    rotate.value = withTiming(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Reanimated Animation Types</Text>
      <Animated.View style={[styles.box, boxStyle]} />
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn} onPress={timingAnimation}>
          <Text style={styles.btnText}>Timing</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={springAnimation}>
          <Text style={styles.btnText}>Spring</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={decayAnimation}>
          <Text style={styles.btnText}>Decay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={sequenceAnimation}>
          <Text style={styles.btnText}>Sequence</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={repeatAnimation}>
          <Text style={styles.btnText}>Repeat</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={delayAnimation}>
          <Text style={styles.btnText}>Delay</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={resetAnimation}>
          <Text style={styles.btnText}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReanimatedTypes;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d31e4',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 20,
  },
  btn: {
    backgroundColor: 'pink',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
