import styled from 'styled-components';

const BlogList = styled.div`
    width: 66.66667%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-top: 30px;
`
const Item = styled.div`
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
`
const Title = styled.div`
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
`

const Meta = styled.div`
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    display: flex;
    justify-content: flex-start;
`

const Time = styled.span`
    margin-right: 1vw;
`
const Flag = styled.span`
`
export {
    BlogList,
    Item,
    Title,
    Meta,
    Time,
    Flag
}