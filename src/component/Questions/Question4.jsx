import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";


const TEST_STR = `["<r><a z=\"3\"><a z=\"2\"></r>", "<r><a
z=\"1\"><a z=\"2\"></r>", "<r><a z=\"4\"><a
z=\"2\"></r>"]`

const Question4 = (props) => {


    const [values, setValues] = useState([]);

    //Something like componentDidMount
    useEffect(() => {
        setValues(getZValues(TEST_STR));
    }, [])

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

    function findIndexesOfString(text, search) {
        if (text && search) {
            let indexes = [];
            let currentPosition = 0;
            while (currentPosition < text.length) {
                currentPosition = text.indexOf(search, currentPosition);
                if (currentPosition == -1) {
                    currentPosition = text.length;
                } else {
                    indexes.push(currentPosition);
                    currentPosition = currentPosition + search.length;
                }
            }

            return indexes;
        } else {
            return [];
        }
    }

    function getZValues(str = '') {
        let zValues = [];
        str = str.split('<a');
        str.forEach((substring) => {
            let substringChars = substring.split("");
            let foundIndexes = findIndexesOfString(substring, 'z=') || [];

            //Loop through found indexes
            foundIndexes.forEach((foundIndex) => {
                //Get Exact Value Of Z
                let indicatorCount = 0;
                let zValue = [];
                substringChars.forEach((substringChar) => {
                    if (substringChar == `"`) {
                        console.log('is "');
                        indicatorCount += 1;
                    } else if (indicatorCount > 0 && indicatorCount < 2) {
                        //Inside Value Range
                        zValue.push(substringChar);
                    } else {

                    }

                })
                zValue = zValue.join('');
                zValues.push(zValue);
            })
        })


        return (zValues || []).unique();

    }

    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 4 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    List out all the unique values of attribute “z” found in the following array list:
              </div>
                <div className="headline text-overflow-break margin-y-xs ">
                    <span className='d-inline-block round-border background-black-opacity-50 white padding-sm' >
                        {` var x = ${TEST_STR}`}
                    </span>
                </div>
            </div>

            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="">
                        {
                            (values || []).map((value) => {
                                return (
                                    <span className='d-inline-block margin-sm round-border background-black-opacity-50 white padding-sm text-align-center' style={{ minWidth: 50 }} >
                                        {value}
                                    </span>
                                )
                            })
                        }
                    </div>
                </Scrollbars>
            </div>
        </React.Fragment >
    );
}


export default withRouter(Question4);
