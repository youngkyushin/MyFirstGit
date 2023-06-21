//login을 처리하는 js 파일
function login(username, password, flag) {
    if(username !== "" && password !== null && flag) {
        return "로그인성공 ~"
    }
    return "로그인실패 ~"
}