import axios from "axios";

export const BASE_URL = "http://localhost:8080"; // 다른페이지에서 아직 참조중이라 남겨둡니다

// 로그인 함수
export const axiosLogin = async (data) => {
  return axios
    .post("http://localhost:8080/login", data, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
      },
    })
    .then((res) => {
      if (!res.ok) {
        console.log(res);
      }
      if (res.status === 200) {
        console.log("로그인 성공!");
        // 토큰 저장
        const accessToken = res.headers.get("Authorization");
        const refreshToken = res.headers.get("refresh");
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("refresh_token", refreshToken);
      }
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

// 유저 조회
export const getUserInfo = async () => {
  return axios
    .get("http://localhost:8080/members", {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Accept: "application/json",
        authorization: localStorage.getItem("access_token"),
      },
    })
    .then((res) => {
      if (!res.ok) {
        // error coming back from server
        throw Error("could not fetch the data for that resource");
      }
      return res;
    })
    .catch((err) => console.log(err));
};

// 로그인 후 데이터가 없으면 다시 로그인 페이지로 이동
export const checkIfLogined = async () => {
  return await getUserInfo().then((data) => {
    if (!data) {
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    }
  });
};

// 로그인 데이터 fetch
// const onLoginData = async (callback) => {
//   const loginData = {
//     email: email,
//     password: password,
//   };
//   const goHome = () => {
//     navigate("/");
//   };
//   let login = await axiosLogin(loginData).then((data) => {
//     if (data.status === 200) {
//       goHome();
//       window.location.reload();
//     }
//   });
// };
