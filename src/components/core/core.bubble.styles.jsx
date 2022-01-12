import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: table;
    font-size: ${props => props.size/10+10}px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
`;

export const TitleText = styled.p`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color: ${props => props.fontColour}
`;

export const Tooltip = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 1.42857143;
    text-align: left;
    text-align: start;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 12px;
    display: inline-block;
    
    & > ul {
        max-width: 200px;
        padding: 3px 8px;
        color: #fff;
        text-align: center;
        background-color: #000;
        border-radius: 4px;
    }
`;