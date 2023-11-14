import { works } from '$lib/data/works/data.server';
import type { WorkContent } from '$lib/data/works/types';
import { error } from '@sveltejs/kit'
import workMarkdown from '$lib/data/work-content/index.server'

export function load({ 
	params 
}:{ 
	params: {
		id: string
	} 
}): WorkContent {
	
	const work = works.find((work) => work.id === params.id);
	const content:string = workMarkdown[params.id] 

	if(!content) throw error(404);
	if (!work) throw error(404);

	return {
		...work,
		content
	};
}