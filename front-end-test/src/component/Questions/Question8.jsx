import React from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";



const Question8 = (props) => {


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 8 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    Explain Angular Components and its primary purpose.
              </div>
            </div>
            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <Scrollbars autoHide autoHeight autoHeightMin={500}>
                    <div className="margin-y-sm text-overflow-break">
                        Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.

                        Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.

                        And the main purposes of components are <span className="font-weight-bold" >Reusability</span>, <span className="font-weight-bold" >Simplified Unit-Testing</span>, <span className="font-weight-bold" >Improved Readability</span>, <span className="font-weight-bold" >Ease of Maintenance</span>, <span className="font-weight-bold" >Code Consistency</span> and <span className="font-weight-bold" >Modular Structure
                    </span>, 
                    </div>
                </Scrollbars>
            </div>


        </React.Fragment>
    );
}


export default withRouter(Question8);
