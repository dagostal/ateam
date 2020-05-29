<template>
  <modal
    name="create-contact"
    transition="pop-out"
    :width="modalWidth"
    :focus-trap="true"
    :height="600"
  >
    <el-form ref="form" :model="newContact" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="newContact.name"></el-input>
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="newContact.email"></el-input>
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="newContact.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="newContact.address"></el-input>
      </el-form-item>
      <el-form-item label="Role">
        <el-select v-model="newContact.role" placeholder="contact's role">
          <el-option label="Toeman" value="toeman"></el-option>
          <el-option label="Makeup" value="makeup"></el-option>
          <el-option label="Production" value="production"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input-number
          v-model="newContact.priority"
          :min="1"
          :max="10"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="Notes">
        <el-input type="textarea" v-model="newContact.notes"></el-input>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Create Contact</el-button>
    </el-form>
  </modal>
</template>

<script>
import { mapActions } from "vuex";

const MODAL_WIDTH = 1000;
export default {
  name: "CreateContactModal",
  methods: {
    ...mapActions(["addNewContact"]),
    onSubmit() {
      console.log("subbmitting..", this.newContact);
      this.addNewContact(this.newContact);
    }
  },
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      newContact: {
        name: "",
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
