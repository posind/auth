import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";


let log=getCookie("login");
setInner("content",log);
getWithHeader("https://mrt.ulbi.ac.id/notif/ux/getdatauser","login",log,responseFunction)

function responseFunction(result){
    setInner("content",result);
    console.log(result);
}