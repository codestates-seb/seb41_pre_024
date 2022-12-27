import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'myBookmarks',
  initialState: {
    question_bookmarks: [],
    answer_bookmarks: [
      {
        answer_id: 100,
        answer_content: 'answer bookmarks 샘플입니다',
        answer_recommend: 2,
        answer_time: 'Dec 13 at 12:06',
        answer_choose: false,
        member_id: 'Lily',
        question_id: 1,
      },
    ],
  }, //
  reducers: {
    add_answer_bookmark: (state, action) => {
      state.answer_bookmarks = [...state.answer_bookmarks, action.payload];
    },
    remove_answer_bookmark: (state, action) => {
      state.answer_bookmarks = state.answer_bookmarks.filter(
        (item) => item.answer_id !== action.payload
      );
    },
  },
});

export default bookmarkSlice;
export const { add_answer_bookmark, remove_answer_bookmark } =
  bookmarkSlice.actions;
