<template>

  <div class="bean-details col-10 mx-auto">

    <div v-if="bean" class="row">
      <h1 class="text-center py-5">What's the Jelly Belly?</h1>
      <div class="card-wrap py-5">

        <div class="row">
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <img class="animate__animated animate__bounce" :src="bean.imageUrl" :alt="bean.flavorName" width="200" />
          </div>
          <div class="col-12 col-md-8">
            <h2 class="mb-4">{{ bean.flavorName }}</h2>
            <p>{{ bean.description }}</p>
            <p><strong>Color:</strong> <span :style="{ backgroundColor: bean.backgroundColor }" class="color-box">
                {{ bean.backgroundColor }}
              </span></p>
            <p><strong>Ingredients:</strong> {{ bean.ingredients.join(', ') }}</p>
            <div class="row">
              <div class="col-6 col-md-3 pb-2 pb-md-0">
                <strong>Gluten-Free:</strong><br> {{ bean.glutenFree ? "Yes" : "No" }}
              </div>
              <div class="col-6 col-md-3 pb-md-0">
                <strong>Sugar-Free:</strong><br> {{ bean.sugarFree ? "Yes" : "No" }}
              </div>
              <div class="col-6 col-md-3 pb-2 pb-md-0">
                <strong>Kosher:</strong><br> {{ bean.kosher ? "Yes" : "No" }}
              </div>
              <div class="col-6 col-md-3 pb-md-0">
                <strong>Seasonal:</strong><br> {{ bean.seasonal ? "Yes" : "No" }}
              </div>
            </div>


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
  </div>
</template>

<script>
import apiService from "../apiService";
import Loading from 'vue-loading-overlay';

export default {
  components: {
    Loading,
  },
  props: {
    beanId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      bean: null,
      isLoading: true,
    };
  },
  async mounted() {
    try {
      const response = await apiService.getBeanById(this.beanId);
      this.bean = response.data;
    } catch (err) {
      console.error("Failed to fetch bean details:", err);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>
