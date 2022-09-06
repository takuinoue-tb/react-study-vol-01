import { FC, memo } from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    font-size: 16px;
    margin-bottom: 16px;
    color: #16160e;

    & span {
        color: #6b6b6b;
        font-size: 14px;
    }
`

type Props = {
    count: number;
}

export const FormCount: FC<Props> = memo(({count}) => {

    let text:string;

    if (count === 0) {
        text = '品切れ'
    } else if (count <= 5) {
        text = '残りわずか。寄付はお早めに'
    } else {
        text = `${count}個`
    }

    return <>
        <CountWrapper><span>在庫：</span>{text}</CountWrapper>
    </>
})