import axios from "axios";

const state = {
  allContacts: [],
  sorted: false
};

const getters = {
  allContacts: state => state.allContacts
};

// need to check if these requests are successful..
const actions = {
  async fetchContacts({ commit }) {
    const response = await axios.get(
      "https://infinite-thicket-90693.herokuapp.com/contacts"
    );
    commit("setContacts", response.data);
  },
  async addNewContact({ commit }, newContact) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/newContact",
      { newContact: newContact }
    );
    commit("newContact", response.data.newContact);
  },
  async deleteContact({ commit }, contactID) {
    const response = await axios.post(
      "https://infinite-thicket-90693.herokuapp.com/removeContact",
      { contactID: contactID }
    );
    commit("deleteContact", response.data);
  },
  async sortContacts({ commit }) {
    commit("sortContacts");
  }
};

const mutations = {
  setContacts: (state, allContacts) => (state.allContacts = allContacts),
  newContact(state, newContact) {
    state.allContacts.push(newContact)
  },
  deleteContact: (state, contacts) =>
    (state.allContacts = contacts ),
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
