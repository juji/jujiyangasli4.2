export type TechItem = {
  id: string
  width: number
  height: number
  title: string
  image: string
  url: string
}

export const techs: TechItem[][] = [
  [
    {
      id: 'html5',
      width: 24,
      height: 24,
      title: 'HTML5',
      image: '/images/tech/html5.svg',
      url: 'https://en.wikipedia.org/wiki/HTML5'
    },
    {
      id: 'css3',
      width: 24,
      height: 24,
      title: 'CSS3',
      image: '/images/tech/css3.svg',
      url: 'https://en.wikipedia.org/wiki/CSS'
    },
    {
      id: 'js',
      width: 24,
      height: 24,
      title: 'JavaScript',
      image: '/images/tech/js.svg',
      url: 'https://en.wikipedia.org/wiki/JavaScript'
    },
    {
      id: 'ts',
      width: 24,
      height: 24,
      title: 'TypeScript',
      image: '/images/tech/ts.svg',
      url: 'https://www.typescriptlang.org/'
    },
  ],
  [
    {
      id: 'next',
      width: 380,
      height: 181,
      title: 'Next.js',
      image: '/images/tech-avif/nextjs.avif',
      url: 'https://nextjs.org/'
    },
    {
      id: 'svelte',
      width: 512,
      height: 512,
      title: 'Svelte',
      image: '/images/tech-avif/svelte.avif',
      url: 'https://kit.svelte.dev/'
    },
    {
      id: 'electron',
      width: 500,
      height: 500,
      title: 'Electron',
      image: '/images/tech-avif/electron.avif',
      url: 'https://electronjs.org/'
    },
  ],
  [
    {
      id: 'nodejs',
      width: 2400,
      height: 2643,
      title: 'NodeJs',
      image: '/images/tech-avif/nodejs.avif',
      url: 'https://nodejs.org'
    },
    // {
    //   id: 'bun',
    //   width: 80,
    //   height: 70,
    //   title: 'Bun',
    //   image: '/images/tech/bun.svg',
    //   url: 'https://bun.sh/'
    // },
    {
      id: 'firebase',
      width: 500,
      height: 500,
      title: 'Firebase',
      image: '/images/tech-avif/firebase.avif',
      url: 'https://firebase.google.com/?hl=id'
    },
    {
      id: 'docker',
      width: 1300,
      height: 895,
      title: 'Docker',
      image: '/images/tech-avif/docker.avif',
      url: 'https://www.docker.com/'
    },
    {
      id: 'cloudflare',
      width: 720,
      height: 240,
      title: 'CloudFlare',
      image: '/images/tech-avif/cloudflare.avif',
      url: 'https://www.cloudflare.com'
    } as TechItem
  ],
  [
    {
      id: 'express',
      width: 380,
      height: 84,
      title: 'Express.js',
      image: '/images/tech-avif/expressjs.avif',
      url: 'https://expressjs.com/'
    },
    {
      id: 'react',
      width: 500,
      height: 500,
      title: 'React',
      image: '/images/tech-avif/react.avif',
      url: 'https://react.dev/'
    },
    {
      id: 'socketio',
      width: 201,
      height: 195,
      title: 'Socket.io',
      image: '/images/tech-avif/socketio.avif',
      url: 'https://socket.io/'
    },
  ],
  [ 
    {
      id: 'mongo',
      width: 400,
      height: 277,
      title: 'Mongo DB',
      image: '/images/tech-avif/mongo.avif',
      url: 'https://www.mongodb.com/'
    },
    {
      id: 'postgres',
      width: 500,
      height: 500,
      title: 'PostgreSQL',
      image: '/images/tech-avif/postgre.avif',
      url: 'https://www.postgresql.org/'
    },
    {
      id: 'mysql',
      width: 300,
      height: 300,
      title: 'MySQL',
      image: '/images/tech-avif/mysql.avif',
      url: 'https://www.mysql.com/'
    },
    {
      id: 'redis',
      width: 500,
      height: 500,
      title: 'Redis',
      image: '/images/tech-avif/redis.avif',
      url: 'https://redis.io/'
    },
    // {
    //   id: 'nats',
    //   title: 'NATS',
    //   image: '/images/tech-avif/nats.avif',
    //   url: 'https://nats.io/'
    // },
    // {
    //   id: 'elastic',
    //   title: 'Elastic Search',
    //   image: '/images/tech-avif/elastic.avif',
    //   url: 'https://www.elastic.co/'
    // },
    {
      id: 'rabbit',
      width: 500,
      height: 500,
      title: 'RabbitMQ',
      image: '/images/tech-avif/rabbitmq.avif',
      url: 'https://www.rabbitmq.com/'
    } as TechItem
  ],
  [
    {
      id: 'do',
      width: 500,
      height: 500,
      title: 'Digital Ocean',
      image: '/images/tech-avif/digitalocean.avif',
      url: 'https://www.digitalocean.com/'
    },
    {
      id: 'ec2',
      width: 500,
      height: 500,
      title: 'AWS EC2',
      image: '/images/tech-avif/ec2.avif',
      url: 'https://aws.amazon.com/ec2/'
    },
    {
      id: 's3',
      width: 500,
      height: 500,
      title: 'AWS S3',
      image: '/images/tech-avif/s3.avif',
      url: 'https://aws.amazon.com/s3/'
    },
    {
      id: 'beanstalk',
      width: 402,
      height: 564,
      title: 'AWS Elastic Beanstalk',
      image: '/images/tech-avif/beanstalk.avif',
      url: 'https://aws.amazon.com/elasticbeanstalk/'
    } as TechItem
  ],
  [
    {
      id: 'stripe',
      width: 500,
      height: 500,
      title: 'Stripe',
      image: '/images/tech-avif/stripe.avif',
      url: 'https://stripe.com/'
    },
    {
      id: 'algolia',
      width: 1332,
      height: 331,
      title: 'Algolia',
      image: '/images/tech-avif/algolia.avif',
      url: 'https://www.algolia.com/'
    },
    {
      id: 'twilio',
      width: 400,
      height: 185,
      title: 'Twilio',
      image: '/images/tech-avif/twilio.avif',
      url: 'https://www.twilio.com/'
    },
  ],
  [
    {
      id: 'mailchimp',
      width: 500,
      height: 500,
      title: 'Mailchimp',
      image: '/images/tech-avif/mailchimp.avif',
      url: 'https://mailchimp.com/'
    },
    {
      id: 'mailgun',
      width: 1793,
      height: 494,
      title: 'Mailgun',
      image: '/images/tech-avif/mailgun.avif',
      url: 'https://www.mailgun.com/'
    },
    {
      id: 'sendgrid',
      width: 3300,
      height: 724,
      title: 'Sendgrid',
      image: '/images/tech-avif/sendgrid.avif',
      url: 'https://sendgrid.com/'
    },
  ],
  [
    {
      id: 'github',
      width: 120,
      height: 120,
      title: 'Github',
      image: '/images/tech-avif/github.avif',
      url: 'https://github.com'
    },
    {
      id: 'gitlab',
      width: 500,
      height: 500,
      title: 'Gitlab',
      image: '/images/tech-avif/gitlab.avif',
      url: 'https://gitlab.com'
    },
    {
      id: 'bitbucket',
      width: 400,
      height: 400,
      title: 'Bitbucket',
      image: '/images/tech-avif/bitbucket.avif',
      url: 'https://bitbucket.org/'
    } as TechItem
  ]
]
