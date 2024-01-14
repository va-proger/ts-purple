enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 3
}
const resPay = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCESS
}

// 1 - Успех
// 2 - в процессе
// 3 - отклонен

if (resPay.statusCode === StatusCode.SUCCESS){

}
function action(status: StatusCode){

}
action(StatusCode.SUCCESS)
action(1)
action(3)

// function compute(){
//     return 3;
// }

// enum Roles {
//     ADMIN,
//     USER,
//     CONTENT = compute()
// }
const enum Roles {
    ADMIN,
    USER,
    CONTENT
}
const res2 = Roles.ADMIN