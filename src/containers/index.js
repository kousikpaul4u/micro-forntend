import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { search } from "actions/index";
import env from "env.config";

function HeaderApp(props) {

    const [userName, setUserName] = useState("");
    const [dob, setDob] = useState("");

    function onEvent({ detail }) {
        setUserName(detail.userName);
        setDob(detail.dob)
    }

    useEffect(() => {
        window.addEventListener(`${env.CONNECTED_APP.TODO_SIGNUP_APP}_set_signup_details`, onEvent);
        return () => window.removeEventListener(`${env.CONNECTED_APP.TODO_SIGNUP_APP}_set_signup_details`)
    }, []);

    return (
        <div>
            <div className="todo-form-header">
                <h1>
                    {
                        userName ?
                            <span>Hello: {userName} and your DOB is: {dob}</span>
                            : null
                    }
                </h1>
            </div>
        </div>
    )

}

export default HeaderApp;