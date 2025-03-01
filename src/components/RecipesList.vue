<template>
  <div>
    <h1 class="text-center py-5">Jelly Belly Recipes</h1>
    <div v-if="!selectedRecipeId && recipes.length > 0" class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="recipe in recipes" :key="recipe.recipeId" class="col">
        <div class="card h-100 clickable" @click="viewRecipeDetails(recipe.recipeId)">
          <div class="card-body">
            <h5 class="card-title">{{ recipe.name }}</h5>
            <p class="card-text">{{ recipe.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="recipes.length === 0">
      <div class="loading-container-list">
        <Loading class="text-center" v-model:active="isLoading" :color="'#e83a4b'" :height="80" :can-cancel="false"
          :is-full-page="true"></Loading>
      </div>
    </div>

    <!-- Render RecipeDetails component dynamically -->
    <RecipeDetails v-if="selectedRecipeId" :recipeId="selectedRecipeId" @close="selectedRecipeId = null" />
  </div>
</template>
<script>
import apiService from "../apiService";
import RecipeDetails from "./RecipeDetails";
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      recipes: [], // List of recipes
      selectedRecipeId: null, // Stores the ID of the selected recipe
      isLoading: true,
    };
  },
  components: {
    RecipeDetails, // Dynamically rendering the RecipeDetails component
    Loading,
  },
  methods: {
    viewRecipeDetails(recipeId) {
      this.selectedRecipeId = recipeId; // Set the selected recipe ID
    },
    async fetchRecipes() {
      try {
        const response = await apiService.getRecipes({ pageIndex: 1, pageSize: 10 }); // API call with pagination
        this.recipes = response.data.items; // Assign recipes to the array
      } catch (err) {
        console.error("Failed to load recipes:", err); // Log errors
      } finally {
            this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchRecipes(); // Load recipes on mount
  },
};
</script>
