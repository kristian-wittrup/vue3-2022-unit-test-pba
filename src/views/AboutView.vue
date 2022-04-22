<template>
  <div class="about">
    <h1>This is an about pagesss</h1>
    <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>
  <!--   <Transition>
      <h1 v-if="!isHidden">Hide me on click event!</h1>
    </Transition>  --> 
    <Transition name="fade">
      <h1 v-if="!isHidden">Hide me on click event!</h1>
    </Transition>  


  <div class="row">
    <div id="box1" class="col-12 col-sm-7 col-md-4">1</div>
    <div id="box2" class="col-12 col-sm-5 col-md-4">2</div>
    <div id="box3" class="col-12 col-sm-12 col-md-4">3</div>
  </div>


<hr>

<div>
  v-for loops - no loop
  <ul>
    <li>first item</li>
    <li>first item</li>
    <li>first item</li>
  </ul>
    v-for loops - with loopy
  <ul>
    <li v-for="listitem in myArray" :key="listitem">
      {{listitem}}
    </li>

  </ul>
</div>


  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    let isHidden = ref(false)
  
    let myArray = ref(
        [
          "first item", 
          "second item", 
          "third item",
            "first item", 
          "second item", 
          "third item",
        ]
      )

    return {
      isHidden,
      myArray
    }
  }
}
</script>

<style>

/* style binding */
.static {
  height:30px;
  background-color: lightgrey;
}

.active {
   height:30px;
    background-color: lightblue;
}

.text-danger {
   height:30px;
  color:orange;
  font-weight: bold;
}





#box1 {
  background-color: lightblue
}

#box2 {
  background-color: lightseagreen
}

#box3 {
  background-color: lightpink
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
.fade-enter-active,
 {
  transition: all 0.3s ease-out;
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
*/
</style>
