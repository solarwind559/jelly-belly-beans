<template>
    <div class="homepage">
      <div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="homepage-img mx-auto text-center mt-5">
                                        <!-- <img class="mt-5" src="/img/jellybean.c2d779d7.png" alt="logo">
                    <div class="jelly-belly-text">
                        <p>Jelly <br> Belly</p>
                    </div> -->
              <img :src="require('@/assets/homepage-jb2.png')" alt="Icon" class="jelly-bean-main" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h1 class="text-center pt-5 pb-1">Welcome to the <br> World of Jelly Belly</h1>
            <h3 class="text-center">A Rainbow of Flavors Awaits!</h3>
            <p class="text-center m-4">The User Interface of this website makes full use of the Jelly Belly API's database, showcasing one approach to design by utilizing all the endpoints and their various options. Check out the API documentation</p>
            <div class="text-center">
            <a href="https://jelly-belly-wiki.netlify.app/api/" class="btn custom-btn-primary">Find the API here</a>

            </div>
          </div>
        </div>
        <h2 class="text-center pb-2">Explore...</h2>
        <BeansListPreview />
        <h3 class="text-center pb-3 view-all-btn">        
            <a href="#" @click.prevent="$emit('changeComponent', 'BeansList')">View all</a>
            <!-- <a href="#" @click.prevent="$emit('changeComponent', 'BeansList')">View all</a> -->
</h3>
      </div>
    </div>
  </template>
  
  <script>
  import BeansListPreview from "./BeansListPreview";
  
  export default {
    components: {
      BeansListPreview,
    },
  };
  </script>
  