import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Recipe} from '../context/RecipeContext';

interface RecipeItemProps {
  recipe: Recipe;
  onPressRecipe: () => void;
  currentUserId: string | null;
  onRecipeDelete: () => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({
  recipe,
  onPressRecipe,
  currentUserId,
  onRecipeDelete,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPressRecipe}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{recipe?.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {recipe?.description}
        </Text>
        <Text style={styles.difficulty}>{recipe?.difficulty}</Text>
      </View>
      {currentUserId && recipe.createdBy === currentUserId && (
        <TouchableOpacity onPress={onRecipeDelete} style={styles.deleteBtn}>
          <Text style={styles.deleteBtnText}>Delete</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default RecipeItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#dadada',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
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
  deleteBtn: {
    backgroundColor: '#fa3412',
    position: 'absolute',
    top: 15,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
  },
  deleteBtnText: {
    color: '#fff',
    fontSize: 15,
  },
});
