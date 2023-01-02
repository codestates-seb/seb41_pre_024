import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../hooks/useUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 500px;
`;

const FormContainer = styled.div`
  border: 1px solid #babfc4;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  gap: 20px;

  button {
    width: 50%;
    margin: 30px auto 0 auto;
    padding: 10px;
    background-color: #0a95ff;
    color: white;
    border: none;
    border-radius: 3px;
  }

  div {
    display: flex;
    flex-direction: column;
    font-weight: 600;

    p {
      color: #ea4335;
      font-size: small;
      font-weight: 400;
      margin-top: 5px;
    }

    input {
      height: 32px;
      border: 1px solid #babfc4;
      border-radius: 3px;
    }
  }
`;

const DeleteProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  button {
    border: none;
    border-radius: 3px;
    background-color: red;
    color: white;
    margin-top: 10px;
    padding: 10px;
    width: 30%;
  }
`;

const Edit = () => {
  const navigate = useNavigate();
  // const { userInfo } = useUser(localStorage.getItem("access_token"));
  // console.log(userInfo);
  const memberId = localStorage.getItem("user_id");

  const [nameValue, setnameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordCheckValue, setPasswordCheckValue] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordCheckErr, setPasswordCheckErr] = useState(false);

  const onChangeName = (e) => {
    setnameValue(e.target.value);
  };

  const checkName = () => {
    const nameRegex = /^[a-zA-Z가-힣0-9]{3,}$/;
    if (nameValue.length === 0 || !nameRegex.test(nameValue)) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const checkPassword = () => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    if (passwordValue.length === 0 || !passwordRegex.test(passwordValue)) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
  };

  const onChangePasswordCheck = (e) => {
    setPasswordCheckValue(e.target.value);
  };

  const checkPasswordCheck = () => {
    if (passwordValue !== passwordCheckValue) {
      setPasswordCheckErr(true);
    } else {
      setPasswordCheckErr(false);
    }
  };

  const onClickToEdit = () => {
    console.log("nameValue :", nameValue);
    console.log("passwordValue :", passwordValue);
    console.log("passwordCheckValue :", passwordCheckValue);
  };

  const patchUserData = () => {
    const token = localStorage.getItem("access_token");
    const body = {
      name: nameValue,
      password: passwordValue,
    };
    console.log(body);

    axios
      .patch(`http://localhost:8080/api/members/${memberId}`, body, {
        headers: { "Content-Type": "application/json" },
        Authorization: token,
      })
      .then((res) => {
        const { name } = res.data;
        console.log(res);
        // 수정된 이름 다시 저장
        localStorage.setItem("user_name", name);
        alert("회원정보 수정이 완료되었습니다.");
        setnameValue("");
        setPasswordValue("");
        setPasswordCheckValue("");
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    checkName();
    checkPassword();
    checkPasswordCheck();

    if (!nameErr && !passwordErr && !passwordCheckErr) {
      patchUserData();
    } else {
      console.log("Here is the Err");
    }
  };

  // 회원 탈퇴
  const withdrawal = () => {
    localStorage.removeItem("access_token");
  };

  const onClickToDelete = (e) => {
    e.preventDefault();
    alert("정말 계정을 삭제하시겠습니까?");
    const token = localStorage.getItem("access_token");

    axios
      .delete(`http://localhost:8080/api/members/${memberId}`, {
        headers: { "Content-Type": "application/json" },
        Authorization: token,
      })
      .then((res) => {
        console.log(res);
        alert("회원탈퇴가 완료되었습니다.");
        withdrawal();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h1>Edit</h1>
      <FormContainer>
        <EditForm onSubmit={onSubmit}>
          <div>
            <label>Display Name</label>
            <input type="text" value={nameValue} onChange={onChangeName} />
            {nameErr && <p>특수문자 없이 3자 이상 입력해주세요.</p>}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={passwordValue}
              onChange={onChangePassword}
            />
            {passwordErr && (
              <p className="err">
                영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
              </p>
            )}
          </div>
          <div>
            <label>Password Check</label>
            <input
              type="password"
              value={passwordCheckValue}
              onChange={onChangePasswordCheck}
            />
            {passwordCheckErr && (
              <p className="err">비밀번호가 일치하지 않습니다.</p>
            )}
          </div>
          <button type="submit" onClick={onClickToEdit}>
            Save
          </button>
        </EditForm>
        <DeleteProfile>
          Delete Profile
          <button onClick={onClickToDelete}>Delete</button>
        </DeleteProfile>
      </FormContainer>
    </Container>
  );
};
export default Edit;
