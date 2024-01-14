"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Андрей',
    surname: 'Викулов',
    city: 'Izhevsk',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
