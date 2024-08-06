import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import {getJSON} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.7/croot.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

if (getCookie("login")===""){
    redirect("/");
}

getJSON("https://asia-southeast2-awangga.cloudfunctions.net/pamongdesa/data/user","login",getCookie("login"),responseFunction)

function responseFunction(result){
    if (result.status === 200){
        setInner("content","Selamat datang "+result.data.name);
        redirect("/pdboard");
    }else{
        setInner("content","Silahkan lakukan chat ke bot helpdesk pemilihan operator");
        redirect("https://wa.me/6285157979759?text=bantuan+operator");
    }
    console.log(result);
}
