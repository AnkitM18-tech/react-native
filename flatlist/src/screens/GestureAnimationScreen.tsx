import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

const GestureAnimationScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>GestureAnimationScreen</Text>
      <Text style={styles.headerText}>Drag The Box</Text>
      <Animated.View
        style={[styles.box, pan.getLayout()]}
        {...panResponder.panHandlers}>
        <Text style={styles.btnText}>Drag Me</Text>
      </Animated.View>
    </View>
  );
};

export default GestureAnimationScreen;

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
    backgroundColor: '#1f12ff',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
