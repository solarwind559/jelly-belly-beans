<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-0">
        <div class="container-fluid">
            <a class="logo" href="/">
                <img class="" :src="require('@/assets/jellybean.png')" alt="Logo" />
            </a>
            <button class="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="mx-auto">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">

                        <li class="nav-item pb-3 px-1" :class="{ active: activeComponent === 'BeansList' }">
                            <a class="nav-link" href="#"
                                @click.prevent="$emit('changeComponent', 'BeansList')">Beans</a>
                        </li>
                        <li class="nav-item pb-3 px-1" :class="{ active: activeComponent === 'FactsList' }">
                            <a class="nav-link" href="#"
                                @click.prevent="$emit('changeComponent', 'FactsList')">Facts</a>
                        </li>
                        <li class="nav-item pb-3 px-1" :class="{ active: activeComponent === 'RecipesList' }">
                            <a class="nav-link" href="#"
                                @click.prevent="$emit('changeComponent', 'RecipesList')">Recipes</a>
                        </li>
                        <li class="nav-item pb-3 px-1" :class="{ active: activeComponent === 'CombinationsList' }">
                            <a class="nav-link" href="#"
                                @click.prevent="$emit('changeComponent', 'CombinationsList')">Combinations</a>
                        </li>
                        <li class="nav-item pb-3 px-1" :class="{ active: activeComponent === 'HistoryList' }">
                            <a class="nav-link" href="#"
                                @click.prevent="$emit('changeComponent', 'HistoryList')">History</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
</template>
<script>
export default {
    props: {
        activeComponent: {
            type: String,
            required: true,
        },
    },
    methods: {
        changeComponent(component) {
            this.$emit('changeComponent', component); // Emit event to parent component
        },
    },
};
</script>