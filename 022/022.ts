// type alias
type httpMethod = 'post' | 'get'; // Существует только в typescript
type coolString = string;
// function fetchWithAuth(url: string, method: httpMethod){
//
// }

type User = {
    name: string,
    age: number,
    skills: string[]
}
type Role = {

    id: number;
}
type UserWithRole = User & Role // Интерсектион
// type UserWithRole = User | Role
// type UserWithRole = {
//     user: User,
//     role: Role
// } // коллекция
let user21: UserWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    id: 1
}