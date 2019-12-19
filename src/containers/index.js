import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { search } from "actions/index";

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

    const [tmnIdOrMobile, setTmnIdOrMobile] = useState(window["activeModule"] && window["activeModule"]["mobile"] !== "" ? window["activeModule"]["mobile"] : "");

    useEffect(() => {
    }, []);

    function search(page = 1, isPageRequest = false) {
        props.showLoader();
        props.removeError();
    }

    return (
        <div>
            <div>
                <h1>Header</h1>
            </div>
            <div>
                Hello
            </div>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderApp);