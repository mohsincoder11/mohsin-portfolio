<template>
   
    <Loader />
    <main>
        <router-view  />
    </main>

   
</template>

<script>
// import Loader from './components/Loader.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: "App",
    data() {
        return {
            footer: [],
        };
    },
   
    computed: {
       
    },
    watch: {
      
    },
    methods: {
      
    },
    mounted() {
        AOS.init();

    },
};
</script>

<style></style>
