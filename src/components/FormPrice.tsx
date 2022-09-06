import { FC, memo } from 'react';
import styled from 'styled-components';

const PriceWrapper = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #16160e;

    & .price__wrapper {
        display: flex;
        align-items: baseline;
        margin: 0;
    }

    & .price__label {
        color: #6b6b6b;
        font-size: 14px;
        font-weight: normal;
    }

    & .price__sub {
        font-size: 13px;
        margin-left: 5px;
    }

    & .price__note {
        font-size: 14px;
        font-weight: normal;
        color: #e8000a;
        margin: 4px 0 16px;
    }
`

type Props = {
    price: number;
}

export const FormPrice: FC<Props> = memo(({price}) => {

    const convertedToString:string = price.toLocaleString();

    return <>
        <PriceWrapper>
            <p className='price__wrapper'><span className='price__label'>寄付額：</span>{convertedToString}円<span className='price__sub'>送料無料</span></p>
            <p className='price__note'>何回かお礼の品をもらっても実質年間2,000円の負担</p>
        </PriceWrapper>
    </>;
})