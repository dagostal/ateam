<template>
  <div>
    <button v-on:click="$emit('create-contact')">Create Contact</button>
  </div>
</template>

<script>
export default {
  name: "CreateContactButton"
};
</script>
