<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <!-- side-pannel -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>Navigator One</template
          >
          <el-menu-item-group>
            <template slot="title">Group 1</template>
            <el-menu-item v-on:click="$emit('project-tree')" index="1-1"
              >Project Tree</el-menu-item
            >
            <el-menu-item v-on:click="$emit('project-reachout')" index="1-2"
              >Reach Out</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group title="Group 2">
            <el-menu-item index="1-3">Option 3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">Option4</template>
            <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <div class="reachout">
      <div class="reachout-top"><p>Reachout Text Preview:</p></div>
      <div class="reachout-mid">
        <textarea> </textarea>
      </div>
      <div class="reachout-bottom">
        <p>Send to {{ this.reachOutMembers.length }} People</p>
      </div>
    </div>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProjectReachout",
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
