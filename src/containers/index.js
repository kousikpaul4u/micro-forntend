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

    useEffect(() => {
    }, []);

    function search(page = 1, isPageRequest = false) {
        window[env.APP_NAME]["message"] = "";
    }

    return (
        <div>
            <div className="todo-form-header">
                <h1>Header</h1>
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);