<template>
  <div class="combinations-list">
    <h1 class="text-center py-5">Jelly Belly Combinations</h1>
    <div v-if="!selectedCombinationId && combinations.length > 0" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="combination in combinations" :key="combination.combinationId" class="col">
        <div class="card h-100" @click="viewCombinationDetails(combination.combinationId)">
          <div class="card-body">
            <h5 class="card-title">{{ combination.name }}</h5>
            <p class="card-text">{{ combination.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="combinations.length === 0">
      <div class="loading-container-list">
        <Loading class="text-center" v-model:active="isLoading" :color="'#e83a4b'" :height="80" :can-cancel="false"
          :is-full-page="true"></Loading>
      </div>
    </div>
    <!-- Render CombinationDetails component dynamically -->
    <CombinationDetails v-if="selectedCombinationId" :combinationId="selectedCombinationId" @close="closeCombinationDetails" />
  </div>
</template>

<script>
import apiService from "../apiService";
import CombinationDetails from "./CombinationDetails";
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      combinations: [],
      selectedCombinationId: null,
      isLoading: true,
    };
  },
  components: {
    CombinationDetails,
    Loading,
  },
  methods: {
    viewCombinationDetails(combinationId) {
      this.selectedCombinationId = combinationId;
    },
    closeCombinationDetails() {
      this.selectedCombinationId = null;
    },
    async fetchCombinations() {
      try {
        const response = await apiService.getCombinations();
        console.log(response.data.items); // Debugging log
        this.combinations = response.data.items;
      } catch (err) {
        console.error("Failed to load combinations:", err);
      }finally {
            this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchCombinations();
  },
};
</script>
