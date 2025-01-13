import axios from 'axios';
import {createContext, ReactNode, useContext, useState} from 'react';
import {API_URL, AuthContext} from './AuthContext';

export interface Recipe {
  _id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  createdBy: string;
  createdAt: string;
}

interface RecipeContextData {
  recipes: Recipe[];
  createRecipe: (
    recipe: Omit<Recipe, '_id' | 'createdBy' | 'createdAt'>,
  ) => Promise<void>;
  fetchRecipes: () => Promise<void>;
  fetchRecipeById: (recipeId: string) => Promise<Recipe>;
}

export const RecipeContext = createContext<RecipeContextData>(
  {} as RecipeContextData,
);

export const RecipeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const {token} = useContext(AuthContext);

  const fetchRecipes = async () => {
    try {
      const result = await axios.get(`${API_URL}/api/recipe/get`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result?.data?.success) {
        setRecipes(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRecipeById = async (recipeId: string) => {
    try {
      const result = await axios.get(`${API_URL}/api/recipe/get/${recipeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result?.data?.success) {
        return result.data.data;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const createRecipe = async (
    recipe: Omit<Recipe, '_id' | 'createdBy' | 'createdAt'>,
  ) => {
    try {
      const result = await axios.post(`${API_URL}/api/recipe/create`, recipe, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result?.data?.success) {
        setRecipes([...recipes, result?.data?.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RecipeContext.Provider
      value={{recipes, createRecipe, fetchRecipes, fetchRecipeById}}>
      {children}
    </RecipeContext.Provider>
  );
};
