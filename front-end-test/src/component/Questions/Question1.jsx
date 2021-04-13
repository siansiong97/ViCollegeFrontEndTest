import { Menu } from "antd";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Question1Image } from "../../icon";

const LIST_SIZE = 50;

const Question1 = (props) => {

    const [selectedIndex, setSelectedIndex] = useState();


    return (
        <React.Fragment>
            <div className="thin-border round-border padding-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Question 1 :
              </div>
                <div className="headline text-overflow-break margin-y-xs">
                    Create	a	HTML	page	with	a	list	of	items	from	which	users	can	choose	one	at	a
                    time.	Items	in	the	list	must	be	horizontally	centred	within	the	list,	and	the	list
                    itself	must	be	centred	both	horizontally	and	vertically	on	the	page.	When	any
                    item	in	the	list	is	mouse	over,	it	is	highlighted.	When	item	is	clicked,	it	is	shown
                    in	bold	and	a	prompt	is	raised	to	display	the	item’s	content.	When	a	new	item	is
                    clicked,	formatting	from	the	previous	item	must	be	removed	first.	Please	see
                    below	for	illustration,	and	the look	and	feel	that	should	be	matched	by	your	CSS.
                    Cross-browser	compatibility	with	minimally	Internet	Explorer	(v10)	and
                    Chrome	browsers	should	be	maintained.
              </div>
                <div className="flex-item-align-center flex-justify-start margin-y-xs">
                    <img src={Question1Image} style={{ width: 400, height: 400 }} />
                </div>
            </div>

            <div className="thin-border round-border padding-md margin-top-md">
                <div className="h6 font-weight-black margin-y-xs">
                    Answer :
              </div>
                <div className="flex-justify-center flex-items-align-center padding-md" style={{ height: 500 }}>
                    <span className='d-inline-block padding-md thin-border round-border box-shadow-normal' >
                        <Scrollbars autoHide autoHeight autoHeightMin={300} style={{ width: 400 }}>
                            <div className="background-white ">
                                {
                                    ([...Array(LIST_SIZE)].map(function (item, index) {
                                        return (
                                            <div className={`flex-justify-center border-bottom-grey padding-y-sm cursor-pointer hover-background-yellow-lighten-4 ${selectedIndex == index ? 'font-weight-bold' : ''}`}
                                                onClick={(e) => {
                                                    setSelectedIndex(index);
                                                    setTimeout(() => {
                                                        alert(`Item ${index + 1}`)
                                                    }, 100);
                                                }}>
                                                {`Item ${index + 1}`}
                                            </div>
                                        )
                                    }))
                                }

                            </div>
                        </Scrollbars>
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
}


export default withRouter(Question1);
