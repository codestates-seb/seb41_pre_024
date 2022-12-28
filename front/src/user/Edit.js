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
  const onClickToDelete = () => {
    alert("정말 계정을 삭제하시겠습니까?");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("저장되었습니다.");
  };

  return (
    <Container>
      <h1>Edit</h1>
      <FormContainer>
        <EditForm onSubmit={onSubmit}>
          <div>
            <label>Display Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
            <label>New password</label>
            <input type="password" />
          </div>
          <button>Save</button>
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
