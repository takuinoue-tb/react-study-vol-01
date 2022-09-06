import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{backgroundColor: string; wrapperWidth: string; wrapperHeight: string}>`
    width: ${({wrapperWidth}) => `${wrapperWidth}px`};
    height: ${({wrapperHeight}) => `${wrapperHeight}px`};
    background-color: ${({backgroundColor}) => backgroundColor};
    margin: 80px auto 0;
    padding: 40px;
    box-sizing: border-box;
`

type Props = {
    children: React.ReactNode;
    backgroundColor: string;
    wrapperWidth: string;
    wrapperHeight: string;
}

export const FormWrapper: FC<Props> = ({children, wrapperWidth, wrapperHeight, backgroundColor}) => {

    return <>
        <Wrapper wrapperWidth={wrapperWidth} wrapperHeight={wrapperHeight} backgroundColor={backgroundColor} >
            {children}
        </Wrapper>
    </>
}