import { writeFile, readFile } from 'fs/promises'

const time = new Date().getTime() / 1000
const args = process.argv

if (!args.includes('--end')) await writeFile('./time.txt', time.toString())
else {
  const start = Number((await readFile('./time.txt')).toString())
  console.log(start, time);
  console.log((time - start));
}

