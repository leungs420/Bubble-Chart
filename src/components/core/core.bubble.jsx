import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

const CoreBubble = ({size, title}) => {
    const bubbleCanvasRef = useRef(null);

    useEffect(() => {
        const bubbleCanvas = bubbleCanvasRef.current;
        const context = bubbleCanvas.getContext("2d");
        drawBubble(context);
    });

    const drawBubble = (context) => {
        const randomNumber = Math.floor(Math.random()*16777215)
        const randomColour = randomNumber.toString(16);

        console.log(randomNumber)

        context.fillStyle = `#${randomColour}`;
        context.styles = { border: `1px solid #${randomColour}`}
        const centerX = size/2;
        const centerY = size/2;
        const radius = size/2;
        context.arc(centerX, centerY, radius, 0, 7, false);
        context.fill();

        context.fillStyle = calculateFontColour(randomNumber);
        context.textAlign = "center";
        context.fillText(title, centerX, centerY);
    };

    const calculateFontColour = (randomNumber) => {
        const MAX_INT = 16777215;
        if (randomNumber > (MAX_INT/2) || randomNumber < 100000) {
            return "black";
        }
        return "white";
    }

    return (
        <canvas
            ref={bubbleCanvasRef}
            width={size}
            height={size}
            // onMouseOver={} somebullshit animation
        >
            {title}
        </canvas>
    )
}

CoreBubble.propType = {
    // x: PropTypes.number.isRequired,
    // y: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default CoreBubble;