<template>
  <div>
    <button v-on:click="$emit('create-project')">Create Project</button>
  </div>
</template>

<script>
export default {
  name: "CreateProjectButton"
};
</script>


<style scoped>
.button {
  margin-left: 20%;
  margin-right: 20%;
}
