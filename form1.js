class Form1{

    connstructor(){

        this.button1= createButton('PAINTING');
        this.button2= createButton('DANCING');
        this.button3= createButton('CALLIGRAPHY');
        this.button4= createButton('CRAFTING');
    }
    display(){

        this.button1.position(displayWidth/2-100,displayHeight/2-50)
        this.button2.position(displayWidth/2+100,displayHeight/2-50)
        this.button3.position(displayWidth/2-100,displayHeight/2+50)
        this.button4.position(displayWidth/2+100,displayHeight/2+50)
    }
}