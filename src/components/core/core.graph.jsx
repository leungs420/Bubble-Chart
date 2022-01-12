import "./core.graph.css";
import CoreBubble from "components/core/core.bubble";
import {useState} from "react";

const XYPlot = ({x, y, parsedGraphData}) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const [xLabels, setXLabels] = useState();
    const [yLabels, setYLabels] = useState();

    // const constructXLabels = (graphData) => {
    //
    // };

    const calculatePositionX = (minX, maxX, currentX) => {
        // minx - 100 would be at position height/2 and 0 for width
        // maxX + 100 would be at position height/2 and width
        // 1 - (current-min * 100)/(max-min) * width
        const range = maxX*2 - minX;
        const correctedStartValue = Math.abs(currentX - minX)*2;
        const percentage = correctedStartValue / range;

        return percentage * width;
    }

    const calculatePositionY = (minY, maxY, currentY) => {
        // minY - 100 would be at the position height and width/2
        // maxY + 100 would be at the position 0 for height and width/2
        // 1 - (current-min * 100)/(max-min) * height
        const range = maxY*2 - minY;
        const correctedStartValue = Math.abs(currentY - minY)*2;
        const percentage = 1 - (correctedStartValue / range);

        // console.log("MIN" , percentage);
        // console.log(100 - ((((currentY - minY - 100) * 100) / (maxY + 100 - minY))));
        return  percentage * height;
    }

    return (
        <>
        {parsedGraphData &&
            <>
                <svg className="graph" aria-labelledby="title" role="img">
                    <g className="grid x-grid" id="xGrid">
                        <line x1={width / 2} x2={width / 2} y1="0" y2={height}/>
                    </g>
                    <g className="grid y-grid" id="yGrid">
                        <line x1="0" x2={width} y1={height / 2} y2={height / 2}/>
                    </g>
                    {/*<g className="labels x-labels">*/}
                    {/*    <text x="100" y="400">2008</text>*/}
                    {/*    <text x="246" y="400">2009</text>*/}
                    {/*    <text x="392" y="400">2010</text>*/}
                    {/*    <text x="538" y="400">2011</text>*/}
                    {/*    <text x="684" y="400">2012</text>*/}
                    {/*    <text x="400" y="440" className="label-title">Year</text>*/}
                    {/*</g>*/}
                    {/*<g className="labels y-labels">*/}
                    {/*    <text x="80" y="15">15</text>*/}
                    {/*    <text x="80" y="131">10</text>*/}
                    {/*    <text x="80" y="248">5</text>*/}
                    {/*    <text x="80" y="373">0</text>*/}
                    {/*    <text x="50" y="200" className="label-title">Price</text>*/}
                    {/*</g>*/}
                    <g className="data">
                        {
                            parsedGraphData.map(pgd => {
                                return (
                                    <circle
                                        cx={calculatePositionX(x.min, x.max, pgd.x.value)}
                                        cy={calculatePositionY(y.min, y.max, pgd.y.value)}
                                        data-value="7.2"
                                        r={pgd.size.value / 5}
                                    />
                                    // <CoreBubble
                                    //     size={pgd.size}
                                    //     title={pgd.title}
                                    //     x={calculatePositionX(x.min, x.max, pgd.x.value)}
                                    //     y={calculatePositionY(x.min, x.max, pgd.x.value)}
                                    // />
                                );
                            })
                        }
                    </g>
                </svg>
            </>
        }
        </>
    );
};

export default XYPlot;