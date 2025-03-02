<template>
    <nav class="navbar-footer navbar-expand-lg bg-light pt-3 pb-0">
        <div class="container-fluid">
            <div class=" d-flex justify-content-center">

                <div class="footer-img"
                @mouseenter="addAnimation"
                            @mouseleave="removeAnimation" 
                            :class="{ 'animate__animated animate__pulse': isHovered }">
                    <a href="/"                            >
                        <img class="" :src="require('@/assets/mandarin-flavor.png')" 
                            alt="Logo" />
                    </a>
                </div>

                <ul class="navbar-nav flex-column">

                    <li class="nav-item" :class="{ active: activeComponent === 'BeansList' }">
                        <a class="nav-link px-3" href="#"
                            @click.prevent="$emit('changeComponent', 'BeansList')">Beans</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeComponent === 'FactsList' }">
                        <a class="nav-link px-3" href="#"
                            @click.prevent="$emit('changeComponent', 'FactsList')">Facts</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeComponent === 'RecipesList' }">
                        <a class="nav-link px-3" href="#"
                            @click.prevent="$emit('changeComponent', 'RecipesList')">Recipes</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeComponent === 'CombinationsList' }">
                        <a class="nav-link px-3" href="#"
                            @click.prevent="$emit('changeComponent', 'CombinationsList')">Combinations</a>
                    </li>
                    <li class="nav-item" :class="{ active: activeComponent === 'HistoryList' }">
                        <a class="nav-link px-3" href="#"
                            @click.prevent="$emit('changeComponent', 'HistoryList')">History</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isHovered: false,
        };
    },
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
        addAnimation() {
            this.isHovered = true;
        },
        removeAnimation() {
            this.isHovered = false;
        },
    },
};
</script>