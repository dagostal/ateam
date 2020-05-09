<template>
  <modal
    name="create-project"
    transition="pop-out"
    :width="modalWidth"
    :focus-trap="true"
    :height="400"
  >
    <div>
      <form v-on:submit.prevent="submitNewContact">
        <input v-model.trim="newProject.projectName" placeholder="Project Name" />
        <input v-model.trim="newProject.projectClient" placeholder="Client" />
        <vc-calendar  :min-date='new Date()' :attributes="attributes" ref="calendar" />

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
        <button v-bind:disabled="!formIsValid" type="submit">
          Add New Project
        </button>
      </form>
    </div>
  </modal>
</template>

<script>
const MODAL_WIDTH = 656;
export default {
  name: "CreateProjectModal",
  methods: {
    calClick:function() {
      console.log("clickeD!")
    }
  },
  mounted(){
  },
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      attributes: [{
        key: 'today',
        highlight: true,
        dates: new Date()
      }],
      newProject: {
        projectName: "",
        projectClient: "",
        projectType: "",
        position:"",
        prep: "",
        shoot: "",
        wrape: ""
      }
    }
  },
  computed: {
    formIsValid: function() {
      return true;
    }
  },
  created() {
    this.modalWidth = window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  margin-top: 30px;
}
</style>
