export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","icons/android-chrome-192x192.png","icons/android-chrome-512x512.png","icons/apple-touch-icon.png","icons/favicon-16x16.png","icons/favicon-32x32.png","icons/favicon.ico","icons/favicon.svg","images/.DS_Store","images/email-header.png","images/jpeg/works/amber-app.jpeg","images/jpeg/works/amber-video.jpeg","images/jpeg/works/amber-videos.jpeg","images/jpeg/works/bridestory-careers.jpeg","images/jpeg/works/bridestory1.jpeg","images/jpeg/works/bridestory2.jpeg","images/jpeg/works/clubrow.jpeg","images/jpeg/works/methodicate.jpeg","images/jpeg/works/paragon1.jpeg","images/jpeg/works/paragon2.jpeg","images/jpeg/works/paragon3.jpeg","images/jpeg/works/paragon5.jpeg","images/jpeg/works/paragon6.jpeg","images/jpeg/works/wez1.jpeg","images/jpeg/works/wez2.jpeg","images/jpeg/works/wez3.jpeg","images/jpeg/works/wez4.jpeg","images/jpeg/works/wez5.jpeg","images/juji-1200-630.jpeg","images/juji-800-418.jpeg","images/pendulum.png","images/tech/adonisjs.webp","images/tech/algolia.webp","images/tech/beanstalk.webp","images/tech/bitbucket.webp","images/tech/bun.svg","images/tech/cloudflare.webp","images/tech/css3.svg","images/tech/css3.webp","images/tech/digitalocean.webp","images/tech/docker.webp","images/tech/ec2.webp","images/tech/elastic.webp","images/tech/electron.webp","images/tech/expressjs.webp","images/tech/firebase.webp","images/tech/github.webp","images/tech/gitlab.webp","images/tech/html5.svg","images/tech/html5.webp","images/tech/js.svg","images/tech/mailchimp.webp","images/tech/mailgun.webp","images/tech/mongo.webp","images/tech/mysql.webp","images/tech/nats.webp","images/tech/nextjs.webp","images/tech/nodejs.webp","images/tech/postgre.webp","images/tech/rabbitmq.webp","images/tech/react.webp","images/tech/redis.webp","images/tech/s3.webp","images/tech/sendgrid.webp","images/tech/socketio.webp","images/tech/stripe.webp","images/tech/svelte.png","images/tech/ts.svg","images/tech/twilio.webp","images/thumb/amber-app-700.webp","images/thumb/amber-video-700.webp","images/thumb/amber-videos-700.webp","images/thumb/bridestory-careers-700.webp","images/thumb/bridestory1-700.webp","images/thumb/bridestory2-700.webp","images/thumb/clubrow-700.webp","images/thumb/methodicate-700.webp","images/thumb/paragon1-700.webp","images/thumb/paragon2-700.webp","images/thumb/paragon3-700.webp","images/thumb/paragon5-700.webp","images/thumb/paragon6-700.webp","images/thumb/wez1-700.webp","images/thumb/wez2-700.webp","images/thumb/wez3-700.webp","images/thumb/wez4-700.webp","images/thumb/wez5-700.webp","images/works/amber-app.webp","images/works/amber-video.webp","images/works/amber-videos.webp","images/works/bridestory-careers.webp","images/works/bridestory1.webp","images/works/bridestory2.webp","images/works/clubrow.webp","images/works/methodicate.webp","images/works/paragon1.webp","images/works/paragon2.webp","images/works/paragon3.webp","images/works/paragon5.webp","images/works/paragon6.webp","images/works/wez1.webp","images/works/wez2.webp","images/works/wez3.webp","images/works/wez4.webp","images/works/wez5.webp","images/works-logo/amber.jpeg","images/works-logo/bridestory.webp","images/works-logo/paragon-ori.png","images/works-logo/paragon.png","images/works-logo/wheeleasy.png","js/scroll-timeline.js","js/scroll-timeline.js.map","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg",".webp":"image/webp",".js":"application/javascript",".map":"application/json",".txt":"text/plain",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.39343031.js","app":"_app/immutable/entry/app.223e4069.js","imports":["_app/immutable/entry/start.39343031.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/singletons.9f96aed5.js","_app/immutable/entry/app.223e4069.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.178410c3.js","_app/immutable/chunks/index.3393fb81.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/(main)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/_image",
				pattern: /^\/api\/_image\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/_image/_server.ts.js'))
			},
			{
				id: "/api/contact",
				pattern: /^\/api\/contact\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/contact/_server.ts.js'))
			},
			{
				id: "/(nopad)/works/[id]",
				pattern: /^\/works\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
