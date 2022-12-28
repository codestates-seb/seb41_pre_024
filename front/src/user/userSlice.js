import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "myBookmarks",
  initialState: {
    question_bookmarks: [
      {
        id: 300,
        question_title: "😀 Question Bookmark Sample",
        question_content:
          "🍉 Small question on Spring Boot, and how to use a design pattern combined with Spring @Value configuration in order to select the appropriate @Repository please.n",
        question_tag: ["mysql", "database"],
        question_recommend: 2,
        question_time: "Dec 19 at 5:48",
        member_id: "Mimi",
      },
    ],
    answer_bookmarks: [
      {
        answer_id: 100,
        answer_content: "Answer Bookmarks 샘플입니다",
        answer_recommend: 2,
        answer_time: "Dec 13 at 12:06",
        answer_choose: false,
        member_id: "Lily",
        question_id: 1,
      },
    ],
  }, //
  reducers: {
    add_question_bookmark: (state, action) => {
      state.question_bookmarks = [...state.question_bookmarks, action.payload];
    },
    remove_question_bookmark: (state, action) => {
      state.question_bookmarks = state.question_bookmarks.filter(
        (item) => item.id !== action.payload.id
      );
    },
    add_answer_bookmark: (state, action) => {
      state.answer_bookmarks = [...state.answer_bookmarks, action.payload];
    },
    remove_answer_bookmark: (state, action) => {
      state.answer_bookmarks = state.answer_bookmarks.filter(
        (item) => item.answer_id !== action.payload.answer_id
      );
    },
  },
});
export default userSlice;
export const {
  add_question_bookmark,
  remove_question_bookmark,
  add_answer_bookmark,
  remove_answer_bookmark,
} = userSlice.actions;
