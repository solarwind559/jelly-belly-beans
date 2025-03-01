<template>
  <div class="history-list">
    <h1 class="text-center py-5">Milestones</h1>
    <div v-if="milestones.length > 0" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div v-for="milestone in milestones" :key="milestone.mileStoneId" class="col">
        <div class="d-flex align-items-center">

          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title text-center">{{ milestone.year }}</h5>
              <p class="card-text mb-1">{{ milestone.description }}</p>
            </div>
          </div>
          <div class="arrow mb-3">
            <img :src="require('@/assets/svg-icons/arrow-strawberry.svg')" alt="Icon" width="24" height="24" />
          </div>

        </div>
      </div>
      <div class="text-center"> <img :src="require('@/assets/happy-bean.png')" alt="Icon" class="happy-bean" />
      </div>
    </div>
    <div v-if="milestones.length === 0">
      <div class="loading-container-list">
        <Loading class="text-center" v-model:active="isLoading" :color="'#e83a4b'" :height="80" :can-cancel="false"
          :is-full-page="true"></Loading>
      </div>
    </div>
    <div v-if="isFetchingMore" class="text-center my-3">
      <Loading v-model:active="isFetchingMore" :color="'#e83a4b'" :can-cancel="false" :is-full-page="false"></Loading>
    </div>
  </div>
</template>

<script>
import apiService from "../apiService";
import Loading from 'vue-loading-overlay';

export default {
  components: {
    Loading,
  },
  data() {
    return {
      milestones: [], // This will hold the "items" array from the API response
      isLoading: true,
      filters: {
        pageIndex: 1, // Current page
        pageSize: 12, // Number of milestones per page
      },
      totalPages: 0, // Total number of pages
      isFetchingMore: false, // Indicator for loading more milestones
    };
  },
  async mounted() {
    await this.fetchMilestones(); // Fetch milestones when the component is mounted
    window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll); // Remove scroll event listener when component is destroyed
  },
  methods: {
    async fetchMilestones() {
      this.isLoading = true;
      try {
        const response = await apiService.getMileStones(this.filters);
        const sortedMilestones = response.data.items.sort((a, b) => a.year - b.year); // Sort milestones by year
        if (this.filters.pageIndex === 1) {
          this.milestones = sortedMilestones; // Populate milestones array initially
        } else {
          this.milestones = [...this.milestones, ...sortedMilestones]; // Append new milestones to existing array
        }
        this.totalPages = response.data.totalPages; // Set the total number of pages
      } catch (err) {
        console.error("Failed to load milestones:", err);
      } finally {
        this.isLoading = false;
        this.isFetchingMore = false;
      }
    },
    handleScroll() {
      const bottomOfWindow = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;
      if (bottomOfWindow && !this.isFetchingMore && this.filters.pageIndex < this.totalPages) {
        this.filters.pageIndex += 1;
        this.isFetchingMore = true;
        this.fetchMilestones();
      }
    },
  },
};
</script>
