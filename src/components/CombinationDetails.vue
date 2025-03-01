<template>
    <div class="combination-details col-10 mx-auto">
      <div v-if="combination">
        <h2 class="mb-4">{{ combination.name }}</h2>
        <ul>
          <li v-for="(tag, index) in combination.tag" :key="index">{{ tag }}</li>
        </ul>
        <button class="btn btn-secondary mt-3" @click="$emit('close')">Back</button>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center align-items-center vh-100">
          <Loading v-model:active="isLoading" :color="'#e83a4b'" :can-cancel="false" :is-full-page="true"></Loading>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import apiService from "../apiService";
  import Loading from 'vue-loading-overlay';
  
  export default {
    props: {
      combinationId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        combination: null,
        isLoading: true,
      };
    },
    components: {
      Loading,
    },
    async mounted() {
      try {
        const response = await apiService.getCombinationId(this.combinationId);
        this.combination = response.data;
      } catch (err) {
        console.error("Failed to fetch combination details:", err);
      } finally {
        this.isLoading = false;
      }
    },
  };
  </script>