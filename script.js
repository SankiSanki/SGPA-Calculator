function calc(){
const mat=Number(document.getElementById("mat").value);
const daa=Number(document.getElementById("daa").value);
const mce=Number(document.getElementById("mce").value);
const os=Number(document.getElementById("os").value);
const bio=Number(document.getElementById("bio").value);
const py=Number(document.getElementById("py").value);
const kan=Number(document.getElementById("kan").value);
const rp=Number(document.getElementById("rp").value);
const int=Number(document.getElementById("int").value);
const uhv=Number(document.getElementById("uhv").value);

const matc=cred(mat);
const daac=cred(daa);
const mcec=cred(mce);
const osc=cred(os);
const bioc=cred(bio);
const pyc=cred(py);
const kanc=cred(kan);
const rpc=cred(rp);
const intc=cred(int);
const uhvc=cred(uhv);

const gpa=(matc*3+daac*4+mcec*4+osc*3+bioc*2+pyc+rpc+intc+kanc+uhvc)/21;

const res=document.getElementById("res");
res.setAttribute("value",gpa.toFixed(2));
};

cred=function(a){
    if (a>=90){
        return 10;
    }
    if (a>=80){
        return 9;
    }
    if (a>=70){
        return 8;
    }
    if (a>=60){
        return 7;
    }
    if (a>=50){
        return 6;
    }
    if (a>=40){
        return 5;
    }
    if (a>=30){
        return 4;
    }
    if (a>=20){
        return 3;
    }
    if (a>=10){
        return 2;
    }
    return 1;
}
