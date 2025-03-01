<template>
    <div>
        <h1 class="text-center py-5">Jelly Belly Facts</h1>
        <div v-if="facts.length > 0" class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            <div v-for="fact in facts" :key="fact.factId" class="col">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">{{ fact.factId }}. {{ fact.title }}</h5>
                        <p class="card-text">{{ fact.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="facts.length === 0">
            <div class="loading-container-list">
                <Loading class="text-center" v-model:active="isLoading" :color="'#e83a4b'" :height="80"
                    :can-cancel="false" :is-full-page="true"></Loading>
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
    data() {
        return {
            facts: [],
            isLoading: true,
        };
    },
    async mounted() {
        try {
            const response = await apiService.getFacts();
            console.log(response.data.items); // Debug log to confirm items array exists
            this.facts = response.data.items; // Assign the "items" array to facts
        } catch (err) {
            console.error("Failed to load facts:", err);
        } finally {
            this.isLoading = false;
        }
    },


};
</script>
