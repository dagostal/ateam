<template>
  <div class="body">
    <div v-if="this.showDashboardBool">
      <CreateProjectButton v-on:create-project="createProject" />
      <CreateProjectModal />
    </div>
    <div v-if="!this.showDashboardBool">
      <AddTeamMemberButton v-on:add-member="addMember" />
      <AddTeamMemberModal v-bind:projID="this.projectID" />
    </div>
    <div class="projects">
      <div v-if="!this.showDashboardBool" class="project-show">
        <ProjectTable
          v-on:check-hold="checkHold($event, memberID)"
          v-on:check-reachout="checkReachout($event, memberID)"
          v-on:show-dashboard="showDashboard()"
          v-bind:project="this.projectToDisplay"
        />
      </div>
      <div v-if="this.showDashboardBool" class="project-dash">
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
import CreateProjectButton from "./CreateProjectButton.vue";
import CreateProjectModal from "./CreateProjectModal.vue";
import ProjectInfo from "./ProjectInfo.vue";
import ProjectTable from "./ProjectTable.vue";
import AddTeamMemberButton from "./AddTeamMemberButton.vue";
import AddTeamMemberModal from "./AddTeamMemberModal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Projects",
  data() {
    return {
      projectID: "",
      showDashboardBool: true,
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
    CreateProjectButton,
    CreateProjectModal,
    ProjectInfo,
    ProjectTable,
    AddTeamMemberButton,
    AddTeamMemberModal
  },
  methods: {
    ...mapActions(["addMemberToHold", "addMemberToReachOut"]),
    createProject() {
      this.$modal.show("create-project");
    },
    addMember() {
      this.$modal.show("add-member");
    },
    showProject(projectIDToShow) {
      this.projectID = projectIDToShow;
      // this.projectToDisplay = this.allProjects.filter(project => project.id == projectIDToShow)[0]
      this.showDashboardBool = !this.showDashboardBool;
    },
    showDashboard() {
      this.showDashboardBool = !this.showDashboardBool;
    },
    checkHold(memberID) {
      let updateInfo = {
        projectID: this.projectID,
        memberID: memberID
      };
      this.addMemberToHold(updateInfo);
    },
    checkReachout(memberID) {
      let updateInfo = {
        projectID: this.projectID,
        memberID: memberID
      };
      this.addMemberToReachOut(updateInfo);
    }
  }
};
</script>

<style scoped>
.mouseOver {
  background-color: green;
}
.project-dash {
  width: 100%;
  height: 100%;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.project-show {
  background-color: white;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.projects {
  background-color: #dcdcdc;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.project-list {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-child {
  flex: 4;
}

.project-container {
  width: 100%;
  height: 100%;
  background-color: yellow;
  align-items: center;
  flex: 1;
}
</style>
