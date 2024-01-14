const skill: [number, string] = [1, 'Dev']; // tuple

const [id, skillName] = skill; // деструктуризация
// const id = skill[0];
// const skillName = skill[1];

const arr: [number, string, ...boolean[]] = [1, '015', true, true, false] // тип булиан спредом