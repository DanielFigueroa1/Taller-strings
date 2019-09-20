class Jugador{

    constructor(app){
        this.app = app;
this.palabras =  ['habia',
'una',
'vez',
'una',
'nina',
'muy',
'bonita',
'madre',
'habia',
'hecho',
'una',
'capa',
'roja',
'muchachita',
'llevaba',
'menudo',
'todo',
'mundo',
'llamaba',
'caperucita',
'roja',
'llevase',
'pasteles',
'abuela',
'vivia',
'lado',
'bosque',
'recomendandole',
'entretuviese',
'camino',
'cruzar',
'peligroso',
'siempre',
'andaba',
'acechando',
'lobo'
    ];
    this.tam = 20;
    this.x = this.app.width/2;
    this.y = this.app.height/2;
    this.nivel = 0;
    this.indice = 0;
    this.meta = this.palabras[this.nivel];
    this.validadores = [];

    for (let i = 0; i < this.meta.length; i++) {
        this.validadores.push(false);
    }

        }

    draw(){           
        this.meta = this.palabras[this.nivel];

        this.app.translate(this.app.mouseX , this.app.mouseY);
        this.app.fill(255,100,100);
        this.app.strokeWeight(10);
        this.app.fill('rgba(255,0,255, 0.6)');
        this.app.noStroke();
        this.app.ellipse(0,0,this.tam*2,this.tam*2);

        this.arclength = 5;
        for (let i = 0; i < this.meta.length; i++) {
            this.currentChar = this.meta.charAt(i);
            
            this.w = this.app.textWidth(this.currentChar);
            this.arclength += this.w / 1;
            this.theta = this.app.PI + this.arclength / this.tam;
            this.app.push();
            this.app.translate(this.tam *1.5* this.app.cos(this.theta), this.tam * 1.5*this.app.sin(this.theta));
            this.app.rotate(this.theta + this.app.PI / 2);
            this.app.textSize(15);
            if (this.validadores[i] == true) {
                this.app.fill(0,255,0);
            } else {
                this.app.fill(255);
            }
            this.app.text(this.currentChar, 0, 0);       
            this.app.pop();
            this.arclength += this.w / 2;
        }

        if(this.nivel < this.palabras.length){
            if (this.indice == this.meta.length){
                this.nivel ++;
                this.indice = 0;
                this.validadores = [];
            }
        }
        
    }

    validar(letra){

            this.validadores[this.indice] = true;
            
            this.indice ++;

        }

        get getObjetivo() {
            return this.meta.charAt(this.indice);
        }
    
        get getX(){
            return this.x;
        }
        get getY(){
            return this.y;
        }
    
        get getTam(){
            return this.tam;
        }
}

