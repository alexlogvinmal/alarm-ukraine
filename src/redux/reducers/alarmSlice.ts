import { createSlice } from "@reduxjs/toolkit";
import { IRegion } from "../types";

interface IAlarmRegions {
    alarmRegions: IRegion[]
}

const initialState: IAlarmRegions = {
    alarmRegions: []
}

export const alarmSlice = createSlice({
    name: 'alarmSlice',
    initialState,
    reducers: {
        setAlarmRegions: (state, action) => {
            state.alarmRegions = action.payload
        },
    }
})

export const {
    setAlarmRegions
} = alarmSlice.actions

export default alarmSlice.reducer