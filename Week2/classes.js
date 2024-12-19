// primitive types- numbbers strings boolean
// complex types- objects arrays

class Rectangle
{
    constructor(width,length,color){
        this.width=width;
        this.length=length;
        this.color=color;
    }

    area(){
        const ar=this.length*this.width;
        return ar;

    }
    paint(){
        console.log(`Printing the color ${this.color}`);
    }
    destroy(){

    }
}

const rect=new Rectangle(2,4,"red");
const ar=rect.area();
rect.paint();
console.log(ar);
rect.destroy();

let rect1={
    width:20,
    height:40,
    area: function(){
        return this.width*this.height; // rect1.width and rect1.height also works
    }
}

console.log(rect1.area());