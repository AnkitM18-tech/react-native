import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';

const topics = [
  {
    id: 1,
    title: 'Flat List',
    screen: 'FlatListScreen',
  },
];

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;
const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>HomeScreen</Text>
      <Button
        title="Flat List Demo"
        onPress={() => navigation.navigate('FlatListScreen')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  headerText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
