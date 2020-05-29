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
          <el-menu-item v-on:click="$emit('project-tree')" index="1-1">Project Tree</el-menu-item>
          <el-menu-item v-on:click="$emit('project-reachout')" index="1-2">Reach Out</el-menu-item>
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
        <el-button type="primary" v-on:click="createContact()" round
          >Create Contact</el-button
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
        <span>{{project.projectName}}</span>
      </div>
    </el-header>

    <!-- table  -->
    <el-main>
      <el-table
        :default-sort="{ prop: 'priority', order: 'descending' }"
        :data="tableData"
      >
        <el-table-column
          prop="role"
          label="Role"
          width="180"
          sortable
        ></el-table-column>
        <el-table-column
          label="Holding"
          width="80"
        ></el-table-column>
        <el-table-column
          label="Sent"
          width="80"
        ></el-table-column>
        <el-table-column
          label="Reach Out"
          width="100"
        >
        <template scope="scope">
          <el-button
            type="primary"
            v-on:click="reachOut(scope.row.id)"
            icon="el-icon"
          ></el-button>
        </template>

      </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
          sortable
          width="100"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="Email"
          width="270"
        ></el-table-column>
        <el-table-column
          prop="phoneNumber"
          label="Number"
          width="130"
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
            <el-button
              type="primary"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "ProjectTable2",
  props:['project'],
  methods:{
    ...mapActions(["addMemberToReachOut"]),
    reachOut(id) {
      let updateInfo = {
        projectID: this.project.id,
        memberID: id
      };
      this.addMemberToReachOut(updateInfo)
    }
  },
  data() {
    return {
      tableData:[
        {role:"Location Manager",id:1234,name:"alex",email:"thebigtoeman77@gmail.com",phoneNumber:'631.766.9998',projects:"asdfasdf",priority:1,currentProject:"-",booked:false,pending:true,rate:"100"},
        {role:"Poduction Designer",id:12311111019,name:"jason",email:"jason@gmail.com",phoneNumber:'631.763.9998',projects:"asdfasdf",priority:1,currentProject:"-",booked:false,pending:true,rate:"25"}
      ]
    }
  },
  created(){

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
