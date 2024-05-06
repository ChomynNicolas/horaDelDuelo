class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
  constructor(name,cost,power,res){
    super(name,cost);
    this.power = power;
    this.res = res;
  }

  play(){
    console.log("Carta jugada "+this.name)
  }
  attack(target){
    target.res-=this.power;
  }
}

class Efects extends Card{
  constructor(name,cost,text,stat,mag){
  super(name,cost);
  this.text = text;
  this.stat = stat;
  this.mag = mag;
}
  aplyEfect(unit){
    if(this.stat === "res"){
      if(this.mag<0){
        unit.res-=this.mag;
      }else unit.res+=this.mag;
    }else{
      if(this.mag<0){
        unit.power-=this.mag;
      }else unit.power+=this.mag;
    }
  }
  play(){
    console.log("Efecto jugado "+this.name)
  }
}
//creando ninjas

ninjaCinturonRojo = new Unit("Ninja Cinturon rojo",3,3,4);
ninjaCinturonNegro = new Unit("Ninja Cinturon negro",4,5,4);

//creando cartas de efecto

algoritmoDificil = new Efects("Algoritmo Dificil ",2,"aumentar la resistencia del objetivo en 3","res",3);
rdpnm = new Efects("Rechazo de promesa no manejado ",1,"reducir la resistencia del objetivo en 2","res",-2);
programacionEnPareja = new Efects("Programación en pareja",3,"aumentar el poder del objetivo en 2","power",2);

//simulando la pelea 

console.log(ninjaCinturonRojo);
console.log(ninjaCinturonNegro);
//turno 1
console.log("Jugador 1 convoca")
ninjaCinturonRojo.play();
algoritmoDificil.aplyEfect(ninjaCinturonRojo);
//turno 2
console.log("Jugador 2 convoca")
ninjaCinturonNegro.play();
rdpnm.aplyEfect(ninjaCinturonRojo);
//turno 3
console.log("Jugador 1 juega")
programacionEnPareja.aplyEfect(ninjaCinturonRojo);
ninjaCinturonRojo.attack(ninjaCinturonNegro);

console.log(ninjaCinturonRojo);
console.log(ninjaCinturonNegro);