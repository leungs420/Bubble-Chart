import styled from "styled-components";

export const Graph = styled.svg`
    height: 100vh;
    width: 100vw;
    display: block;
`;

export const Grid = styled.g`
    stroke: #ccc;
    stroke-dasharray: 0;
    stroke-width: 1;
`;

export const CoordLabel = styled.text`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    fill: black;
`;