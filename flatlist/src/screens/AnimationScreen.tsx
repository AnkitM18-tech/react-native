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
  const reset = () => {
    Animated.timing(translateAnimation, {
      toValue: 0,
      duration: 1000,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start();
  };

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
          <Button onPress={translateX} title="Translate +X" />
          <Button onPress={reset} title="Reset" />
          <Button onPress={translateNegX} title="Translate -X" />
        </View>
      </View>
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
});
