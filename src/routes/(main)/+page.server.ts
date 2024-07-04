import { works } from '$lib/data/works/data.server';
import { play } from '$lib/data/play/data.server';
import { COOKIE_NAME } from '$lib/vars.server'
import rs from 'randomstring'
import type { Cookies } from '@sveltejs/kit'

export function load({ cookies }:{ cookies: Cookies}) {

  cookies.set(
    COOKIE_NAME,
    rs.generate()
  )

	return {
		works: works.map(v => {
      const { images, ...rest } = v
      return {
        ...rest,
        image: images[0]
      }
    }),
    play
	};
}