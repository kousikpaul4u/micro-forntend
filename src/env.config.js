import $ from "jquery";

const LOCAL_ENV = {
    ENABLE_LOGGING: true
    // <Put all your local configs>
};

const REACT_APP_BUILD_ENV = process.env.REACT_APP_BUILD_ENV;
let env;

if (REACT_APP_BUILD_ENV === "dev") {
    env = LOCAL_ENV;
    console.log("local env : ", env);
} else {
    console.log('[MRT] Loading api config ..');
    console.log(window['activeModule']['base_url'] + window['activeModule']['api_config']);
    $.ajax({
        async: false,
        url: window['activeModule'].base_url + window['activeModule'].api_config
    }).done(function (data) {
        console.log('Fetched Configuration: ', data);
        if (typeof data === 'string')
            env = JSON.parse(data);
        else
            env = data;
        console.log('env : ', env);

    });
}

export default env;
