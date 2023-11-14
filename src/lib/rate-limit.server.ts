
import Redis from 'ioredis'
import { REDIS } from '$env/static/private'

const redis = new Redis(REDIS)

export const LIMIT = 24000 // in ms, every 24 seconds

const wait = (n:number) => new Promise(r => {
  setTimeout(r,n)
})

export async function rateLimit( key: string ){

  // wait for a random amount of time
  // somewhat preventing paralel request
  await wait(1000 + Math.round(Math.random()*1000))

  // get and set new value
  const val = await redis.get(key)
  await redis.set(key, new Date().toISOString())
  
  // no key let them pass
  if(!val) return true

  // check key val againts now
  return (
    new Date().valueOf() - new Date(val).valueOf()
  ) > LIMIT

}