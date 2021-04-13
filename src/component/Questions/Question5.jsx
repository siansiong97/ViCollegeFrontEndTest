import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Graph } from 'graphs-adt';
import Scrollbars from "react-custom-scrollbars";


Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}

const hops = [[1, 2], [1, 3], [3, 4], [4, 5], [5, 6], [5, 7],
[1, 7], [2, 8], [8, 9], [9, 11], [9, 10], [7, 10],
[10, 12], [10, 14], [12, 13], [14, 15]]

const nodes = hops.flat().unique();

const Question5 = (props) => {

    const [values, setValues] = useState([]);

    const g = new Graph();

    useEffect(() => {
        nodes.forEach(addNode);
        hops.forEach(hop => addEdge(...hop))
        setValues(g.getPath('1', '15'));
    }, [])


    function addNode(value) {
        g.addNode(`${value}`);
    }

    function addEdge(start, destination, weight = 1) {
        g.addEdge(`${start}`, `${destination}`, weight)
    }



    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 5 :
              </div>
                <div className="headline text-overflow-break margin-y-xs" style={{ maxWidth: '100%' }}>
                    Find the least number of hops needed to get from ID=1 to ID=15 using the
                    array tuple provided below. For example, to get from ID=1 to ID=4 will
                    require 2 hops – [1,3] follow by [3,4].
              </div>
                <div className="headline text-overflow-break margin-y-xs ">
                    <span className='d-inline-block round-border background-black-opacity-50 white padding-sm' >
                        {`var x = ${JSON.stringify(hops)}`}
                    </span>
                </div>
            </div>
            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="flex-justify-start flex-items-align-center margin-y-sm">
                        <span className='d-inline-block margin-right subtitle1 black' >
                            Shortest Path :
                        </span>
                        <span className='flex-jusitfy-start flex-items-align-center ' >
                            {
                                (values || []).map((value, index) => {
                                    return (
                                        <span key={`value-${index}`} className='d-inline-block margin-sm round-border background-black-opacity-50 white padding-sm text-align-center' style={{ minWidth: 50 }} >
                                            {value}
                                        </span>
                                    )
                                })
                            }
                        </span>
                    </div>
                    <div className="flex-justify-start flex-items-align-center margin-y-sm">
                        <span className='d-inline-block margin-right subtitle1 black' >
                            Shortest Steps :
                        </span>
                        <span className='flex-jusitfy-start flex-items-align-center padding-x-md subtitle1 black' >
                            {`${Array.isArray(values) ? values.length : 'NaN'}`}
                        </span>
                    </div>
                    <div className="flex-justify-start flex-items-align-start margin-y-md">
                        <span className='d-inline-block margin-right subtitle1 black' >
                            Note :
                        </span>
                        <span className='flex-jusitfy-start flex-items-align-center padding-x-md subtitle1 black flex-wrap width-80 text-overflow-break' >
                            I tried so hard to write the Dijkstra Algorithm by myself. Because of a lack of training on data structure and algorithms, I decided to import a library to complete this question. Will need times to do revision and practical on this topic.
                        </span>
                    </div>
                </Scrollbars>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question5);
