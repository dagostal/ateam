<template>
  <div class="container">
    <div
      class="top"
      v-if="
        this.showDashboardBool &&
          !this.showProjectTree &&
          !this.showReachOutBool
      "
    >
      <el-button round type="primary" v-on:click="createProject()"
        >Create Project</el-button
      >
      <CreateProjectModal v-on:close="closeModal()" />
    </div>
    <div class="main">
      <div
        v-if="!this.showDashboardBool && !this.showReachOutBool"
        class="project-show"
      >
        <ProjectTable2
          v-on:check-hold="checkHold($event, memberID)"
          v-on:show-dashboard="showDashboard()"
          v-on:project-tree="showTree()"
          v-on:project-reachout="showReachOut()"
          v-bind:project="this.projectToDisplay"
        />
      </div>
      <div class="project-show" v-if="this.showProjectTree">
        <ProjectTree />
      </div>
      <div class="project-show" v-if="this.showProjectReachout">
        <ProjectReachOut v-bind:project="this.project" />
      </div>
      <div
        v-if="
          this.showDashboardBool &&
            !this.showProjectTree &&
            !this.showProjectReachout
        "
        class="project-dash"
      >
        <div class="project-list">
          <div v-bind:key="project.id" v-for="project in allProjects">
            <ProjectInfo
              v-on:mouseover="hover = true"
              v-on:mouseleave="hover = false"
              :class="{ mouseOver: hover }"
              v-on:show-project="showProject($event, projectID)"
              v-bind:project="project"
            />
          </div>
        </div>
        <div class="project-child"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateProjectModal from "./CreateProjectModal.vue";
import ProjectInfo from "./ProjectInfo.vue";
import ProjectTable2 from "./ProjectTable2.vue";
import ProjectTree from "./ProjectTree.vue";
import ProjectReachOut from "./ProjectReachout.vue";
// import AddTeamMemberModal from "./AddTeamMemberModal.vue";
import { mapGetters } from "vuex";

export default {
  name: "Projects",
  data() {
    return {
      projectID: "",
      showProjectTree: false,
      showProjectReachout: false,
      showDashboardBool: true,
      showReachOutBool: false,
      memberID: "",
      hover: false
    };
  },
  computed: {
    ...mapGetters(["allProjects", "projectDash"]),
    projectToDisplay() {
      // console.log(this.projectID)
      return this.allProjects.filter(
        project => project.id == this.projectID
      )[0];
    }
  },
  components: {
    CreateProjectModal,
    ProjectInfo,
    ProjectTable2,
    ProjectTree,
    ProjectReachOut
  },
  methods: {
    closeModal() {
      this.$modal.hide("create-project");
    },
    createProject() {
      this.$modal.show("create-project");
    },
    addMember() {
      this.$modal.show("add-member");
    },
    showTree() {
      this.showDashboardBool = true;
      this.showProjectTree = true;
    },
    showProject(projectIDToShow) {
      this.projectID = projectIDToShow;
      // this.projectToDisplay = this.allProjects.filter(project => project.id == projectIDToShow)[0]
      this.showDashboardBool = !this.showDashboardBool;
    },
    showReachOut() {
      this.showDashboardBool = true;
      this.showProjectTree = false;
      this.showProjectReachout = true;
    },
    showDashboard() {
      this.showDashboardBool = !this.showDashboardBool;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top {
  width: 97%;
}
.main {
  width: 97%;
}
</style>
