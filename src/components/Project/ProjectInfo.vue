<template>
  <div class="project" v-on:click="$emit('show-project', project.id)">
    <p>
      <strong>{{ project.projectClient }} - {{ project.projectName }} //{{project.projectType}}</strong>
    </p>
    <p>
      <strong>Prep:</strong>{{new Date(project.prepDate).toDateString()}} |
      <strong>Shoot:</strong>{{new Date(project.shootDates.start).toDateString()}} - {{new Date(project.shootDates.end).toDateString()}}|
      <strong>Wrap:</strong>{{new Date(project.wrapeDate).toDateString()}} 
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectInfo",
  props: ["project"],
  methods: {}
};
</script>

<style scoped>
.project {
  background-color: #dcdcdc;
  margin: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
</style>
