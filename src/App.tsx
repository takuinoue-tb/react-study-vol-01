import { FC, useState } from "react";
import { FormProduct } from "./components/FormProduct";
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-bottom: 16px;
  text-align: center;

  :first-child {
    margin-top: 80px
  }

  > .label {
    display: inline-flex;
    align-items: center;

    > .text {
      margin-right: 8px;
    }

    > .input {
      padding: 8px 16px;
    }
  }
`;

export const App: FC = () => {
  const [price, setPrice] = useState(10000);
  const [count, setCount] = useState(10);
  const [url, setUrl] = useState('');

  return (<>
    <InputWrapper>
      <label className="label">
        <span className="text">お礼の品の金額</span>
        <input className="input" type="number" value={price} onChange={(event) => {
          setPrice(Number(event.currentTarget.value));
        }} />
      </label>
    </InputWrapper>
    <InputWrapper>
      <label className="label">
        <span className="text">お礼の品の在庫</span>
        <input className="input" type="number" value={count} min="0" onChange={(event) => {
          setCount(Number(event.currentTarget.value));
        }} />
      </label>
    </InputWrapper>
    <InputWrapper>
      <label className="label">
        <span className="text">通常購入のURL</span>
        <input className="input" type="url" value={url} onChange={(event) => {
          setUrl(event.currentTarget.value);
        }} />
      </label>
    </InputWrapper>
    <FormProduct price={price} count={count} url={url} />
  </>)
};
