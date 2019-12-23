import $ from "jquery";

const LOCAL_ENV = {
    APP_NAME: "todo_header_app",
    ENABLE_LOGGING: true
    // <Put all your local configs>
};

const REACT_APP_BUILD_ENV = process.env.REACT_APP_BUILD_ENV;
let env;

if (REACT_APP_BUILD_ENV === "local") {
    env = LOCAL_ENV;
    console.log(`[${env.APP_NAME}] Loading local config ..`, env, env.APP_NAME);
} else {
    console.log(`[${env.APP_NAME}] Loading api config ..`);
    if (window[`${env.APP_NAME}`]) {
        if (window[`${env.APP_NAME}`]['API_CONFIG']) {
            console.log(window[`${env.APP_NAME}`]['BASE_URL'] + window[`${env.APP_NAME}`]['API_CONFIG']);
            $.ajax({
                async: false,
                url: window[`${env.APP_NAME}`]['BASE_URL'] + window[`${env.APP_NAME}`]['API_CONFIG']
            }).done(function (data) {
                console.log('Fetched Configuration: ', data);
                if (typeof data === 'string')
                    env = JSON.parse(data);
                else
                    env = data;
                console.log('env: ', env);
            });
        } else {
            alert("Please add api_config on todo_header_app to fetch todo_header_app configurations");
        }
    } else {
        alert("Please add todo_header_app object on aggregator UI to todo_header_app access required data");
    }

}

export default env;
