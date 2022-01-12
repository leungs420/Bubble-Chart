import React, {useEffect, useState} from "react";
import CoreBubble from "components/core/core.bubble";
import {connect} from "react-redux";
import {getGraphData} from "redux/redux.actions";
import PropTypes from "prop-types";

const LandingPage = ({getGraphData, graphData}) => {
    const [parsedGraphData, setParsedData] = useState();
    const HEADERS = {
        title: {
            key: "title",
        },
        size: {
            key: "salary",
            label: "Salary",
        },
        x: {
            key: "compratio",
            label: "Compratio",
        },
        y: {
            key: "headcount",
            label: "Headcount",
        }
    };

    useEffect(() => {
        if (!graphData) {
            getGraphData();
        }
    }, [getGraphData, graphData]);

    useEffect(() => {
        const parseGraphData = (graphData) => {
            const updatedData = graphData.map(gData => {
                return {
                    title: gData[HEADERS.title.key],
                    size: {
                        name: HEADERS.size.label,
                        value: gData[HEADERS.size.key],
                    },
                    x: {
                        name: HEADERS.x.label,
                        value: gData[HEADERS.x.key],
                    },
                    y: {
                        name: HEADERS.y.label,
                        value: gData[HEADERS.y.key],
                    }
                };
            });

            setParsedData(updatedData);
        };

        if(graphData && !parsedGraphData) {
            parseGraphData(graphData);
        }
    }, [graphData, parsedGraphData, setParsedData]);

    console.log(parsedGraphData);

    return (
        <div>
            <h1>Welcome to my application!</h1>
            {
                parsedGraphData && parsedGraphData.map(pgd => {
                    return (
                        <CoreBubble size={pgd.size} title={pgd.title} x={pgd.x} y={pgd.y}/>
                    );
                })
            }
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGraphData: () => dispatch(getGraphData()),
    };
};

const mapStateToProps = (state) => {
    return {
        graphData: state.graph.graphData,
    };
};

LandingPage.propType = {
    getGraphData: PropTypes.func.isRequired,
    graphData: PropTypes.arrayOf([
        PropTypes.objectOf([
            PropTypes.number, PropTypes.string
        ])
    ]),
};

export default connect(mapStateToProps, mapDispatchToProps) (LandingPage);