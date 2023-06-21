//login을 처리하는 js 파일
function login(username, password, flag) {
    if(username !== "" && password !== null && flag) {
        return true
    }
    return false;
}

function logout() {
    return true;
}