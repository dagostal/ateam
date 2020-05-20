<template>
  <div class="create-proj-button">
    <button v-on:click="$emit('create-project')"><u>+New Project</u></button>
  </div>
</template>

<script>
export default {
  name: "CreateProjectButton"
};
</script>

<style scoped>
button {
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 8px;
  background-color: white;
  padding:20px;
  width:20%;
  font-size: 20px;
  color:blue

}
</style>
