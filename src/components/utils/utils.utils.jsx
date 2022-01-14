export const calculatePositionX = (minX, maxX, currentX, width) => {
    const mid = (maxX+minX)/2;
    const correctedStartValue = Math.abs(currentX - mid);
    const percentage = (correctedStartValue / mid);

    return percentage * width;
}

export const calculatePositionY = (minY, maxY, currentY, height) => {
    const mid = (maxY+minY)/2;
    const correctedStartValue = Math.abs(currentY - mid);
    const percentage = 1 - (correctedStartValue / mid);

    return  percentage * height;
}