export type PendulumImage = {
  src: string
  width: number
  height: number
}

export type DoublePendulumCallback = (
  obj: PendulumImage,
  started: string
) => void

export type DoublePendulumProps = {
  canvas: HTMLCanvasElement
  callback: DoublePendulumCallback
  started: string
  additionalHeight: number
}

class DoublePendulum {

  started: string
  width: number
  height: number
  callback: DoublePendulumCallback
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  l1: number
  l2: number
  m1: number
  m2: number
  a1: number
  a2: number
  gravity: number
  friction: number
  center: { x:number, y: number }
  acc1: number
  acc2: number
  vel1: number
  vel2: number
  x1: number
  y1: number
  x2: number
  y2: number
  line: number[][]
  anim: ReturnType<typeof requestAnimationFrame> | null
  linelength: number
  linenum: number
  totalLine: number
  itt: number
  stopped: boolean
  lineColor: string

  fillStyle = '#111'
  lineWidth = 0.5
  iPhoneLine = '#252525'
  normalLine = '#343434'


  constructor(params:DoublePendulumProps){

    const {
      canvas,
      callback,
      started,
      additionalHeight
    } = params

    // console.log('params', params)

    this.started = started
    this.width = window.innerWidth
    this.height = window.innerHeight + additionalHeight
    
    let ua = navigator.userAgent.toLowerCase()
    this.lineColor = 
      // is iPhone ?
      /ipad|iphone|ipod|safari/.test(ua) && !(/chrome/.test(ua))?
        this.iPhoneLine : this.normalLine
    
    // console.log('this.lineColor', this.lineColor)

    this.callback = callback
    this.canvas = canvas;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.l1 = 300 + (10 * (Math.random()*Math.PI*2));
    this.l2 = 500 + (10 * (Math.random()*Math.PI*2));
    this.m1 = 9;
    this.m2 = 2;
    this.a1 = Math.PI * 1.5 + Math.random() * 1;
    this.a2 = Math.PI * 1.5 + Math.random() * 1;
    this.gravity =  .5
    this.friction =  .8

    this.center =  {
      x: (this.width) - 55,
      y: window.innerHeight
    };

    this.acc1 = 0;
    this.acc2 = 0;
    this.vel1 = 0;
    this.vel2 = 0;

    this.x1 = this.center.x + this.l1 * Math.cos(this.a1);
    this.y1 = this.center.y + this.l1 * Math.sin(this.a1);
    this.x2 = this.x1 + this.l2 * Math.cos(this.a2);
    this.y2 = this.y1 + this.l2 * Math.sin(this.a2);


    this.line = []
    this.anim = null
    this.linelength = 200
    this.linenum = 20000
    this.totalLine = 0
    this.itt = 0
    this.stopped = false;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.context.fillStyle = this.fillStyle;
    this.context.fillRect(0,0,this.width,this.height);
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.lineColor;

    this.draw();

  }

  draw(){

    if(this.stopped) return;

    if(this.line.length){

      this.context.beginPath();
      
      let l = this.line;
      this.context.moveTo(l[0][0],l[0][1]);

      for(let i in l){
        if(!Number(i)) continue;
        this.context.lineTo(l[i][0],l[i][1]);
      }

      this.context.stroke();
      this.itt++;

    }

    if(this.totalLine < this.linenum && !this.stopped){
      this.line = []
      for(let i=0;i<this.linelength;i++)
        this.update();
      this.anim = requestAnimationFrame(() => this.draw());
    }

    else {

      this.anim && cancelAnimationFrame(this.anim);
      this.callback && this.callback({
        src: this.canvas.toDataURL(),
        width: this.width,
        height: this.height
      }, this.started);

    }
  }

  update(){

    let g = this.gravity;
    let ag1 = this.a1 - Math.PI/2;
    let ag2 = this.a2 - Math.PI/2;
    this.totalLine++;

    this.acc1 = -g * (2*this.m1 + this.m2) * Math.sin(ag1) - this.m2 * g * Math.sin(ag1 - 2*ag2);
    this.acc1 -= 2 * Math.sin(ag1 - ag2) * this.m2 * (Math.pow(this.vel2,2) * this.l2 + Math.pow(this.vel1,2) * this.l1 * Math.cos(ag1 - ag2));
    this.acc1 /= this.l1 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 *ag1 - 2 *ag2));

    this.vel1 += this.acc1;
    this.a1 += this.vel1;

    this.acc2 = 2 * Math.sin(ag1 - ag2);
    this.acc2 *= Math.pow(this.vel1,2) * this.l1 * (this.m1 + this.m2) + g *( this.m1 + this.m2) * Math.cos(ag1) + Math.pow(this.vel2,2) * this.l2 * this.m2 * Math.cos(ag1 - ag2);
    this.acc2 /= this.l2 * (2 * this.m1 + this.m2 - this.m2 * Math.cos(2 * ag1 - 2 * ag2));

    this.vel2 += this.acc2;
    this.a2 += this.vel2;

    this.x1 = this.center.x + this.l1 * Math.cos(this.a1);
    this.y1 = this.center.y + this.l1 * Math.sin(this.a1);

    this.x2 = this.x1 + this.l2 * Math.cos(this.a2);
    this.y2 = this.y1 + this.l2 * Math.sin(this.a2);
    
    this.line.push(
      [
        this.x2*1,
        this.y2*1
      ]
    )

  }

  stop(){
    this.stopped = true
    this.anim && cancelAnimationFrame(this.anim)
  }

}

const Pendulum = function(props:DoublePendulumProps){
  if(typeof window === 'undefined') return;
  if(typeof requestAnimationFrame === 'undefined') return;
  return new DoublePendulum(props);
}

export default Pendulum