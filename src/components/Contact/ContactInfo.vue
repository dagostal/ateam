<template>
  <div class="contact">
    <p class="contact-child">{{ contact.role }}</p>
    <p class="contact-child">{{ contact.name }}</p>
    <p class="contact-child">{{ contact.email }}</p>
    <p class="contact-child">{{ contact.phoneNumber }}</p>
    <p
      class="contact-child"
      v-bind:class="[
        contact.pending ? 'contact-pending' : '',
        contact.booked ? 'contact-booked' : ''
      ]"
    >
      {{ contact.currentProject }}
    </p>
    <p class="contact-child">{{ contact.priority }}</p>
    <p v-on:click="deleteContact(contact.id)" class="contact-child">X</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContactInfo",
  props: ["contact"],
  methods: {
    ...mapActions(["deleteContact"]),
    markComplete() {
      this.contact.booked = !this.contact.booked;
    }
  }
};
</script>

<style scoped>
.contact {
  border-style: solid;
  border-width: 1px;
  background-color: #dcdcdc;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
.contact-child {
  flex: 1;
}
.contact-booked {
  color: green;
}
.contact-pending {
  color: #ffff00;
}
.contact-holder {
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
  height: 200px;
}
</style>
