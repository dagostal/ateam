<template>
  <div>
    <button v-on:click="$emit('add-member')">Add Team Member</button>
  </div>
</template>

<script>
export default {
  name: "AddTeamMemberButton"
};
</script>

<style scoped>
.button {
  margin-left: 20%;
  margin-right: 20%;
}
</style>
