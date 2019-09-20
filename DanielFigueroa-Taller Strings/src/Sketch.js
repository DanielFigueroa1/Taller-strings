new p5(function(app){
var log;
app.setup = function(){
app.createCanvas(800,800);
log = new Logica(app);
}

app.draw = function(){
    log.draw();
    log.validar();
}


}
);



