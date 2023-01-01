import { createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'myBookmarks',
  initialState: {
    question_bookmarks: [
      {
        questionId: 300,
        title: '😀 Question Bookmark Sample',
        content:
          '🍉 Small question on Spring Boot, and how to use a design pattern combined with Spring @Value configuration in order to select the appropriate @Repository please.n',
        question_tag: ['mysql', 'database'],
        totalRecommend: 2,
        createdAt: 'Dec 19 at 5:48',
        member_id: 'Mimi',
      },
    ],
    answer_bookmarks: [
      {
        answerId: 100,
        content: 'Answer Bookmarks 샘플입니다',
        recommend: 2,
        createdAt: 'Dec 13 at 12:06',
        choose: false,
        member_id: 'Lily',
        questionId: 1,
      },
    ],
  }, //
  reducers: {
    add_question_bookmark: (state, action) => {
      state.question_bookmarks = [...state.question_bookmarks, action.payload];
    },
    remove_question_bookmark: (state, action) => {
      state.question_bookmarks = state.question_bookmarks.filter(
        (item) => item.questionId !== action.payload.questionId
      );
    },
    add_answer_bookmark: (state, action) => {
      state.answer_bookmarks = [...state.answer_bookmarks, action.payload];
    },
    remove_answer_bookmark: (state, action) => {
      state.answer_bookmarks = state.answer_bookmarks.filter(
        (item) => item.answerId !== action.payload.answerId
      );
    },
  },
});
export default bookmarkSlice;
export const {
  add_question_bookmark,
  remove_question_bookmark,
  add_answer_bookmark,
  remove_answer_bookmark,
} = bookmarkSlice.actions;
