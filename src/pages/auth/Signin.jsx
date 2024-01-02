import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("이메일 형식이 아닙니다."),
  password: yup
    .string()
    .required("영문, 숫자포함 8자리를 입력해주세요.")
    .min(8, "최소 8자 이상 가능합니다")
    .max(15, "최대 15자 까지만 가능합니다")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "영문 숫자포함 8자리를 입력해주세요."
    ),
  passwordConfirm: yup
    .string()
    .required("비밀번호 확인을 해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다."),
});

export default function Login() {
  const [info, setInfo] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema), // Use yup resolver for validation
  });

  const onSubmit = (data) => {
    setInfo(data);
    console.log(data);
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Label first>아이디</Label>
      <InputBox
        name="email"
        placeholder="이메일을 입력해주세요"
        {...register("email")}
      />
      {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

      <Label>비밀번호</Label>
      <InputBox
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        {...register("password")}
      />
      {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

      <Label>비밀번호 재확인</Label>
      <InputBox
        name="passwordConfirm"
        placeholder="확인을 위해 비밀번호를 입력해주세요"
        type="password"
        {...register("passwordConfirm")}
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm.message}</ErrorText>
      )}

      <SubmitBtn type="submit">다음 단계로 이동</SubmitBtn>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 42px;
  margin-bottom: 32px;

  ${(props) =>
    props.first &&
    css`
      margin-top: 0;
    `}
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
const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  margin: 0 0 12px 6px;
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
