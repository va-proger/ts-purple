interface User25 {
    login: string,
    password: string | undefined
}
const use25: User25 = {
    login: 'a@a.ru',
    password: '1'
}

function multiply(first: number, second?: number): number{
    if(!second){
        return first * first;
    }
    return first * second;
}

interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
}
function testPass(user: UserPro){
    const t = user.password?.type;
}
function test (param?: string) {
    const t = param ?? multiply(5)
}