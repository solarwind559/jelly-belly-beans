<template>
  <div v-if="recipe">
    <h2>{{ recipe.name }}</h2>
    <p>{{ recipe.description }}</p>
    <div class="row col-12 col-md-6">
      <div v-if="recipe.prepTime.length > 0" class="col-3">
        <p><strong> Prep time: </strong><br>{{ recipe.prepTime }}</p>
      </div>
      <div v-if="recipe.cookTime.length > 0" class="col-3">
        <p><strong>Cooking time: </strong><br>{{ recipe.cookTime }}</p>
      </div>
      <div v-if="recipe.totalTime.length > 0" class="col-3">
        <p><strong>Total time: </strong><br>{{ recipe.totalTime }}</p>
      </div>
      <div v-if="recipe.makingAmount.length > 0" class="col-3">
        <p><strong>Servings: </strong><br>{{ recipe.makingAmount }}</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <div class="recipe-img-wrap">
          <img :src="recipe.imageUrl" :alt="recipe.name" class="recipe-img mb-3" />
        </div>
        <h5>Directions:</h5>
        <ol>
          <li v-for="(direction, index) in recipe.directions" :key="index">
            {{ direction }}
          </li>
        </ol>

      </div>
      <div class="col-12 col-md-6">
        <h5>Ingredients:</h5>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>

        <ul v-if="recipe.addition > 0">
          <h5>Additions:</h5>
          <li v-for="(addition, index) in allAdditions" :key="index">
            {{ addition }}
          </li>
        </ul>

        <div v-if="recipe.tips > 0">
          <h5>Tips:</h5>
          <ul v-if="recipe.tips && recipe.tips.length > 0">
            <li v-for="(tip, index) in recipe.tips" :key="'tip-' + index">
              {{ tip }}
            </li>
          </ul>
        </div>

      </div>

    </div>
    <div class="my-4">
        <button class="arrow-btn" @click="$emit('close')"> 
            <img :src="require('@/assets/svg-icons/arrow-strawberry-back.svg')" alt="Icon" width="24" height="24" />
        </button>
    </div>
  </div>
  <div v-else>
    <div class="loading-container">
      <Loading class="text-center" v-model:active="isLoading" :color="'#e83a4b'" :height="80" :can-cancel="false"
        :is-full-page="true"></Loading>
    </div>
  </div>
</template>


<script>
import apiService from "../apiService";
import Loading from 'vue-loading-overlay';

export default {
  props: {
    recipeId: {
      type: Number,
      required: true,
    },
  },
  components: {
    Loading,
  },
  data() {
    return {
      recipe: null,
      additions1: [],
      additions2: [],
      additions3: [],
      directions: [],
      tips: [], // Stores the recipe details
      isLoading: true,
    };
  },
  computed: {
    // Combine all non-empty additions into one array
    allAdditions() {
      return [
        ...(this.recipe.additions1 || []),
        ...(this.recipe.additions2 || []),
        ...(this.recipe.additions3 || []),
      ].filter(addition => addition); // Remove any empty or falsy values
    },
  },
  async mounted() {
    try {
      const response = await apiService.getRecipeById(this.recipeId);
      console.log("API Response:", response.data); // Log the response for debugging
      this.recipe = response.data; // Assign the API response to `recipe`
    } catch (err) {
      console.error("Failed to fetch recipe details:", err); // Log any errors
      this.recipe = null; // Ensure `recipe` remains null if the call fails
    } finally {
      this.isLoading = false;
    }
  }


};
</script>