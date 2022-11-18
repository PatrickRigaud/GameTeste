
let knight1Obj = {
    ataque: false,
    defense: false,
    prepare: false,
    dodge: false,
    active: false,
    dom: {
        vida: document.getElementById('vidaKnight1'),
        outKnight: document.getElementById('vidaKnight1'),
        inAction: document.getElementById('action1'),
        outAction: document.getElementById('action1'), 
        inPrepare: document.getElementById('preparado1'),
        outPrepare: document.getElementById('preparado1')
    }
}

knight1Obj.dom.vida.value = 10
knight1Obj.dom.inPrepare = 'Sem posição'


let knight2Obj = {
    ataque: false,
    defense: false,
    prepare: false,
    dodge: false,
    active: false,
    dom: {
        vida: document.getElementById('vidaKnight2'),
        outKnight: document.getElementById('vidaKnight2'),
        inAction: document.getElementById('action2'),
        outAction: document.getElementById('action2'), 
        inPrepare: document.getElementById('preparado2'),
        outPrepare: document.getElementById('preparado2')
    }}


function botIA(){
    advPrepareOff()
    advPrepareOn()
}

function advPrepareOff(){
    if(knight1Obj.prepare == false && knight2Obj.prepare == false){
        knight2Obj.prepare = true
        knight2Obj.active = true
    }else if(knight1Obj == false && knight2Obj.prepare){
        let decisao = Math.floor(Math.random() * 2)
        if(decisao == 0){
            knight2Obj.ataque = true
        }else{
            knight2Obj.defense = true
        }
    }

}

function advPrepareOn(){
    if(knight1Obj.prepare && knight2Obj.prepare &&knight1Obj.dom.vida >= 5){
        let decisao = Math.floor(Math.random() * 2)
        if(decisao == 0){
            knight2Obj.ataque = true
        }else{
            knight2Obj.defense = true
        }
    }else if(knight1Obj.prepare && knight2Obj.prepare &&knight1Obj.dom.vida <= 4){
        let decisao = Math.floor(Math.random() * 3)
        if(decisao == 0){
            knight2Obj.ataque = true
        }else if(decisao == 1){
            knight2Obj.defense = true
        } else{
            knight2Obj.dodge = true
        }
    }
    if(knight1Obj.prepare && knight2Obj.prepare == false){
        knight2Obj.dodge = true
    }
}