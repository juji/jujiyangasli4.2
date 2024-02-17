
const { readdir } = require('node:fs/promises');
const sharp = require('sharp')

const dir = '../static/images/tech'

;(async function(){

  const contents = await readdir(dir)

  for(let i =0; i<contents.length;i++){
    console.log(`${contents[i]}`)
    await sharp(dir + '/' + contents[i])
    .avif()
    .toFile('./' + contents[i].replace(/\.[^.]+/,'.avif'))
    console.log(`${contents[i]} => ${contents[i].replace(/\.[^.]+/,'.avif')}`)
  }

  // console.log(contents)

})()
