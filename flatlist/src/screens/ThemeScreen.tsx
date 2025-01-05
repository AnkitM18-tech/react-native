import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../context/ThemeContext';

const ThemeScreen: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#0a0b0c' : '#dadada'},
      ]}>
      <Text
        style={[
          styles.headerText,
          {
            color: isDarkMode ? 'white' : 'black',
          },
        ]}>
        ThemeScreen
      </Text>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor={'#3e3e3e'}
      />
    </View>
  );
};

export default ThemeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
