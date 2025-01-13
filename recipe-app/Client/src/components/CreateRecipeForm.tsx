import {Picker} from '@react-native-picker/picker';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface CreateRecipeFormProps {
  onCancel: () => void;
}

const CreateRecipeForm: React.FC<CreateRecipeFormProps> = ({onCancel}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Recipe</Text>
      <TextInput style={styles.input} placeholder="Recipe Title" />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Recipe Description"
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Difficulty</Text>
        <Picker style={styles.picker}>
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Intermediate" value="Intermediate" />
          <Picker.Item label="Advanced" value="Advanced" />
        </Picker>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={onCancel}
          style={[styles.btn, styles.cancelBtn]}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.saveBtn]}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateRecipeForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  picker: {
    flex: 1,
    height: 50,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    marginTop: 4,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    gap: 10,
  },
  btn: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#ff073a',
  },
  saveBtn: {
    backgroundColor: '#3aff09',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
