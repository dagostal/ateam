<template>
  <div>
    <CreateContactModal v-on:close="closeModal()" />

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
              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
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
            <span>Name of User</span>
          </div>
        </el-header>

        <!-- table  -->
        <el-main>
          <el-table
            :data="allContacts"
            :default-sort="{ prop: 'priority', order: 'descending' }"
          >
            <el-table-column
              prop="role"
              label="Role"
              width="130"
              sortable
            ></el-table-column>
            <el-table-column
              prop="name"
              label="Name"
              sortable
              width="150"
            ></el-table-column>
            <el-table-column
              prop="email"
              label="Email"
              width="270"
            ></el-table-column>
            <el-table-column
              prop="phoneNumber"
              label="Number"
              width="200"
            ></el-table-column>
            <el-table-column
              prop="address"
              label="Address"
              width="150"
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
              <template scope="scope">
                <el-button
                  type="primary"
                  v-on:click="deleteContact(scope.row.id)"
                  icon="el-icon-delete"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CreateContactModal from "./CreateContactModal.vue";
import { mapActions } from "vuex";

export default {
  name: "ContactApp",
  computed: {
    allContacts() {
      return this.$store.getters.allContacts;
    }
  },
  components: {
    CreateContactModal
  },
  mounted() {},
  data() {
    return {
      tableData: []
    };
  },
  created() {},
  methods: {
    ...mapActions(["sortContacts", "deleteContact"]),
    closeModal() {
      this.$modal.hide("create-contact");
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
