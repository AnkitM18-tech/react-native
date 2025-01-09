import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Projects: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Projects</Text>
    </View>
  );
};

export default Projects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
