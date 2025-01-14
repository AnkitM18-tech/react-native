import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../RootNavigation';

const screens = [
  {
    id: '1',
    title: 'Todos',
    screen: 'TodoScreen',
  },
];

type ProjectScreenNavigationProps = StackNavigationProp<StackParamList, 'Home'>;

type Prop = {
  navigation: ProjectScreenNavigationProps;
};

const Projects: React.FC<Prop> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projects View</Text>
      <FlatList
        data={screens}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate(item.screen as keyof StackParamList)
            }>
            <Text style={styles.btnText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  btn: {
    backgroundColor: '#a1a1a1',
    padding: 10,
    margin: 8,
    opacity: 0.7,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
