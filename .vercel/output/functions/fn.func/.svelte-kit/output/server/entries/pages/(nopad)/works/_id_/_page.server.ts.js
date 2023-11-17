import { w as works } from "../../../../../chunks/data.server.js";
import { e as error } from "../../../../../chunks/index.js";
const amber = `

A platform to detect fake videos.

Wait.. What!? that's a thing..

Like, that's a THING...



In an age where video, as one the most important media, 
gets abused with fake contents.
They created a tool to detect just that.

What a noble task...



Shamir asked me to work with Roderick for this, 
so I helped Roderick on the frontend and it's API.


Techs used on my side of the job:
[ExpressJS](https://expressjs.com/),
[ReactJS](https://reactjs.org/),
[MongoDB](https://www.mongodb.com/),
[RabbitMQ](https://www.rabbitmq.com/),
[AWS-S3](https://aws.amazon.com/s3/),
[Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)

`;
const wheeleasy = `

> WheelEasy is an access information web app for people with mobility needs, their families and friends.

Great times..!!

I met [Max Burt](https://www.maxburt.com/) online, and
he needed someone to continue developing WheelEasy with him.

We rewrote the site from scratch, added loads of stuff, and 4 years passed while we do this. Now, 
it's alive with users and volunteers, *viola*!!


Technologies used:
[Next.js](https://nextjs.org/),
[Material-UI](https://v4.mui.),
[ExpressJs](https://expressjs.com/),
[stripe](https://stripe.com/),
[min.io](https://min.io/),
[Algolia](https://www.algolia.),
[platform.sh](https://platform.sh).

`;
const paragon = `

The First website of my creation, that i like. Developed with PHP, MySql.

Using CPanel as a server management tool.

It was 2012, i guess... I don't remember.

I had a great time creating this site. The client was great: 
[https://www.tauziahotels.com/](https://www.tauziahotels.com/). The designer was awesome: 
[https://visious.co/](https://visious.co/)

I worked in visious at the time. The team was cute and heart warming.
The kind of team that you would describe more as a group of friends having fun.

Click the logo to see the menu and explore. I was so proud of the page transition. There was no
react and node.js.
Just plain old PHP, mysql and an Apache Webserver.

`;
const bridestory = `

Bridestory was Awesome. Great friends, Excellent team. Alluring work ambience.

My time in Bridestory cannot be describe by only one creation.
But this one have a special place in my heart.

Being in Bridestory is like celebrating love.

Made with 
[Jekyll](https://jekyllrb.com/). With a custom CMS running on [PHP](https://www.php.net/), 
[MySql](https://www.mysql.com/), and [NGINX](https://www.nginx.com/).

Fuelled by love...

`;
const data = {
  amber,
  wheeleasy,
  paragon,
  bridestory
};
function load({
  params
}) {
  const work = works.find((work2) => work2.id === params.id);
  const content = data[params.id];
  if (!content)
    throw error(404);
  if (!work)
    throw error(404);
  return {
    ...work,
    content
  };
}
export {
  load
};
