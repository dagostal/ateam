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

    <!-- table header -->
    <el-container>
      <el-header class="tableHeader">
        <div
          style="display:flex;flex:1; align-items:center;justify-content:flex-start;margin-left:40px"
        >
        </div>
        <div
          style="display:flex;flex:1; align-items:center;justify-content:flex-end;margin-right:40px"
        >
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Import</el-dropdown-item>
              <el-dropdown-item>Share</el-dropdown-item>
              <el-dropdown-item>Export</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{ project.projectName }}</span>
        </div>
      </el-header>

      <!-- table  -->
      <el-main>
        <el-table
          :default-sort="{ prop: 'priority', order: 'descending' }"
          :data="memberData"
        >
          <el-table-column
            prop="role"
            label="Role"
            width="180"
            sortable
          ></el-table-column>
          <el-table-column label="Holding" width="80"></el-table-column>
          <el-table-column label="Sent" width="80"></el-table-column>
          <el-table-column label="Reach Out" width="100">
            <template scope="scope">
              <el-button
                v-if="scope.row.reachout"
                type="primary"
                v-on:click="reachOut(scope.row.id)"
                icon="el-icon-check"
              ></el-button>
              <el-button
                v-if="!scope.row.reachout"
                type="primary"
                v-on:click="reachOut(scope.row.id)"
                icon="el-icon"
              ></el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="rate"
            label="Rate"
            width="75"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="Name"
            sortable
            width="100"
          ></el-table-column>
          <el-table-column
            prop="email"
            label="Email"
            width="200"
          ></el-table-column>
          <el-table-column
            prop="phoneNumber"
            label="Number"
            width="120"
          ></el-table-column>
          <el-table-column
            prop="priority"
            label="Priority"
            width="100"
            sortable
          ></el-table-column>
          <el-table-column width="80"
            ><el-button type="primary" icon="el-icon-edit"></el-button
          ></el-table-column>
          <el-table-column width="80">
            <template>
              <el-button type="primary" icon="el-icon-delete"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProjectTable2",
  props: ["projectID"],
  methods: {
    ...mapActions(["addMemberToReachOut","mapGetters"]),
    reachOut(id) {
      let updateInfo = {
        projectID: this.projectID,
        memberID: id
      };
      this.addMemberToReachOut(updateInfo);
    }
    //i need to keep doing this function because the data passed from props is not reactive..
  },
  computed: {
    ...mapGetters(["allProjects"]),
    memberData() {
      return this.allProjects.filter(
        project => project._id == this.projectID
      )[0].roles;
    },
    project() {
      return this.allProjects.filter(
        project => project._id == this.projectID
      )[0]
    }
  }
};
</script>

<style scoped>
.tableHeader {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
