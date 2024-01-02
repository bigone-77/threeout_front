import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";

export default function Login() {
  const [state, setState] = useState({});
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setState(data);
    console.log(data); // 수정된 부분: 직접 받아온 데이터 출력
    navigate('/auth/signin')
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
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
      <SigninBtn>회원가입</SigninBtn>
    </Wrapper>
  );
}

const Wrapper = styled.form`
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
