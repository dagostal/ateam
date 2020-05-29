<template>
  <modal
    name="edit-contact"
    transition="pop-out"
    :width="modalWidth"
    :focus-trap="true"
    :height="600"
  >
    <el-form ref="form" :model="editedContact" label-width="120px">
      <el-form-item label="Name">
        <el-input placeholder="" va v-model="editedContact.name"></el-input>
        <h1>{{ contact }}</h1>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="editedContact.email"></el-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="editedContact.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="editedContact.address"></el-input>
      </el-form-item>
      <el-form-item label="Role">
        <el-select v-model="editedContact.role" placeholder="contact's role">
          <el-option label="Toeman" value="toeman"></el-option>
          <el-option label="Makeup" value="makeup"></el-option>
          <el-option label="Production" value="production"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Priority">
        <el-input-number
          v-model="editedContact.priority"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="Notes">
        <el-input type="textarea" v-model="editedContact.notes"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Create Contact</el-button>
    </el-form>
  </modal>
</template>

<script>
const MODAL_WIDTH = 1000;
export default {
  name: "EditContactModal",
  methods: {
    onSubmit() {
      this.$emit("close");
    }
  },
  props: ["contact"],
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      editedContact: {
        name: "alex",
        email: "",
        phoneNumber: "",
        role: "",
        priority: 0,
        address: "",
        notes: ""
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
.el-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-form-item {
  width: 60%;
  padding: 5px;
}
</style>
