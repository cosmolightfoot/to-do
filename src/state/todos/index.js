import createSlice from '@reduxjs/toolkit';

const initialState = {
  data: [],
  byId: {}
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    setTodos: (state, action) => ({
      data: action.payload,
      byId: action.payload.reduce((prev, curr) => ({
        ...prev, [curr.id]: curr
      }), {})
    })
  }
});

export default todoSlice.reducer;
export const { setTodos } = todoSlice.actions;

const getTodoState = state => state.todos || {};
export const getTodos = state => getTodoState(state).data || [];
export const getTodoById = (state, id) => getTodoState(state).byId[id] || {};