<template>
  <div class="projects">
    <div class="project-child">
      <CreateProjectButton v-on:create-project="createProject" />
      <CreateProjectModal />
    </div>
    <div class="project-child">This is an projects page</div>
    <div class="project-child">This is an projects page</div>
  </div>
</template>

<script>
import CreateProjectButton from "./CreateProjectButton.vue";
import CreateProjectModal from "./CreateProjectModal.vue";

export default {
  name: "Projects",
  components: {
    CreateProjectButton,
    CreateProjectModal
  },
  methods: {
    createProject() {
      this.$modal.show("create-project");
    }
  }
};
</script>

<style scoped>
.projects {
  border-style: solid;
  border-width: 1px;
  background-color: #dcdcdc;
  flex: 1;
  height: 700px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.project-child {
  margin: 5px;
  border-style: solid;
  border-bottom-width: 1px;
  width: 100%;
  height: 100%;
}
</style>
