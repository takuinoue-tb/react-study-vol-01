import { FC } from 'react';
import { FormWrapper } from './FormWrapper'
import { FormPrice } from './FormPrice'
import { FormCount } from './FormCount'
import { FormAmount } from './FormAmount'
import { FormUrl } from './FormUrl'

type Props = {
  price: number;
  count: number;
  url: string;
};

export const FormProduct: FC<Props> = ({ price, count, url, }) => {
  return <>
    <FormWrapper backgroundColor={"#f6f6f6"} wrapperWidth={"600"} wrapperHeight={"280"}>
      <FormPrice price={price} />
      <FormCount count={count} />
      <FormAmount count={count} />
      {url && <FormUrl url={url} />}
    </FormWrapper>
  </>;
};
