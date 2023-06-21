//login을 처리하는 js 파일

function login(username,password) {
    if(username !== "" && password !== "") {
        return true;
    }
    return false;
}