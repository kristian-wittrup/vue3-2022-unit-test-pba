<template>
 <div class="container-md"> <!-- switch to margin x over MD size -->
  <div class="row">
    <div class="col-12 col-sm-6 col-md-4 mb-4"  v-for="project in projects" :key="project.projectName">
      <div class="card">
        <img :src="project.projectImg" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <h5 class="card-title">{{project.projectName}}</h5>
          <p class="card-text">{{project.projectDescription}}</p>
          <a href="#" class="btn btn-primary">Click me</a>
        </div>
      </div>
    </div>
  </div>
<!--
  <div v-for="project in projects" :key="project.projectName">
    <p>{{project.projectName}}</p>
    <p>{{project.projectDescription}}</p>
    <p>{{project.projectImg}}</p>
  </div>
  -->
</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const projects = ref([
      {
        projectName: "My first Project",
        projectDescription: "Lorem Ipsum goes here, yay very nice. I go to 'merica",
        projectImg: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
      },
      {
        projectName: "My second Project",
        projectDescription: "Lorem text ipsum. It is very very nice",
        projectImg: "https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplie≤s-79906734.jpg"
      },
      {
        projectName: "My third Project",
        projectDescription: "Heeeey.. Luuuucccyy, immm hooooooommmme",
        projectImg: "https://aecom.com/wp-content/uploads/2021/06/aecom-projects.png"
      }
    ])
    return { projects }
  }
}
</script>

<style scoped>
</style>
