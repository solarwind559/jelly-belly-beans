<template>
  <div class="beans-list-preview">
    <div v-if="!selectedBeanId">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <div v-for="bean in beans" :key="bean.beanId" class="col" @mouseenter="addAnimation(bean.beanId)" @mouseleave="removeAnimation">
          <div class="card h-100 clickable" @click="viewBeanDetails(bean.beanId)">
            <h5 class="card-title text-center mb-3 mt-4">{{ bean.flavorName }}</h5>
            <img :src="bean.imageUrl" :alt="bean.flavorName" class="card-img-top" :class="{ 'animate__animated animate__tada': hoveredBeanId === bean.beanId }" />
            <div class="card-body">
              <p class="card-text">{{ bean.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="beans.length === 0">
      <div class="loading-container-list">
        <Loading class="text-center" v-model:active="isLoading" :color="'#e83a4b'" :height="80" :can-cancel="false" :is-full-page="true"></Loading>
      </div>
    </div>

    <BeanDetails v-if="selectedBeanId" :beanId="selectedBeanId" @close="closeBeanDetails" />
  </div>
</template>


<script>
import apiService from "../apiService";
import BeanDetails from "./BeanDetails";
import Loading from 'vue-loading-overlay';

export default {
  data() {
    return {
      hoveredBeanId: null,
      beans: [],
      selectedBeanId: null,
      filters: {
        groupName: "",
        pageIndex: 1,
        pageSize: 8,
      },
      totalPages: 0,
      error: null,
      isLoading: true,
    };
  },
  components: {
    BeanDetails,
    Loading,
  },
  methods: {
    addAnimation(beanId) {
      this.hoveredBeanId = null;
      setTimeout(() => {
        this.hoveredBeanId = beanId;
      }, 10);
    },
    removeAnimation() {
      this.hoveredBeanId = null;
    },
    viewBeanDetails(beanId) {
      this.selectedBeanId = beanId;
    },
    closeBeanDetails() {
      this.selectedBeanId = null;
    },
    async fetchBeans() {
      this.isLoading = true;
      try {
        const response = await apiService.getBeans(this.filters);
        this.beans = response.data.items; // Only fetch once without page index logic
        this.totalPages = response.data.totalPages;
      } catch (err) {
        this.error = "Failed to load beans. Please try again.";
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchBeans(); // Fetch beans when the component is mounted
  },
};
</script>
