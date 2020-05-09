import axios from "axios";

const state = {
  allContacts: [],
  sorted: false
};

const getters = {
  allContacts: state => state.allContacts,
  helloWorld: () => {
    return "helloe";
  }
};

const actions = {
  async fetchContacts({ commit }) {
    const response = await axios.get(
      "http://evening-forest-25502.herokuapp.com/venues"
    );
    commit("setContacts", response.data);
  },
  async addNewContact({ commit }, newContact) {
    const response = await axios.post(
      "http://evening-forest-25502.herokuapp.com/newContact",
      { newContact: newContact }
    );
    commit("newContact", response.data.allContacts);
  },
  async deleteContact({ commit }, contactID) {
    const response = await axios.post(
      "http://evening-forest-25502.herokuapp.com/removeContact",
      { contactID: contactID }
    );
    console.log(response);
    commit("deleteContact", contactID);
  },
  async sortContacts({ commit }) {
    commit("sortContacts");
  }
};

const mutations = {
  setContacts: (state, allContacts) => (state.allContacts = allContacts),
  newContact: (state, newContactList) => (state.allContacts = newContactList),
  deleteContact: (state, contactID) =>
    (state.allContacts = state.allContacts.filter(
      contact => contact.id !== contactID
    )),
  sortContacts: state => {
    if (state.sorted) {
      state.sorted = false;
      state.allContacts = state.allContacts.sort(function(a, b) {
        return a.priority - b.priority;
      });
      return;
    }
    state.sorted = true;
    state.allContacts = state.allContacts.sort(function(a, b) {
      return b.priority - a.priority;
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
