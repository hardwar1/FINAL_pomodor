import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type workDay = {
  date: number;
  pomodor: number;
  workTime: number;
  stopCount: number;
  timeOnPause: number;
};

type initialState = {
  statistic: workDay[];
  startPauseTime: false | number;
  startWorkTime: false | number;
};

const initialState: initialState = {
  statistic: localStorage.statistic ? JSON.parse(localStorage.statistic) : [],
  startPauseTime: false,
  startWorkTime: false,
};

const statisticSlice = createSlice({
  name: "statistic",
  initialState,

  reducers: {
    pushStatEndPomodor(state, action: PayloadAction<number>) {
      const toDay = new Date().getTime();
      const date = new Date().getDate();
      // const toDayStat = state.statistic.filter((day) => day.date === toDay);
      for (const day of state.statistic) {
        if (new Date(day.date).getDate() === date) {
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

      localStorage.statistic = JSON.stringify(state.statistic);
    },

    addStopCount(state) {
      const toDay = new Date().getTime();
      const date = new Date().getDate();

      for (const day of state.statistic) {
        if (new Date(day.date).getDate() === date) {
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

      localStorage.statistic = JSON.stringify(state.statistic);
    },

    addPauseTime(state) {
      const toDay = new Date().getTime();
      const date = new Date().getDate();

      for (const day of state.statistic) {
        if (new Date(day.date).getDate() === date && state.startPauseTime) {
          day.timeOnPause += (toDay - state.startPauseTime) / 60000;
          state.startPauseTime = false;
        }
      }

      localStorage.statistic = JSON.stringify(state.statistic);
    },

    setStartPauseTime(state) {
      state.startPauseTime = new Date().getTime();
    },

    setStartWorkTime(state) {
      state.startWorkTime = new Date().getTime();
    },

    addWorkTime(state) {
      const time = new Date().getTime();
      const date = new Date().getDate();

      for (const day of state.statistic) {
        if (new Date(day.date).getDate() === date && state.startWorkTime) {
            day.workTime += (time - state.startWorkTime) / 60000;
            state.startWorkTime = false;
        }
      }

      localStorage.statistic = JSON.stringify(state.statistic);
    },

    resetStat(state) {
      state.statistic = [];
      localStorage.statistic = JSON.stringify([]);
    },
  },
});

export const {
  pushStatEndPomodor,
  addStopCount,
  addPauseTime,
  addWorkTime,
  resetStat,
  setStartPauseTime,
  setStartWorkTime,
} = statisticSlice.actions;
export default statisticSlice.reducer;
