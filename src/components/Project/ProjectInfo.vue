<template>
  <div class="project" v-on:click="$emit('show-project', project.id)">
    <p>
      <strong
        >{{ project.projectClient }} - {{ project.projectName }} //{{
          project.projectType
        }}</strong
      >
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
  align-items: center;
  align-self: center;
}
</style>
