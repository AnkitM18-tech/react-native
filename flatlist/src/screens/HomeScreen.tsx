import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../RootNavigator';

const topics = [
  {
    id: 1,
    title: 'Flat List',
    screen: 'FlatListScreen',
  },
  {
    id: 2,
    title: 'Section List',
    screen: 'SectionListScreen',
  },
  {
    id: 3,
    title: 'Touchable',
    screen: 'TouchableScreen',
  },
  {
    id: 4,
    title: 'Modal',
    screen: 'ModalScreen',
  },
];

type HomeScreenNavigationProps = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProps;
};
const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.topicBtn}
            onPress={() =>
              navigation.navigate(item.screen as keyof RootStackParamsList)
            }>
            <Text style={styles.topicText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  topicBtn: {
    backgroundColor: '#3a3dff',
    padding: 10,
    margin: 8,
    borderRadius: 50,
  },
  topicText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});