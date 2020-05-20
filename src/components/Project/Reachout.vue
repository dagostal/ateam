<template>
  <div class="reachout">
    <div class="reachout-top"><p>Reachout Text Preview:</p></div>
    <div class="reachout-mid">
      <textarea> </textarea>
    </div>
    <div class="reachout-bottom">
      <p>Send to {{ this.reachOutMembers.length }} People</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Reachout",
  props: ["project"],
  data() {
    return {
      reachOutMembers: []
    };
  },
  mounted() {
    this.reachOutMembers = this.project.roles.filter(
      member => member.reachout == true
    );
  }
};
</script>

<style scoped>
.reachout {
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.reachout-top {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reachout-mid {
  flex: 1;
  width: 100%;
}
.reachout-bottom {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
