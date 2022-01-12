import React, {useState} from "react";
import PropTypes from "prop-types";
import {TitleText, TitleWrapper} from "components/core/core.bubble.styles";
import ToolTip from "components/core/core.tooltip";

const CoreBubble = ({size, title, x, y}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [randomNumber] = useState(Math.floor(Math.random() * 16777215));

    const calculateFontColour = (randomNumber) => {
        const MAX_INT = 16777215;
        if (randomNumber > (MAX_INT/2) || randomNumber < 100000) {
            return "black";
        }
        return "white";
    }
    console.log(isHovered);

    return (
        <>
            <svg
                width={size.value/2}
                height={size.value/2}
                viewBox={`0 0 ${size.value} ${size.value}`}
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <circle
                    cx={size.value/2}
                    cy={size.value/2}
                    r={size.value/2}
                    fill={`#${randomNumber.toString(16)}`}
                />
                <foreignObject x={0} y={0} width={size.value} height={size.value}>
                    <TitleWrapper size={size.value}>
                        <TitleText title={title} fontColour={calculateFontColour(randomNumber)}>
                            {title}
                        </TitleText>
                    </TitleWrapper>
                </foreignObject>
            </svg>
            {isHovered &&
                <ToolTip textValues={[size, x, y]}/>
            }
        </>
    )
};

CoreBubble.propType = {
    size: PropTypes.objectOf([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    x: PropTypes.objectOf([PropTypes.number, PropTypes.string]).isRequired,
    y: PropTypes.objectOf([PropTypes.number, PropTypes.string]).isRequired,
};

export default CoreBubble;