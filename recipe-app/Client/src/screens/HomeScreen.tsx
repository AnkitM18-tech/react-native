import {useContext, useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../navigation/RootNavigator';
import CreateRecipeForm from '../components/CreateRecipeForm';
import {Recipe, RecipeContext} from '../context/RecipeContext';
import RecipeItem from '../components/RecipeItem';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'Home'
>;

interface HomeScreenProp {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProp> = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const {userId, signOut} = useContext(AuthContext);
  const logoutUser = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await signOut();
          navigation.replace('Login');
        },
      },
    ]);
  };

  const {recipes, createRecipe, fetchRecipes, deleteRecipe} =
    useContext(RecipeContext);
  const saveRecipe = async (
    recipe: Omit<Recipe, '_id' | 'createdBy' | 'createdAt'>,
  ) => {
    createRecipe(recipe);
    setShowModal(false);
  };

  const removeRecipe = async (id: string) => {
    await deleteRecipe(id);
    await fetchRecipes();
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Search Recipes ..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.iconBtn}>
          <Text style={styles.iconBtnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn} onPress={logoutUser}>
          <Text style={styles.logoutBtnText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* render all recipes */}
      {filteredRecipes.length > 0 ? (
        <FlatList
          data={filteredRecipes}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <RecipeItem
              onPressRecipe={() =>
                navigation.navigate('RecipeDetails', {recipeId: item._id})
              }
              recipe={item}
              currentUserId={userId}
              onRecipeDelete={() => removeRecipe(item._id)}
            />
          )}
        />
      ) : (
        <View
          style={[styles.container, {alignItems: 'center', paddingTop: 20}]}>
          <Text style={[styles.iconBtnText, {color: '#000'}]}>
            No Recipe matches the Search Query ...
          </Text>
        </View>
      )}
      {/* Modal for creating new recipe */}
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <CreateRecipeForm
          onCancel={() => setShowModal(false)}
          onSave={saveRecipe}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#007aff',
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginRight: 15,
  },
  iconBtn: {
    width: 45,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#0aff32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBtnText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  logoutBtn: {
    padding: 12,
    backgroundColor: '#ff070a',
    marginLeft: 15,
    borderRadius: 20,
  },
  logoutBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
