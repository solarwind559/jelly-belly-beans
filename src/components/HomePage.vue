<template>
    <div class="homepage">
        <div>
            <div class="viewport">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="homepage-img mx-auto text-center">
                            <img :src="require('@/assets/front-page-bean.png')" alt="Icon" class="jelly-bean-main" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6 pb-5 pb-md-0">
                        <h1 class="text-center pb-1">Welcome to the <br> World of Jelly Belly</h1>
                        <h3 class="text-center">A Rainbow of Flavors Awaits!</h3>
                        <p class="text-center m-4">The User Interface of this website makes full use of the Jelly Belly
                            API's database, showcasing one approach to design by utilizing all the endpoints and their
                            various options. Check out the API documentation</p>
                        <div class="text-center">
                            <a href="https://jelly-belly-wiki.netlify.app/" class="btn custom-btn-primary">Find the
                                API
                                here</a>

                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap-preview-light mb-4">
                <h2 class="text-center pb-2">Explore Beans...</h2>
                <BeansListPreview />
                <h3 class="text-center view-all-btn pt-2" @mouseenter="addAnimation" @mouseleave="removeAnimation"
                    :class="{ 'animate__animated animate__pulse': isHovered }">
                    <a href="#" @click.prevent="$emit('changeComponent', 'BeansList')">View all</a>
                </h3>
            </div>

            <div class="wrap-preview-mid mb-4">
                <h2 class="text-center pb-2">Did You Know?</h2>
                <FactsListPreview />
                <h3 class="text-center view-all-btn pt-2" @mouseenter="addAnimation" @mouseleave="removeAnimation"
                    :class="{ 'animate__animated animate__pulse': isHovered }">
                    <a href="#" @click.prevent="$emit('changeComponent', 'FactsList')">View all</a>
                </h3>
            </div>

        </div>
    </div>
</template>

<script>
import BeansListPreview from "./BeansListPreview";
import FactsListPreview from "./FactsListPreview";

export default {
    components: {
        BeansListPreview,
        FactsListPreview,
    },
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        addAnimation() {
            this.isHovered = true;
        },
        removeAnimation() {
            this.isHovered = false;
        },
    },
};
</script>