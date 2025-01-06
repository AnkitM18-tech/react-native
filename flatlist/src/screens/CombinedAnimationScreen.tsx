import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const CombinedAnimationScreen = () => {
  const moveAndRotateAnimation = useRef(new Animated.Value(0)).current;
  const pulseAnimation = useRef(new Animated.Value(1)).current;

  const combinedAnimation = () => {
    moveAndRotateAnimation.setValue(0);
    Animated.timing(moveAndRotateAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      moveAndRotateAnimation.setValue(0);
    });
  };

  const pulseAnimationMethod = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnimation, {
          toValue: 1.3,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const moveX = moveAndRotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const moveY = moveAndRotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });
  const rotate = moveAndRotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const backgroundColor = moveAndRotateAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#ec5412', '#cce812', '#1245ff'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>CombinedAnimationScreen</Text>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {translateX: moveX},
              {translateY: moveY},
              {rotate: rotate},
              {scale: pulseAnimation},
            ],
            backgroundColor,
          },
        ]}></Animated.View>
      <View style={styles.btnContainer}>
        <Button
          title="Move ,Rotate & Change Color"
          onPress={combinedAnimation}
        />
        <Button title="Pulse Animation" onPress={pulseAnimationMethod} />
      </View>
    </View>
  );
};

export default CombinedAnimationScreen;

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
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  btnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
    gap: 10,
  },
});
