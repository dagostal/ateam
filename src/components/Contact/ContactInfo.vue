<template>
  <div
    v-bind:class="isSelected ? 'selected' : 'contact'"
    v-on:click="selectContact(contact.id)"
  >
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
    <p v-if="!member" class="contact-child">{{ contact.priority }}</p>
    <p
      v-if="!member"
      v-on:click="deleteContact(contact.id)"
      class="contact-child"
    >
      X
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ContactInfo",
  props: ["contact", "member"],
  data() {
    return {
      isSelected: false
    };
  },
  methods: {
    ...mapActions(["deleteContact"]),
    markComplete() {
      this.contact.booked = !this.contact.booked;
    },
    selectContact(id) {
      if (this.member) {
        this.isSelected = !this.isSelected;
        this.$emit("select-contact", id);
      }
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

.selected {
  border-style: solid;
  border-width: 1px;
  background-color: green;
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
