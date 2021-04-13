import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";



const Question10 = (props) => {


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 10 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    How would you measure the quality of a source code?
              </div>
            </div>
            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="margin-y-sm text-overflow-break">
                    In my opinion, there are some factors i use to measure my code quality. First is the <b>readability for my code</b>, prevent messy and unnecessary code, will make my code easier to troubleshoot and modify. Second is the <b>reusability and ease of maintenance</b>, making my code function become more general and pack it together to improve the reusability and ease of maintenance. This can reduce my coding time and easier to maintain my code. Thrid is <b>resources consistency</b>, make sure all the resources, configuration variables, and general use data are using same source. Prevent any data inconsistency in future changes. Finally is <b>error handling of your code</b>, ensure your code handling cases as many as possible, this really rely on the experience of programmer, this also is my weakest part in writing codes.                    </div>
                </Scrollbars>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question10);
