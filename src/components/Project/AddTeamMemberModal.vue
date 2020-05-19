<template>
  <modal
    name="add-member"
    transition="pop-out"
    :width="modalWidth"
    :focus-trap="true"
    :height="500"
  >
    <div class="modal-div">
      <div class="contact-header">
        <p>Role</p>
        <p>Name</p>
        <p>Email</p>
        <p>Phone Number</p>
        <p>Current Project</p>
      </div>
      <div class="contactTable">
        <div
          class="contact"
          v-bind:key="contact.id"
          v-for="contact in allContacts"
        >
          <ContactInfo
            v-bind:member="true"
            v-bind:contact="contact"
            v-on:select-contact="contactSelected($event, contactIDSelected)"
          />
        </div>
      </div>

      <form class="add-member-form" v-on:submit.prevent="submitNewMember">
        <input v-model.trim="newMember.rate" placeholder="Rate" />

        <label>Position</label>
        <select v-model="newMember.position">
          <option>Director</option>
          <option>Producer</option>
          <option>ToeMan</option>
        </select>

        <button type="submit">
          Add New Memeber
        </button>
      </form>
    </div>
  </modal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ContactInfo from "../Contact/ContactInfo.vue";
const MODAL_WIDTH = 1056;
export default {
  name: "AddTeamMemberModal",
  methods: {
    ...mapActions(["addMemberToProject"]),
    contactSelected(contactID) {
      this.contactIDSelected = contactID;
    },
    submitNewMember() {
      let updateInfo = {
        projectID: this.projID,
        memberID: this.contactIDSelected,
        memberFormInfo: this.newMember
      };
      this.addMemberToProject(updateInfo);
    }
  },
  components: {
    ContactInfo
  },
  props: ["projID"],
  mounted() {},
  data() {
    return {
      contactIDSelected: "",
      modalWidth: MODAL_WIDTH,
      newMember: {
        rate: "",
        position: ""
      }
    };
  },
  computed: mapGetters(["allContacts"]),
  created() {
    this.modalWidth =
      window.innerWidth < MODAL_WIDTH ? MODAL_WIDTH / 2 : MODAL_WIDTH;
  }
};
</script>

<style scoped>
.contact-header {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  border-style: solid;
  border-bottom-width: 1px;
  font-weight: bold;
}
.contactTable {
  flex: 3;
  height: 100px;
  overflow-y: auto;
}
.add-member-form {
  flex: 1;
}
.modal-div {
  display: flex;
  flex-direction: column;
  height: 100%;
}
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
.contact {
  border-style: solid;
  border-width: 1px;
  background-color: #dcdcdc;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
</style>
