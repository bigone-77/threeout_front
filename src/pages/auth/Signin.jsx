import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { styled } from "styled-components";

export default function Login() {
  const [state, setState] = useState({});
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setState(data);
    console.log(data); // 수정된 부분: 직접 받아온 데이터 출력
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Label>아이디</Label>
      <InputBox
        name="email"
        placeholder="이메일을 입력해주세요"
        {...register("email")}
      />

      <Label>비밀번호</Label>
      <InputBox
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        {...register("password")}
      />

      <Label>비밀번호 재확인</Label>
      <InputBox
        name="repassword"
        placeholder="확인을 위해 비밀번호를 입력해주세요"
        type="password"
        {...register("repassword")}
      />

      <SubmitBtn type="submit">다음 단계로 이동</SubmitBtn>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Label = styled.div``;
const InputBox = styled.input`
  margin-bottom: 10px;
`;
const SubmitBtn = styled.button``;
