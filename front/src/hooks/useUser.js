import axios from "axios";
import { useState } from "react";

export const useUser = (accessToken) => {
  const [userInfo, setUserInfo] = useState([]);
  // axt 으로 유저를 조회하는 api 연결
  const token = localStorage.getItem("access_token");
  const memberId = localStorage.getItem("user_id");

  axios
    .get(`http://localhost:8080/api/members/${memberId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
      setUserInfo({
        email: res.data.email,
        name: res.data.name,
      });
    });

  return {
    userInfo,
  };
};
