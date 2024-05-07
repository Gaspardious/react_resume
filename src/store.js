import { configureStore, createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice ( {
name: "theme",
initialState: {
    mode: "light", //starta med light mode som standard
},

reducers: {
    toggleTheme: (state) => { 
        state.mode = state.mode === "light" ? "dark" : "light";
   //state.mode: aktuella värder av mode-egenskapen
   //villkor som kontrollerar om det aktuella temat är ljut eller inte
   //om villkoret state-mode är  === "light" (sant) tilldelas värdet "dark" till state 
    },
},

});



export const Store  = configureStore ( {
    reducer: {
        theme: themeSlice.reducer

    },

});

export const {toggleTheme} = themeSlice.actions;

