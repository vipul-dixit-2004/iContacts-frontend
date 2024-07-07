import { create } from "zustand";
import axios from "axios";

const contactStore = create((set) => ({
  data: null,
  load: true,
  fail: false,
  getData: async () => {
    try {
      const response = await axios.post("/fetchContacts", {
        _id: "667a96f77e92dd6fc8f9b492",
      });
      // if(response.data.hasOwnProperty('status') && !response.data.status) throw Error;
      set({
        data: response.data,
        load: false,
      });
    } catch (err) {
      set({
        fail: true,
      });
    }
  },

  loginFields: {
    email: "",
    password: "",
  },
}));

export default contactStore;
