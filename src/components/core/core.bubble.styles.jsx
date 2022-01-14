import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: table;
    font-size: ${props => props.size/10+10}px;
    width: ${props => props.size*2}px;
    height: ${props => props.size*2}px;
`;

export const TitleText = styled.p`
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    color: ${props => props.fontColour}
`;