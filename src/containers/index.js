import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { search } from "actions/index";
import env from "env.config";

const mapDispatchToProps = (dispatch) => {
    return {
        search: (input) => dispatch(search(input)),
    };
};

const mapStateToProps = state => {
    return {
        message: state.common && state.common.message ? state.common.message : ""
    };
};

function HeaderApp(props) {

    const [userName, setUserName] = useState("");

    function onEvent({ detail }) {
        setUserName(detail.userName);
        console.log("Detail: ", detail);
    }

    useEffect(() => {
        window.addEventListener(`${env.CONNECTED_APP.TODO_SIGNUP_APP}_set_username`, onEvent);
        return () => window.removeEventListener(`${env.CONNECTED_APP.TODO_SIGNUP_APP}_set_username`)
    }, []);

    return (
        <div>
            <div className="todo-form-header">
                <h1>Hello: {userName}</h1>
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);