import axios from "axios";

const state = {
  allProjects: []
};

const getters = {
  allProjects: state => {
      return state.allProjects
    }
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
    commit("newProj", response.data.newProject);
  },
  async addMemberToProject({ commit }, updateInfo) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/newMemberToProj",
      { updateInfo: updateInfo }
    );
    commit("addNewMember", response.data.allProjects);
  },
  async addMemberToReachOut({ commit }, updateInfo) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/memberToReachOut",
      { updateInfo: updateInfo }
    );
    commit("addMemberToReachOutCommit", response.data.update);
  }
};


const mutations = {
  setProjects: (state, allProjs) => (state.allProjects = allProjs),
  newProj (state, newProj) {
    state.allProjects.push(newProj)
  },
  addNewMember: (state, allProjs) => (state.allProjects = allProjs),
  addMemberToReachOutCommit(state, newProj) {
    

    console.log(newProj)
    //
    //
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
