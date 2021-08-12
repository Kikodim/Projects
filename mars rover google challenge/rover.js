class Rover{
    //Here we start by giving values to the variables.
        constructor(gridDimention = 10){
        //The starting position is in the downmost left corner 0,0
         this.startPosition = [0,0];
        this.direction = 0;
        this.compassPoints = ['N','E','S','W'];
        this.gridDimention = gridDimention;
        }
        //Here I declare the instructions for moving without  giving them values for now.
        moving(instructions){
            const individualInstructions = instructions.split('');
            this.translateInstructions(individualInstructions);
        }
        //This function is for going up
}      function moveUP() {
    let[x,y]=this.startPosition;
    if(y=== this.gridDimention-1)y=0;
     else y = --y;
    this.startPosition = [x,y];
}     //this one for going down
       function moveDown(){
            let[x,y]=this.startPosition;
            if(y===0) y=this.gridDimention - 1;
            else y= --y;
            this.startPosition = [x,y];
        
        } //this one for going left 
      function moveLeft(){
          let[x,y] = this.startPosition;
          if(x===0) x= this.startPosition -1;
         else x= --x;
         this.startPosition = [x,y];
      } //this one for going right 
      function moveRight(){
          let[x,y] = this.startPosition;
          if(x=== this.startPosition - 1) x=0;
          else x = ++x;
          this.startPosition = [x,y];
      }
      //compass heading
      function getCompassHeading(){
          return this.compassPoints[this.direction % this.compassPoints.length];
      } //here i connect the compass to the heading 
      //north is up and so on
      function shiftPosByCompass(){
          const moveDirection = this.getCompassHeading();
          if(moveDirection==='N')this.moveUP();
          else if(moveDirection==='S')this.moveDown();
          else if(moveDirection==='E')this.moveLeft();
          else if(moveDirection==='W')this.moveRight();

      }
      function translateInstructions(instructions){
          instructions.forEach(instruction => {
              if(instruction ==='L')this.direction --;
              else if(instruction ==='R')this.direction++;
              else if(instruction ==='M')this.shiftPosByCompass();
              else throw new console.error("invalid instruction provided");

          });
      }
    
      module.exports={
          Rover
      }