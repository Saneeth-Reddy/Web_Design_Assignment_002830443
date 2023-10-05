function phoneNumber(phoneNumber) {
    const regexpattern = new RegExp("^\\+[1-9]{1}[0-9]{0,2}-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$");
    if(regexpattern.test(phoneNumber)){
        return true;
    }
    else {
        return false;
    }
}



function Validationform() {
    var name = document.forms['form']['firstname'].value;
    console.log(name);
    return false;
}