<template>
  <div class="tree">
    <div class="level">
      <div class="node">Producer</div>
    </div>
    <div class="level">
      <div class="node">1st AD</div>
      <div class="node">2nd AD</div>
    </div>
    <div class="level">
      <div class="node">Cinematographer</div>
      <div class="node">Prod Designer</div>
      <div class="node">Location Manager</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TeamTree",
  props: ["project"],
  data() {
    return {
      reachOutMembers: []
    };
  }
};
</script>

<style scoped>
.dropDown {
  height: 300px;
  width: 200px;
  background-color: red;
}
.level {
  flex: 1;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
}
.node {
  display: flex;
  background-color: grey;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  border-radius: 8px;
}
.tree {
  background-color: green;
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
