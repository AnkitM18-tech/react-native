import {RouteProp} from '@react-navigation/native';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RootStackParamsList} from '../navigation/RootNavigator';
import {useContext, useEffect, useState} from 'react';
import {Recipe, RecipeContext} from '../context/RecipeContext';

type RecipeDetailsScreenRouteProp = RouteProp<
  RootStackParamsList,
  'RecipeDetails'
>;

interface RecipeDetailsScreenProps {
  route: RecipeDetailsScreenRouteProp;
}

const RecipeDetailsScreen: React.FC<RecipeDetailsScreenProps> = ({route}) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const {recipeId} = route.params;
  const {fetchRecipeById} = useContext(RecipeContext);

  useEffect(() => {
    const fetchRecipe = async () => {
      const fetchedRecipe = await fetchRecipeById(recipeId);
      setRecipe(fetchedRecipe);
    };
    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007aff" />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Title : {recipe?.title}</Text>
      <Text style={styles.description}>
        Description : {recipe?.description}
      </Text>
      <Text style={styles.difficulty}>Difficulty : {recipe?.difficulty}</Text>
    </ScrollView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#dadada',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8,
  },
  description: {
    fontSize: 20,
    color: '#0a0a0a',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  difficulty: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007afd',
    fontStyle: 'italic',
    marginBottom: 8,
  },
});
