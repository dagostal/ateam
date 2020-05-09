<template>
  <div class="contact-holder">
    <CreateContactModal v-on:update-contacts="updateContactList" />
    <div>
      <CreateContactButton v-on:create-contact="createContact" />
    </div>
    <div class="contact-header">
      <p>Role</p>
      <p>Name</p>
      <p>Email</p>
      <p>Phone Number</p>
      <p>Current Project</p>
      <p v-on:click="sortContacts">Priority</p>
      <p>Delete Contact</p>
    </div>
    <div class="contact" v-bind:key="contact.id" v-for="contact in allContacts">
      <ContactInfo
        v-bind:contact="contact"
        v-on:del-contact="$emit('del-contact', contact.id)"
      />
    </div>
  </div>
</template>

<script>
import ContactInfo from "./ContactInfo.vue";
import CreateContactButton from "./CreateContactButton.vue";
import CreateContactModal from "./CreateContactModal.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ContactApp",
  computed: mapGetters(["allContacts", "helloWorld"]),
  components: {
    ContactInfo,
    CreateContactButton,
    CreateContactModal
  },
  props: ["msg"],
  mounted() {
    console.log("contacts mounted!");
  },
  data() {
    return {};
  },
  created() {
    this.fetchContacts();
  },
  methods: {
    ...mapActions(["fetchContacts", "sortContacts"]),
    sortPriority() {
      console.log("sorting");
      if (!this.sortedByPriority) {
        this.sortedByPriority = true;
        this.contacts.sort(function(a, b) {
          return a.priority - b.priority;
        });
        return;
      }
      this.sortedByPriority = false;
      this.contacts.sort(function(a, b) {
        return b.priority - a.priority;
      });
    },
    createContact() {
      this.$modal.show("create-contact");
    },
    updateContactList(newContactList) {
      this.contacts = newContactList;
    }
  }
};
</script>

<style scoped>
.contact-holder {
  margin-left: 20%;
  margin-right: 20%;
}
.contact-header {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  border-style: solid;
  border-bottom-width: 1px;
  font-weight: bold;
}
</style>
