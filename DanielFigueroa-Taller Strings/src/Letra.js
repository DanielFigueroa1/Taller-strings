class Letra{

    constructor(app,indice){
    this.app=app;
    this.texto = 'habia'+
'una'+
'vez'+
'una'+
'nina'+
'muy'+
'bonita'+
'madre'+
'habia'+
'hecho'+
'una'+
'capa'+
'roja'+
'muchachita'+
'llevaba'+
'menudo'+
'todo'+
'mundo'+
'llamaba'+
'caperucita'+
'roja'+
'llevase'+
'pasteles'+
'abuela'+
'vivia'+
'lado'+
'bosque'+
'recomendandole'+
'entretuviese'+
'camino'+
'cruzar'+
'peligroso'+
'siempre'+
'andaba'+
'acechando'+
'lobo';

this.x = this.app.random(this.app.width);

this.y = this.app.random(-50,-(this.app.height)*2);

this.tam = 15;

this.vel = this.app.random(1,3);

this.indice = indice;

this.r = this.app.random(255);

this.g = this.app.random(255);

this.b = this.app.random(255);

this.letras = this.texto.split('');

this.numeroDeLetras = this.letras.length;


        }

    draw(){
        this.app.fill(this.r,this.g,this.b);
        this.app.noStroke();
        this.app.ellipse(this.x,this.y,this.tam*2,this.tam*2);
        this.app.fill(255);
        this.app.textSize(20);
        this.app.textAlign(this.app.CENTER, this.app.CENTER);
        this.app.text(this.letras[this.indice],this.x,this.y);

        this.y += this.vel;

        if (this.y >= this.app.height + 100) {
            this.x = this.app.random(this.app.width);
            this.y = this.app.random(-50,- (this.app.height)*2);
            
            this.vel = this.app.random(2,6);

            this.r = this.app.random(255);

            this.g = this.app.random(255);

            this.b = this.app.random(255);

        }
        


    }

    get NumeroLetras(){
        return this.numeroDeLetras;
    }

    get getX(){
        return this.x;
    }
    get getY(){
        return this.y;
    }

    get getLetra(){
        return this.letras[this.indice].charAt(0);
    }

    get getTam(){
        return this.tam;
    }

}