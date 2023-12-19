import http from "utils/request";
// let formType = { 'contentType':'application/json; charset=UTF-8' }
export default {
    test: {
        url: "/test",
        name: "测试",
        get: async function () {
            return await http.get(this.url);
        },
    },
};
