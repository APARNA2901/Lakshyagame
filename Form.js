
class Form {
    constructor() {
    //this.star = loadImage("./images/start12.png");
   //this.image = createImage("start")
        this.button = select('#playbutton');
    }

    hide() {
        //this.star.Visibility = 0;
        this.button.hide();
    }

    display() {
    background(bground);
    this.button.position(windowWidth/2-150, windowHeight/2-50);

    this.button.mousePressed(()=>{
        gameState = 1;
        this.button.hide();
      cosmo.visibility = false;
        
    })
    
  }
    
}