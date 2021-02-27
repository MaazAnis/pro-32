class Box extends BaseClass  {
  constructor(x, y, width, height){
   super(x,y,50,50)
   this.image = loadImage("wood1.png")

   this.visibility = 225
  }

  display() {
  console.log(this.body.speed)
  if(this.body.speed < 8) {
    image(this.image,0,0,50,50)
    super.display()
  }
  else{
   World.remove(world,this.body)
   push()
   this.visibility = this.visibility-5
   tint(225,this.visibility)
   image(this.image,0,0,50,50)
   pop()
  }
}

score(){
  if(this.visibility<0 && this.visibility >-105){
    score++;
  } 
}


};
