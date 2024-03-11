import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

// SignUpUser
export const signUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("dddddddddd", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
});

// Login User
export const signInUser = createAsyncThunk("signinuser", async (body) => {
  const res = await fetch("dddddddddd", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },

    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      state.token = localStorage.clear();
    },
  },
  extraReducers: {
    // --------------------- Register ---------------------
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      const {
        payload: { error, msg },
      } = action;

      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
    // --------------------- END Register ---------------------

    // ---------------------- Login ---------------------------
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      const {
        payload: { error, msg, token, user },
      } = action;

      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },
    // ---------------------- END Login -----------------------
  },
});

export const { addUser, addToken, logout } = authSlice.actions;
export default authSlice.reducer;
