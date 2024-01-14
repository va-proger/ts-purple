interface User22 {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string
}

interface Role22 {
    roleId: number
}
interface UserWithRole22 extends User22, Role22{
   createdAt: Date
}
type UserType22 = {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string
}
let user22: UserWithRole22 = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id){
        return '';
    }
}

interface UserDic {
    [index: number]: User22
}
type UserDicType = {
    [index: number]: User22
}
type userDicRecord = Record<number, User22>
