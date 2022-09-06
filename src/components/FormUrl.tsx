import { FC, memo } from 'react';
import styled from 'styled-components';

const UrlWrapper = styled.div`
    font-size: 14px;
    margin-top: 16px;

    & a {
        display: flex;
        align-items: center;
        color: orange;
        text-decoration: none;
    }

    & span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        background-color: #fff;
        border-radius: 50%;
        box-sizing: border-box;
        border: 2px solid orange;
        margin-right: 8px;
        &::before {
            content: '';
            display: block;
            width: 6px;
            height: 6px;
            margin-left: 4px;
            border: 0px;
            border-top: 2px solid orange;
            border-right: 2px solid orange;
            transform: rotate(-135deg);
        }
    }
`

type Props = {
    url: string;
}

export const FormUrl: FC<Props> = memo(({url}) => {
    return <>
        <UrlWrapper><a href={url} target="_blank"><span></span>通常購入に戻る</a></UrlWrapper>
    </>;
})