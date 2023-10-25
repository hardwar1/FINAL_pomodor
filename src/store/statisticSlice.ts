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
};

const initialState: initialState = {
  statistic: [],
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
    },

    addPauseTime(state, action: PayloadAction<number>) {
      const toDay = new Date().getTime();
      const date = new Date().getDate();

      for (const day of state.statistic) {
        if (new Date(day.date).getDate() === date) {
          day.timeOnPause += toDay - action.payload;
        }
      }
    },

    addWorkTime(state, action: PayloadAction<number>) {
      const toDay = new Date().getTime();
      const date = new Date().getDate();

      for (const day of state.statistic) {
        if (new Date(day.date).getDate() === date) {
          day.workTime += toDay - action.payload;
        }
      }
    },

    addStoradgeStatistic(state, action: PayloadAction<workDay[]>) {
      state.statistic = action.payload;
    },
  },

  
});

export const { pushStatEndPomodor, addStopCount, addPauseTime, addWorkTime, addStoradgeStatistic } =
  statisticSlice.actions;
export default statisticSlice.reducer;
