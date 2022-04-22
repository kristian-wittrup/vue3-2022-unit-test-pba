<template>
 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">

    <h3>Something that can break a test: Card TitleOne </h3>  <!-- test : 1 -->

    <h3>For input trigger test: part 3</h3>
    <form data-test="form" @submit.prevent="createProject">
      <input type="text" data-test="new-project" v-model="newProject">
    </form>

      <div class="col-12 col-sm-6 col-md-4 mb-4" 
        v-for="projectItem in projects" 
        :key="projectItem" 
        data-test="project"
        :class="[projectItem.completed ? 'completed' : '']" 
        > <!-- test : 1 : data-test="project"  + :class test : 4-->
      <div class="card" style="">
        <img :src="projectItem.projectURL" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <h5 id="cardOne" class="card-title ">{{projectItem.projectTitle}}</h5>
          <p class="card-text">{{projectItem.projectDescription}}</p>
          <a href="#" class="btn btn-primary">Go somewhere {{projectItem.id}}</a>

          <input type="checkbox" v-model="projectItem.completed" data-test="project-checkbox"> <!-- :class test : 4 -->
        </div>
      </div>
    </div>
    <hr>
    <h4>Logged in?</h4>
    <div>
      <nav>
        <a href="#">Home </a> 
        <a id="profile" href="#" v-if="isLoggedIn">My Profile</a>
      </nav>
    </div>
  </div>
  
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    let newProject = ref("")

    let isLoggedIn = ref(false)

    let createProject = () => {
      projects.value.push({
        id: 3,
        projectURL:"https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectTitle:"Card TitleThree",
        projectDescription: newProject.value,
        completed: false
      })
    /*   .then(
        newProject.value = ""
      ) */
    }


    let projects = ref([
      {
        id: 1,
        projectURL:"https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectTitle:"Card TitleOne",
        projectDescription:"Some quick example text to build up the bulk of the card's content.",
        completed: false
      },
      {
        id:2,
        projectURL:"https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectTitle:"Card TitleTwo",
        projectDescription:"Lorem ipsum",
        completed: false
      }, 
      
    ])

    return {
      projects,
      newProject,
      createProject,
      isLoggedIn
    }
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through
}

#cardOne{
  color:red
}
.active {
  background-color: khaki;
  
}
.text-color {
  color:darkviolet;
}
</style>
