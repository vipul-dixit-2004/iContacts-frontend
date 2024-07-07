import axios from "axios";
import { NavLink } from "react-router-dom";
import { create } from "zustand";

const authStore = create((set) => ({
  loginCred: {
    email: "",
    password: "",
  },
  signupFields: {
    user_name: "",
    user_email: "",
    mob: "",
    password: "",
  },
  signUpSuccess: false,
  handleSignUpFieldChange: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupFields: {
          ...state.signupFields,
          [name]: value,
        },
      };
    });
  },

  handleSignUpSubmission: async (e) => {
    e.preventDefault();
    document.getElementById("signupBtn").innerHTML = "Creating...";
    document.getElementById("signupBtn").disabled = true;

    const { signupFields } = authStore.getState();
    const { user_email, user_name, mob, password } = signupFields;
    try {
      const response = await axios.post("/createUser", {
        user_email,
        user_name,
        mob,
        password,
      });
      if (response.data.status) {
        set({
          signupFields: {
            user_name: "",
            user_email: "",
            mob: "",
            password: "",
          },
          signUpSuccess: true,
        });
        console.log("Sucess");
        document.getElementById("signupBtn").innerHTML = "Create Account";
        document.getElementById("signupBtn").disabled = false;
      }
    } catch (err) {
      console.log(err);
      document.getElementById("signupBtn").innerHTML = "Create Account";
      document.getElementById("signupBtn").disabled = false;
    }
  },
}));

export default authStore;
