import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

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
  const { id } = useParams;
  // const navigate = useNavigate();

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
    // name / password 수정
    console.log("nameValue :", nameValue);
    console.log("passwordValue :", passwordValue);
    console.log("passwordCheckValue :", passwordCheckValue);
  };

  // const patchUserData = () => {
  //   let body = {
  //     userName: nameValue,
  //     usesrPassword: passwordValue,
  //   };

  //   axios
  //     .patch(`/members/${id}`, body, {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const onClickToDelete = () => {
    // e.preventDefault();
    alert("정말 계정을 삭제하시겠습니까?");

    console.log(`${id}`); // undefined

    axios
      .delete(`/members/${id}`) // 이렇게 아이디 값으로 주면 안 됨 -> 왜 ? 지금 회원 조회를 안해서 ??
      .then((res) => {
        console.log(res);
        // 로그아웃 시키기 (-> 홈으로 이동?)
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("저장되었습니다.");
    checkName();
    checkPassword();
    checkPasswordCheck();

    if (!nameErr && !passwordErr && !passwordCheckErr) {
      console.log("No Err");
      // patchUserData()
    } else {
      console.log("Here is the Err");
    }
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
          <button onClick={onClickToEdit}>Save</button>
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
