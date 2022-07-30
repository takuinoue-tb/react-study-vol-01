import { FC } from 'react';

type Props = {
  price: number;
  count: number;
  url: string;
};

export const FormProduct: FC<Props> = ({ price, count, url }) => {
    return <>
      <div>寄付額：{price}</div>
      <div>在庫：{count}</div>
      <div>通常購入URL：{url}</div>
    </>;
};
