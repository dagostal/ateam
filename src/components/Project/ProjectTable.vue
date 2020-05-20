<template>
  <div class="proj-container">
    <div class="dash-child">
      <h1>{{ project.projectName }}--{{ project.projectClient }}</h1>
    </div>
    <Reachout v-if="this.showReachout" v-bind:project="this.project" />
    <div v-if="!this.showReachout" class="project-header">
      <div class="project-header-child-role"><p>Role</p></div>
      <div class="project-header-child-holding"><p>Holding</p></div>
      <div class="project-header-child-sent"><p>Sent</p></div>
      <div class="project-header-child-reachout"><p>Reachout</p></div>
      <div class="project-header-child-rate"><p>Rate</p></div>
      <div class="project-header-child-name"><p>Name</p></div>
      <div class="project-header-child-email"><p>Email</p></div>
      <div class="project-header-child-phone"><p>Phone</p></div>
      <div class="project-header-child-priority"><p>Priority</p></div>
    </div>
    <div v-if="!this.showReachout" class="dash-table">
      <div class="members" v-bind:key="role.id" v-for="role in project.roles">
        <div class="project-header-child">{{ role.role }}</div>
        <div
          class="project-header-child"
          v-on:click="$emit('check-hold', role.id)"
          v-bind:class="{ selected: role.hold }"
        ></div>
        <div class="project-header-child"></div>
        <div
          class="project-header-child"
          v-on:click="$emit('check-reachout', role.id)"
          v-bind:class="{ selected: role.reachout }"
        ></div>
        <div class="project-header-child">{{ role.rate }}</div>
        <div class="project-header-child">{{ role.name }}</div>
        <div class="project-header-child">{{ role.email }}</div>
        <div class="project-header-child">{{ role.phoneNumber }}</div>
        <div class="project-header-child">{{ role.priority }}</div>
      </div>
    </div>
    <div class="dash-back">
      <p
        v-on:click="showReachOut()"
        v-if="!this.showReachout"
        class="back-button"
      >
        Reachout Preview
      </p>
      <p
        v-on:click="showReachOut()"
        v-if="this.showReachout"
        class="back-button"
      >
        Project Memebers
      </p>
      <p v-on:click="$emit('show-dashboard')" class="back-button">
        Project Dashboard
      </p>
    </div>
  </div>
</template>

<script>
import Reachout from "./Reachout.vue";
export default {
  name: "ProjectTable",
  props: ["project"],
  components: {
    Reachout
  },
  data() {
    return {
      showReachout: false
    };
  },
  methods: {
    showReachOut() {
      this.showReachout = !this.showReachout;
    }
  }
};
</script>

<style scoped>
.selected {
  background-color: blue;
}
.members {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-width: 1px;
}

.reachout {
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.reachout-top {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reachout-mid {
  flex: 1;
  width: 100%;
}
.reachout-bottom {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-width: 1px;
  font-weight: bold;
  flex: 1;
}

.project-header-child {
  display: table;
  flex: 1;
  height: 100%;
  width: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  word-wrap: break-word;
}

.project-header-child-role {
  flex: 1;
  border-style: solid;
  border-bottom-width: 1px;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.project-header-child-holding {
  flex: 1;
  height: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.project-header-child-sent {
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  border-style: solid;
  border-bottom-width: 1px;
}
.project-header-child-reachout {
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  border-style: solid;
  border-bottom-width: 1px;
}
.project-header-child-rate {
  flex: 1;
  height: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.project-header-child-name {
  flex: 1;
  height: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.project-header-child-email {
  flex: 1;
  height: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.project-header-child-phone {
  flex: 1;
  height: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.project-header-child-priority {
  flex: 1;
  height: 100%;
  border-style: solid;
  border-bottom-width: 1px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.roles {
  display: flex;
  width: 100%;
  height: 25px;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  flex: 1;
  background-color: yellow;
}
.dash-table {
  flex: 5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.dash-back {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.proj-container {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.back-button {
  border-style: solid;
  border-bottom-width: 1px;
}
</style>
