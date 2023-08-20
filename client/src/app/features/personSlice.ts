import { createSlice } from "@reduxjs/toolkit"
import { getPersonsAPI, addPersonAPI, updatePersonAPI, deletePersonAPI } from "../../api/person.api";

const initValue = {
   persons: [] as Person[]
}

const personSlice = createSlice({
   name: "persons",
   initialState: initValue,
   reducers: {
      
   },
   extraReducers: (builder) => {
      builder
         .addCase(getPersonsAPI.fulfilled, (state, action) => {
            state.persons = action.payload;
         })
         .addCase(getPersonsAPI.rejected, (state, action) => {
            alert(action.error.message);
         })
         .addCase(addPersonAPI.fulfilled, (state, action) => {
            const person: Person = (action.meta.arg) as Person;
            person.idperson = (action.payload as any).data.idperson;
            state.persons.push(person);
            alert("sucsses adding person");
         })
         .addCase(addPersonAPI.rejected, (state, action) => {
            alert(action.error.message);
         })
         .addCase(updatePersonAPI.fulfilled, (state, action) => {
            const findIndex = state.persons.findIndex((p: Person) => p.idperson === action.meta.arg.idperson);
            state.persons[findIndex].person_name = action.meta.arg.newPerson.person_name;
            alert("sucsses update person");

         })
         .addCase(updatePersonAPI.rejected, (state, action) => {
            alert(action.error.message);
         })
         .addCase(deletePersonAPI.fulfilled, (state, action) => {
            const indexDel: number = state.persons.findIndex((p: Person) => p.idperson === (action.meta.arg));
            state.persons.splice(indexDel, 1);
            alert("sucsses dalete person");
         })
         .addCase(deletePersonAPI.rejected, (state, action) => {
            alert(action.error.message);
         })
   }
})
export default personSlice.reducer;