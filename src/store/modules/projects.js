import axios from "axios";

const state = {
  allProjects: []
};

const getters = {
  allProjects: state => state.allProjects
};

const actions = {
  async fetchProjects({ commit }) {
    const response = await axios.get(
      "https://infinite-thicket-90693.herokuapp.com/projects"
    );
    commit("setProjects", response.data);
  },
  async addNewProject({ commit }, newProj) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/newProject",
      { newProj: newProj }
    );
    commit("newProj", response.data.allProjects);
  },
  async addMemberToProject({ commit }, updateInfo) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/newMemberToProj",
      { updateInfo: updateInfo }
    );
    commit("addNewMember", response.data.allProjects);
  },
  async addMemberToHold({ commit }, updateInfo) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/memberToHold",
      { updateInfo: updateInfo }
    );
    commit("addMemberToHoldCommit", response.data.allProjects);
  },
  async addMemberToReachOut({ commit }, updateInfo) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/memberToReachOut",
      { updateInfo: updateInfo }
    );
    commit("addMemberToReachOutCommit", response.data.allProjects);
  }
};

const mutations = {
  setProjects: (state, allProjs) => (state.allProjects = allProjs),
  newProj: (state, newProjs) => (state.allProjects = newProjs),
  addNewMember: (state, allProjs) => (state.allProjects = allProjs),
  addMemberToHoldCommit: (state, allProjs) => (state.allProjects = allProjs),
  addMemberToReachOutCommit: (state, allProjs) => (state.allProjects = allProjs)
};

export default {
  state,
  getters,
  actions,
  mutations
};
