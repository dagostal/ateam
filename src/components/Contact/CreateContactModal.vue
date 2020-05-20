<template>
  <modal
    name="create-contact"
    transition="pop-out"
    :width="modalWidth"
    :focus-trap="true"
    :height="400"
  >
    <div>
      <form v-on:submit.prevent="submitNewContact">
        <input v-model.trim="newContact.newContactName" placeholder="Name" />
        <input v-model.trim="newContact.newContactEmail" placeholder="Email" />
        <input
          v-model.trim="newContact.newContactPhoneNumber"
          placeholder="Phone Number"
        />

        <label>Role</label>
        <select v-model="newContact.newContactRole">
          <option>Director</option>
          <option>Producer</option>
          <option>ToeMan</option>
        </select>

        <label>Priority</label>
        <select v-model.number="newContact.newContactPriority">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <button v-bind:disabled="!formIsValid" type="submit">
          Add New Contact
        </button>
      </form>
    </div>
  </modal>
</template>

<script>
import { mapActions } from "vuex";

const MODAL_WIDTH = 656;
export default {
  name: "CreateContactModal",
  methods: {
    ...mapActions(["addNewContact"]),
    submitNewContact() {
      this.addNewContact(this.newContact);
    },
    beforeClose() {
      console.log("closing");
    }
  },
  data() {
    return {
      modalWidth: MODAL_WIDTH,
      newContact: {
        newContactName: "",
        newContactEmail: "",
        newContactPhoneNumber: "",
        newContactRole: "",
        newContactPriority: 0
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
