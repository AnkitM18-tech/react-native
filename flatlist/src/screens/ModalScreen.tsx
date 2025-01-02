import {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ModalScreen: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>ModalScreen</Text>
      <TouchableOpacity
        onPress={() => setShowModal(!showModal)}
        style={styles.btn}>
        <Text style={styles.btnText}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        transparent={true}>
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.headerText}>Modal Component</Text>
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.btn}>
              <Text style={styles.btnText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'pink',
    padding: 10,
    alignItems: 'center',
    margin: 10,
    minWidth: 250,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '500',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
  modalView: {
    backgroundColor: '#dadada',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
