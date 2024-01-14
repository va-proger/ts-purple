const skills: string[] = ['dev', 'DevOps', 'Testing', 'Frontend']; // массив строк

for (const skill of skills){
    console.log(skill.toLowerCase())
}
const res = skills
    .filter((s : string) : boolean => s !== 'DevOps')
    .map((s : string): string => s + '! ')
    .reduce((a : string, b : string) => a + b)

console.log(res)