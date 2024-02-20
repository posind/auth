import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";


let log=getCookie("login");

setInner("content",log);