/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { getTemplates, templatesApi } from "./api";

// Our new error field is configured here
const AppStateSlice = createSlice({
  name: "appState",
  initialState: "",
  reducers: {
    updateAppState: (state, action) => {
      return {
        ...state,
        isError: action.payload,
      };
    },
  },
});

const defaultTemplates = {
  data: [],
  isLoading: true,
  error: false,
};

export const fetchTemplates = createAsyncThunk("templates", async () => {
  return await getTemplates();
});

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TemplatesSlice = createSlice({
  name: "templates",
  initialState: defaultTemplates,
  reducers: {},
  extraReducers: (builder) => {
    // Handle fullfillment and failure
    builder.addCase(fetchTemplates.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchTemplates.rejected, (state, action) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateTemplateState } = TemplatesSlice.actions;

// The actions contained in the new slice are exported to be used in our components
export const { updateAppState } = AppStateSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    // Just Redux and fetch with async thunk
    templates: TemplatesSlice.reducer,
    isError: AppStateSlice.reducer,
    // RTK Query
    [templatesApi.reducerPath]: templatesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(templatesApi.middleware),
});

export default store;
