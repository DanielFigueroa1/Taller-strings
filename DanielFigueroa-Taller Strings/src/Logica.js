class Logica{

    constructor(app){
    this.app=app;
    this.jugador = new Jugador(this.app);
    this.tem = new Letra(this.app,0);
    this.letras = [];
    let tam = this.tem.numeroDeLetras;

    for (let i = 0; i < tam; i++) {
      this.letras.push(new Letra(this.app,i))
      
    }

    
        }

    draw(){
      this.app.background(50);
      
      for (let i = 0; i < this.letras.length; i++) {
      this.letras[i].draw();
      }

      this.jugador.draw();    
    }

    validar(){ 

      for (let i = 0; i < this.letras.length; i++) {
        
        if (this.app.dist(this.letras[i].getX, this.letras[i].getY, this.app.pmouseX, this.app.pmouseY)< this.jugador.getTam){
          if(this.jugador.getObjetivo == this.letras[i].getLetra){
            this.jugador.validar();
            this.letras.splice(i,1);
            return;
          }
        }
        
      }

    }
}

