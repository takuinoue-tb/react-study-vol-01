import { FC, memo } from 'react';
import styled from 'styled-components';

const AmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #16160e;

    & label {
        color: #6b6b6b;
    }

    & select {
        width: 80px;
        height: 44px;
        padding: 0 10px;
        border: 1px solid #e5e5e5 ;
        border-radius: 4px;
        font-size: 16px;
        box-sizing: border-box;
    }

    & a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 280px;
        height: 56px;
        color: #fff;
        background-color: #ad0003;
        border-radius: 4px;
        text-decoration: none;
    }
`

type Props = {
    count: number;
}

export const FormAmount: FC<Props> = memo(({count}) => {

    const countArray:Array<number> = [];

    for (let i = 1; i <= count; i++ ) {
        if (i > 10) {
            break;
        }

        countArray.push(i);
    }

    return <>
        <AmountWrapper>
            <div className='amount__select'>
                <label htmlFor="amount">数量：</label>
                <select name="amount">
                    {countArray.map(count => <option key={count} value={count}>{count}</option>)}
                </select>
            </div>
            <a href="#">ふるさと納税でもらう</a>
        </AmountWrapper>
    </>
})