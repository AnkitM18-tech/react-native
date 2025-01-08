import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {isValidElement, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const ReanimatedFormValidationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailAnim = useSharedValue(0);
  const passwordAnim = useSharedValue(0);
  const emailCheckMark = useSharedValue(0);
  const passwordCheckMark = useSharedValue(0);
  const emailErrorHeight = useSharedValue(0);
  const passwordErrorHeight = useSharedValue(0);

  const validateEmail = (text: string) => {
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!text) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(text)) {
      setEmailError('Invalid Email Format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (text: string) => {
    if (!text) {
      setPasswordError('Password is required');
      return false;
    } else if (text.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const changeEmail = (text: string) => {
    setEmail(text);
    // validate
    const isValidEmail = validateEmail(text);
    emailCheckMark.value = withSpring(isValidEmail ? 1 : 0, {duration: 100});

    if (!isValidEmail) {
      emailAnim.value = withSequence(
        withTiming(-10, {duration: 50}),
        withTiming(10, {duration: 100}),
        withTiming(0, {duration: 50}),
      );
      emailErrorHeight.value = withSpring(20);
    } else {
      emailErrorHeight.value = withSpring(0);
    }
  };
  const changePassword = (text: string) => {
    setPassword(text);
    // validate password
    const isValidPassword = validatePassword(text);
    passwordCheckMark.value = withSpring(isValidPassword ? 1 : 0, {
      duration: 100,
    });

    if (!isValidPassword) {
      passwordAnim.value = withSequence(
        withTiming(-10, {duration: 50}),
        withTiming(10, {duration: 100}),
        withTiming(0, {duration: 50}),
      );
      passwordErrorHeight.value = withSpring(20);
    } else {
      passwordErrorHeight.value = withSpring(0);
    }
  };
  const onSubmit = (email: string, password: string) => {};
  const submitForm = () => {
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      onSubmit(email, password);
      // whatever logic here
    } else {
      if (!isValidEmail) {
        emailAnim.value = withSequence(
          withTiming(-10, {duration: 50}),
          withTiming(10, {duration: 100}),
          withTiming(0, {duration: 50}),
        );
        emailErrorHeight.value = withSpring(20);
      }
      if (!isValidPassword) {
        passwordAnim.value = withSequence(
          withTiming(-10, {duration: 50}),
          withTiming(10, {duration: 100}),
          withTiming(0, {duration: 50}),
        );
        passwordErrorHeight.value = withSpring(20);
      }
    }
  };

  const emailAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: emailAnim.value,
        },
      ],
    };
  });
  const passwordAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: passwordAnim.value,
        },
      ],
    };
  });
  const emailCheckMarkStyle = useAnimatedStyle(() => ({
    opacity: emailCheckMark.value,
    transform: [
      {
        scale: emailCheckMark.value,
      },
      {
        rotate: `${emailCheckMark.value * 360}deg`,
      },
    ],
  }));
  const passwordCheckMarkStyle = useAnimatedStyle(() => ({
    opacity: passwordCheckMark.value,
    transform: [
      {
        scale: passwordCheckMark.value,
      },
      {
        rotate: `${passwordCheckMark.value * 360}deg`,
      },
    ],
  }));

  const emailErrorStyle = useAnimatedStyle(() => ({
    height: emailErrorHeight.value,
    opacity: emailErrorHeight.value === 0 ? 0 : 1,
    transform: [
      {
        translateY: withSpring(emailErrorHeight.value / 2),
      },
    ],
  }));
  const passwordErrorStyle = useAnimatedStyle(() => ({
    height: passwordErrorHeight.value,
    opacity: passwordErrorHeight.value === 0 ? 0 : 1,
    transform: [
      {
        translateY: withSpring(passwordErrorHeight.value / 2),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, emailAnimationStyle]}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={changeEmail}
        />
        <Animated.View style={[styles.checkMark, emailCheckMarkStyle]}>
          <Text style={styles.checkMarkText}></Text>
        </Animated.View>
      </Animated.View>
      <Animated.Text style={[styles.errorText, emailErrorStyle]}>
        {emailError}
      </Animated.Text>
      <Animated.View style={[styles.inputContainer, passwordAnimationStyle]}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
          value={password}
          onChangeText={changePassword}
        />
        <Animated.View style={[styles.checkMark, passwordCheckMarkStyle]}>
          <Text style={styles.checkMarkText}></Text>
        </Animated.View>
      </Animated.View>
      <Animated.Text style={[styles.errorText, passwordErrorStyle]}>
        {passwordError}
      </Animated.Text>
      <Pressable style={styles.submitBtn} onPress={submitForm}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ReanimatedFormValidationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    gap: 5,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  checkMark: {
    position: 'absolute',
    right: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMarkText: {
    color: '#40ad44',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff0134',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontStyle: 'italic',
  },
  submitBtn: {
    margin: 10,
    backgroundColor: '#2196f3',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  submitBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
