<template>
  <div class="d-flex flex-column min-vh-100">

    <NavbarMain :activeComponent="selectedComponent" @changeComponent="changeComponent" />

    <!-- Dynamic Content -->
    <div class="container flex-grow-1">
      <!-- <component :is="selectedComponent" /> -->
      <component :is="selectedComponent" @changeComponent="changeComponent" />
    </div>

    <footer class="footer bg-pale py-3 mt-auto">
      <NavbarFooter :activeComponent="selectedComponent" @changeComponent="changeComponent" />
      <p class="text-center mb-0 px-2">
        Copyright © 2023 All Rights Reserved, Object-ions
      </p>
    </footer>
  </div>
</template>

<script>
import NavbarMain from './components/NavbarMain.vue';
import NavbarFooter from './components/NavbarFooter.vue';
import HomePage from './components/HomePage.vue';
import BeansList from './components/BeansList.vue';
import FactsList from './components/FactsList.vue';
import RecipesList from './components/RecipesList.vue';
import CombinationsList from './components/CombinationsList.vue';
import HistoryList from './components/HistoryList.vue';

export default {
  data() {
    return {
      selectedComponent: "HomePage", // Default component
    };
  },
  components: {
    NavbarMain,
    NavbarFooter,
    HomePage,
    BeansList,
    FactsList,
    RecipesList,
    CombinationsList,
    HistoryList,
  },
  methods: {
    changeComponent(component) {
      this.selectedComponent = component; // Dynamically switch the component
    },
  },
};
</script>
