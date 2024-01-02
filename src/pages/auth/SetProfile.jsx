import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from "styled-components";
import ImageUpload from '../../components/ImageUpload';

export default function SetProfile() {
  const [state, setState] = useState({});
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      profile_img: '',
      nickname: '',
      promise: '',
    }
  });

  const profile_img = watch('profile_img');

  const setCustomValue = (id, value) => {
    setValue(id, value);
  }

  const handleFileUrlChange = (url) => {
      const modifiedUrl = url.split('.jpg')[0] + '.jpg';
      setCustomValue('profile_img', modifiedUrl);
  }

  const onSubmit = (data) => {
    setState(data);
    console.log(data); // 수정된 부분: 직접 받아온 데이터 출력
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <ImageUpload  
        onFileUrlChange={handleFileUrlChange}
        value={profile_img}
      />
      {/* <Label>아이디</Label> */}
      <InputBox
        name="nickname"
        placeholder="이메일을 입력해주세요"
        {...register("nickname")}
      />

      
      <InputBox
        name="promise"
        placeholder="비밀번호를 입력해주세요"
        type="promise"
        {...register("promise")}
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
