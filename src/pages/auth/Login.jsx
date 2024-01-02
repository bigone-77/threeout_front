import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const [info, setInfo] = useState({});
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setInfo(data);
    console.log(data);
  };

  const goToSign = () => {
    navigate("/signin");
  };

  return (
    <Wrapper>
      <Title>
        반가워요!
        <br />
        우리 같이 시작해볼까요?
      </Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputBox
          name="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        <InputBox
          name="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          {...register("password")}
        />

        <LoginBtn type="submit">로그인</LoginBtn>
        <SigninBtn onClick={goToSign}>회원가입</SigninBtn>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 80px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputBox = styled.input`
  width: 308px;
  height: 54px;
  margin-bottom: 32px;
  border-radius: 10px;
  border: 1px solid #000;
  padding: 12px;
`;

const LoginBtn = styled.button`
  width: 308px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: #170a0a;
  color: #fff;
  margin: 12px 0;
`;
const SigninBtn = styled.button`
  width: 308px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: #848484;
`;
