import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export default function SetProfile() {
  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <Label>나의 별명</Label>
      <InputBox
        name="nickname"
        placeholder="친구들이 부르는 내 별병을 알려주세요!"
        {...register("nickname")}
      />

      <Label>비밀번호</Label>
      <InputBox
        name="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password")}
      />

      <SubmitBtn type="submit">다음 단계로 이동</SubmitBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 42px;
  margin-bottom: 32px;
`;
const InputBox = styled.input`
  width: 308px;
  height: 54px;
  border-radius: 10px;
  border: 1px solid #000;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 8px;
  padding: 12px;
`;
const SubmitBtn = styled.button`
  width: 308px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: #848484;
  color: #fff;
  text-align: center;
  font-size: 20px;
  margin-top: 32px;
`;
