import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios"
import config from "../config"



export const getPersonsAPI = createAsyncThunk("person/getPersonsAPI", async (): Promise<Person[]> =>
    (await axios.get(`${config.api}/person`)).data
)

export const addPersonAPI = createAsyncThunk("person/addPersonAPI", async (newPerson: Person) =>
    await axios.post(`${config.api}/person`, newPerson)
)

export const updatePersonAPI = createAsyncThunk("person/updatePersonAPI", async (obj: { idperson: number, newPerson: Person }) =>{
    await axios.patch(`${config.api}/person/${obj.idperson}`, obj.newPerson)
}
    
)

export const deletePersonAPI = createAsyncThunk("person/deletePersonAPi", async (idperson: number) =>
    await axios.delete(`${config.api}/person/${idperson}`)
)

