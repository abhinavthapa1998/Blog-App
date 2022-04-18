import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: "0", name: "Abhinav Thapa" },
  { id: "1", name: "Rishabh Sharma" },
  { id: "2", name: "Shashank Shah" }
];
const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;
export default UsersSlice.reducer;
