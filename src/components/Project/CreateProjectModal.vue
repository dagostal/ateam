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
              v-model='this.newProject.prepDate'
              :min-date="new Date()"
              :attributes="attributes"
              ref="calendar"
              >
            </vc-date-picker>
          </div>
          <div>
            <p>Shoot Date</p>
            <vc-date-picker
              v-model='this.newProject.shootDate'
              :min-date="new Date()"
              :attributes="attributes"
              ref="calendar"
              >
            </vc-date-picker>
          </div>
          <div>
            <p>Wrape Date</p>
            <vc-date-picker
              v-model='this.newProject.wrapeDate'
              :min-date="new Date()"
              :attributes="attributes"
              ref="calendar"
              >
            </vc-date-picker>
          </div>
        </div>
        <div class="container">
          <input v-model.trim="newProject.projectName" placeholder="Project Name" />
          <input v-model.trim="newProject.projectClient" placeholder="Client" />
        </div>

        <div class="container">
          <label>Your Position</label>
          <select v-model="newProject.position">
            <option>Director</option>
            <option>Producer</option>
            <option>ToeMan</option>
          </select>

          <label>Project Type</label>
          <select v-model.number="newProject.projectType">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          <button v-bind:disabled="!formIsValid" type="submit">Add New Project</button>
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
    calClick: function() {
      console.log("clickeD!");
    },
    submitNewProject: function() {
      this.addNewProject(this.newProject);
    }
  },
  mounted() {},
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      attributes: [
        {
          key: "today",
          dates: new Date()
        }
      ],
      newProject: {
        projectName: "",
        projectClient: "",
        projectType: "",
        position: "",
        prepDate: "Prep Date",
        shootDate: "",
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
  .date-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex:1;
  }
  .container {
    flex:2;
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
