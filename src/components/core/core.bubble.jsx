import React, {useState} from "react";
import PropTypes from "prop-types";
import {TitleText, TitleWrapper} from "components/core/core.bubble.styles";

const CoreBubble = ({size, title, x, y}) => {
    const [randomNumber] = useState(Math.floor(Math.random() * 16777215));

    const calculateFontColour = (randomNumber) => {
        const MAX_INT = 16777215;
        if (randomNumber > (MAX_INT/2) || randomNumber < 100000) {
            return "black";
        }
        return "white";
    }

    return (
        <>
            <svg>
                <circle
                    cx={x.coords}
                    cy={y.coords}
                    fill={`#${randomNumber.toString(16)}`}
                    r={size.value/5}
                    data-testid={"circle"}
                />
                <foreignObject
                    x={x.coords-35}
                    y={y.coords-35}
                    width={size.value/2.5}
                    height={size.value/2.5}>
                    <TitleWrapper size={size.value/5}>
                        <TitleText
                            title={`Title: ${title}\n${size.name}: ${size.value}\n`+
                                `${x.keyVal.name}: ${x.keyVal.value}\n`+
                                `${y.keyVal.name}: ${y.keyVal.value}`
                            }
                            fontColour={calculateFontColour(randomNumber)}
                        >
                            {title}
                        </TitleText>
                    </TitleWrapper>
                </foreignObject>
            </svg>
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