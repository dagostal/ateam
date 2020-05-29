<template>
  <modal
    name="create-project"
    transition="pop-out"
    :width="modalWidth"
    :focus-trap="true"
    :height="500"
    class="modal"
  >
    <form v-on:submit.prevent="submitNewProject">
      <div class="date-container">
        <div>
          <p>Prep Date</p>
          <vc-date-picker
            placeholder="date"
            v-model="newProject.prepDate"
            :min-date="new Date()"
            ref="calendar"
          >
          </vc-date-picker>
        </div>
        <div>
          <p>Shoot Dates</p>
          <vc-date-picker
            v-model="newProject.shootDates"
            mode="multiple"
            :min-date="new Date()"
            ref="calendar"
          >
          </vc-date-picker>
        </div>
        <div>
          <p>Wrape Date</p>
          <vc-date-picker
            v-model="newProject.wrapeDate"
            :min-date="new Date()"
            ref="calendar"
          >
          </vc-date-picker>
        </div>
      </div>
      <div class="container">
        <el-input
          placeholder="Project Name"
          v-model.trim="newProject.projectName"
        ></el-input>
        <el-input
          placeholder="Client"
          v-model.trim="newProject.projectClient"
        ></el-input>
        <template>
          <el-select v-model="newProject.position" placeholder="Your Position">
            <el-option
              v-for="position in positions"
              :key="position.value"
              :label="position.label"
              :value="position.value"
            >
            </el-option>
          </el-select>
        </template>
        <template>
          <el-select
            style="margin:10px"
            v-model.number="newProject.projectType"
            placeholder="Project Type"
          >
            <el-option
              v-for="project in projectTypes"
              :key="project.value"
              :label="project.label"
              :value="project.value"
            >
            </el-option>
          </el-select>
        </template>
        <el-button v-bind:disabled="!formIsValid" @click="submitNewProject()"
          >Add New Project</el-button
        >
      </div>
    </form>
  </modal>
</template>

<script>
import { mapActions } from "vuex";
const MODAL_WIDTH = 1556;
export default {
  name: "CreateProjectModal",
  methods: {
    ...mapActions(["addNewProject"]),
    submitNewProject: function() {
      this.addNewProject(this.newProject);
      this.$emit("close");
    }
  },
  mounted() {},
  data() {
    return {
      positions: [
        {
          value: "Producer",
          label: "Producer"
        },
        {
          value: "Director",
          label: "Director"
        },
        {
          value: "ToeMan",
          label: "ToeMan"
        }
      ],
      projectTypes: [
        {
          value: "A",
          label: "A"
        },
        {
          value: "B",
          label: "B"
        },
        {
          value: "C",
          label: "C"
        }
      ],
      modalWidth: MODAL_WIDTH,
      newProject: {
        projectName: "",
        projectClient: "",
        projectType: "",
        position: "",
        prepDate: "",
        shootDates: {
          start: "",
          end: ""
        },
        wrapeDate: ""
      }
    };
  },
  computed: {
    formIsValid: function() {
      return true;
    }
  },
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
  }
};
</script>

<style scoped>
.modal {
  display: flex;
}
.el-input {
  margin: 10px;
}
.date-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
}
.container {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

input {
  margin-top: 30px;
}
</style>
