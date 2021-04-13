import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";



const Question11 = (props) => {


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 11 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    What do you feel is the most promising new technology in web / software
                    development and why?
              </div>
            </div>

            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="margin-y-sm text-overflow-break">
                        In my opinion, AI(Artificial Intelligence) technology is the most promising technology in many aspects. For web and software, big data can perform many functionalities like push user preferences, automate progress, predict data, and so on.                    </div>
                </Scrollbars>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question11);
