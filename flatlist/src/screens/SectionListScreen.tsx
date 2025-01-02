import {SectionList, StyleSheet, Text, View} from 'react-native';

const SECTION_DATA = [
  {
    title: 'Men',
    data: ['Shirt', 'T-Shirt', 'Chinos', 'Jeans', 'Pyjamas', 'Shoes'],
  },
  {
    title: 'Women',
    data: ['Shirt', 'T-Shirt', 'Chinos', 'Jeans', 'Pyjamas', 'Shoes'],
  },
  {
    title: 'Kids',
    data: ['Shirt', 'T-Shirt', 'Chinos', 'Jeans', 'Pyjamas', 'Shoes'],
  },
];
const SectionListScreen: React.FC = () => {
  const renderData = ({item}: {item: string}) => (
    <View style={styles.item}>
      <Text style={styles.sectionText}>{item}</Text>
    </View>
  );
  const renderHeader = ({section: {title}}: {section: {title: string}}) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SectionListScreen</Text>
      <SectionList
        sections={SECTION_DATA}
        renderSectionHeader={renderHeader}
        renderItem={renderData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default SectionListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  headerText: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionHeader: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'green',
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    width: 100,
    borderWidth: 1,
    borderColor: '#dadada',
    backgroundColor: 'pink',
    margin: 5,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
