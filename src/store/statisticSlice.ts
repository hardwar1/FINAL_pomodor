import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type workDay = {
  date: Date;
  pomodor: number;
  workTime: number;
  stopCount: number;
  timeOnPause: number;
};

type initialState = {
  statistic: workDay[];
};

const initialState: initialState = {
  statistic: [],
};

const statisticSlice = createSlice({
  name: "statistic",
  initialState,

  reducers: {
    pushStatEndPomodor(state, action: PayloadAction<number>) {
      const toDay = new Date();
      // const toDayStat = state.statistic.filter((day) => day.date === toDay);
      for (const day of state.statistic) {
        if (day.date === toDay) {
          day.pomodor++;
          day.workTime += action.payload;
          return;
        }
      }

      state.statistic.push({
        date: toDay,
        pomodor: 1,
        workTime: action.payload,
        stopCount: 0,
        timeOnPause: 0,
      });
    },

    addStop(state) {
      const toDay = new Date();

      for (const day of state.statistic) {
        if (day.date === toDay) {
          day.stopCount++;
          return;
        }
      }

      state.statistic.push({
        date: toDay,
        pomodor: 0,
        workTime: 0,
        stopCount: 1,
        timeOnPause: 0,
      });
    },

    addPauseTime(state, action: PayloadAction<number>) {
      const toDay = new Date();

      for (const day of state.statistic) {
        if (day.date === toDay) {
          day.timeOnPause += action.payload;
        }
      }
    },
  },
});

export const { pushStatEndPomodor, addStop, addPauseTime } =
  statisticSlice.actions;
export default statisticSlice.reducer;
