import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: "Jon Doe",
    reducers: {
        changeUserName: (state,action) => {
          const inputValue = action.payload
          return inputValue
        }
    }
})

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;