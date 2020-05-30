<template>
  <div class="project" v-on:click="$emit('show-project', project.id)">
    <p>
      <strong
        >{{ project.client }} - {{ project.name }} //{{
          project.projType
        }}</strong
      >
    </p>
    <p class="color">
      <strong>Prep:</strong>{{ new Date(project.prepDate).toDateString() }} |
      <strong>Shoot:</strong
      >{{ new Date(project.shootDate[0]).toDateString() }} -
      {{ new Date(project.shootDate[1]).toDateString() }}|
      <strong>Wrap:</strong>{{ new Date(project.wrapDate).toDateString() }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectInfo",
  props: ["project"],
  methods: {},
  created(){
    console.log("project info created")
  }
};
</script>

<style scoped>
.color {
  color: grey;
}
.project {
  background-color: #dcdcdc;
  margin: 20px;
  flex: 1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
}
</style>
