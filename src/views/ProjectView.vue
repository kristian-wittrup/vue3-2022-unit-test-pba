<template>
  <div >
   
   <!--  <ProjectComponentDynamic /> -->
    <HeroTwo />
    <ProjectComponent />
    <hr>
  </div>
</template>

<script>
import ProjectComponent from '../components/ProjectComponent.vue'
import HeroTwo from '../components/HeroTwo.vue'

//import ProjectComponentDynamic from '../components/ProjectComponentDynamic.vue'


export default {
  components:{
    ProjectComponent,
    HeroTwo,
  //  ProjectComponentDynamic
  }
}
</script>
