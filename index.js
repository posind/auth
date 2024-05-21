import {getCookie} from "https://cdn.jsdelivr.net/gh/jscroot/cookie@0.0.1/croot.js";
import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.5/croot.js";
import {getWithHeader} from "https://cdn.jsdelivr.net/gh/jscroot/api@0.0.6/croot.js";
import {redirect} from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

if (getCookie("login")===""){
    redirect("/");
}

getWithHeader("https://api.do.my.id/data/user","login",getCookie("login"),responseFunction)

function responseFunction(result){
    if (result.phonenumber===""){
        var pesan="Silahkan lakukan pendaftaran terlebih dahulu";
    }else{
        pesan="Selamat datang "+result.nama;
    }
    setInner("content",pesan);
    //redirect("/report");
    console.log(result);
}