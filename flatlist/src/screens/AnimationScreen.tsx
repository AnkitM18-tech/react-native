import {
  Animated,
  Button,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';

const AnimationScreen = () => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const translateAnimation = useRef(new Animated.Value(0)).current;
  const translateX = () => {
    Animated.timing(translateAnimation, {
      toValue: 100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };
  const translateNegX = () => {
    Animated.timing(translateAnimation, {
      toValue: -100,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };
  const resetTranslate = () => {
    Animated.timing(translateAnimation, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };

  const scaleAnimation = useRef(new Animated.Value(1)).current;
  const scale = () => {
    Animated.sequence([
      Animated.timing(scaleAnimation, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateAnimation = useRef(new Animated.Value(0)).current;
  const rotate = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
  };
  const spin = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const springAnimation = useRef(new Animated.Value(0)).current;
  const spring = () => {
    Animated.spring(springAnimation, {
      toValue: 100,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start(() => {
      springAnimation.setValue(0);
    });
  };

  const bounceAnimation = useRef(new Animated.Value(0)).current;
  const bounce = () => {
    Animated.sequence([
      Animated.spring(bounceAnimation, {
        toValue: -20,
        friction: 5,
        tension: 30,
        useNativeDriver: true,
      }),
      Animated.spring(bounceAnimation, {
        toValue: 0,
        friction: 5,
        tension: 30,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const interpolateAnimation = useRef(new Animated.Value(0)).current;
  const startInterpolateAnimation = () => {
    Animated.timing(interpolateAnimation, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: false,
    }).start(() => interpolateAnimation.setValue(0));
  };
  const backgroundColor = interpolateAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#e01818', '#1616e2', '#12e214'],
  });
  const interpolateRotate = interpolateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const borderRadius = interpolateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 100],
  });
  const size = interpolateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Basic Animations</Text>

      {/* Fade Animation */}
      <Text style={styles.headerText}>Fade In and Fade Out Animation</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.fadeBox,
            {opacity: fadeAnimation},
          ]}></Animated.View>
        <View style={styles.btnContainer}>
          <Button onPress={fadeIn} title="Fade In" />
          <Button onPress={fadeOut} title="Fade Out" />
        </View>
      </View>

      {/* Transaltion Animation */}
      <Text style={styles.headerText}>Translation Animation</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.translateBox,
            {
              transform: [
                {
                  translateX: translateAnimation,
                },
              ],
            },
          ]}></Animated.View>
        <View style={styles.btnContainer}>
          <Button onPress={translateNegX} title="Translate -X" />
          <Button onPress={resetTranslate} title="Reset" />
          <Button onPress={translateX} title="Translate +X" />
        </View>
      </View>

      {/* Scale Animation */}
      <Text style={styles.headerText}>Scale Animation</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.scaleBox,
            {
              transform: [
                {
                  scale: scaleAnimation,
                },
              ],
            },
          ]}></Animated.View>
        <View style={styles.btnContainer}>
          <Button onPress={scale} title="Scale" />
        </View>
      </View>

      {/* Rotate Animation */}
      <Text style={styles.headerText}>Rotate Animation</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.rotateBox,
            {
              transform: [
                {
                  rotate: spin,
                },
              ],
            },
          ]}></Animated.View>
        <View style={styles.btnContainer}>
          <Button onPress={rotate} title="Rotate" />
        </View>
      </View>

      {/* Spring Animation */}
      <Text style={styles.headerText}>Spring Animation</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.springBox,
            {
              transform: [
                {
                  translateX: springAnimation,
                },
              ],
            },
          ]}></Animated.View>
        <View style={styles.btnContainer}>
          <Button onPress={spring} title="Spring" />
        </View>
      </View>

      {/* Bounce Animation */}
      <Text style={styles.headerText}>Bounce Animation</Text>
      <View style={styles.demoContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.bounceBox,
            {
              transform: [
                {
                  translateY: bounceAnimation,
                },
              ],
            },
          ]}></Animated.View>
        <View style={styles.btnContainer}>
          <Button onPress={bounce} title="Bounce" />
        </View>
      </View>

      {/* Interpolation */}
      <Text style={styles.headerText}>Interpolation</Text>
      <Animated.View
        style={[
          styles.box,
          {
            backgroundColor,
            borderRadius,
            width: size,
            height: size,
            transform: [{rotate: interpolateRotate}],
          },
        ]}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Interpolate Me!</Text>
      </Animated.View>
      <Button onPress={startInterpolateAnimation} title="Start Animation" />
    </ScrollView>
  );
};

export default AnimationScreen;

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
  demoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  btn: {
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10,
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
  fadeBox: {
    backgroundColor: '#3498db',
  },
  translateBox: {
    backgroundColor: '#ff0310',
  },
  scaleBox: {
    backgroundColor: '#ffff10',
  },
  rotateBox: {
    backgroundColor: '#ff10ff',
  },
  springBox: {
    backgroundColor: '#30ff3e',
  },
  bounceBox: {
    backgroundColor: '#3033f3',
  },
});
