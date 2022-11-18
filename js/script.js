
/////////////////////////////////////////////////////////////////////////////////// Objects

let knightChoise // serve para identificar qual cavaleiro vai usar os dados
let knight1Select = 0
let knight2Select = 0
disabledButtons2()

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
    }
}

knight2Obj.dom.vida.value = 10
knight2Obj.dom.inPrepare = 'Sem posição'


/// Action knight1

function atacar1(){ 
    botIA()
    knight1Obj.ataque = true
    disabledButtons1()
    knight1Select = 1
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
    
}
function defesa1(){ 
    botIA()
    knight1Obj.defense = true
    disabledButtons1()
    knight1Select = 1
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
    
}
function preparar1(){ 
    botIA()
    knight1Obj.prepare = true
    knight1Obj.active = true
    disabledButtons1()
    knight1Select = 1
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
    
}
function esquiva1(){ 
    botIA()
    knight1Obj.dodge = true
    disabledButtons1()
    knight1Select = 1
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
    
   
}


/// Action knight2

function atacar2(){ 
    knight2Obj.ataque = true
    disabledButtons2()
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
}
function defesa2(){ 
    knight2Obj.defense = true
    disabledButtons2()
    knight2Select = 1
    releaseButton(knight1Select, knight2Select) 
}
function preparar2(){ 
    knight2Obj.prepare = true
    knight2Obj.active = true
    disabledButtons2()
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
}
function esquiva2(){ 
    knight2Obj.dodge = true
    disabledButtons2() 
    knight2Select = 1
    releaseButton(knight1Select, knight2Select)
}





//// Disabled

function disabledButtons1(){
    document.getElementById('preparar1').setAttribute('disabled', 'disabled')
    document.getElementById('atacar1').setAttribute('disabled', 'disabled')
    document.getElementById('defender1').setAttribute('disabled', 'disabled')
    document.getElementById('esquivar1').setAttribute('disabled', 'disabled')
    document.getElementById('preparar1').style.backgroundColor = "gray"
    document.getElementById('atacar1').style.backgroundColor = "gray"
    document.getElementById('defender1').style.backgroundColor = "gray"
    document.getElementById('esquivar1').style.backgroundColor = "gray"
}

function disabledButtons2(){
    document.getElementById('preparar2').setAttribute('disabled', 'disabled')
    document.getElementById('atacar2').setAttribute('disabled', 'disabled')
    document.getElementById('defender2').setAttribute('disabled', 'disabled')
    document.getElementById('esquivar2').setAttribute('disabled', 'disabled')
    document.getElementById('preparar2').style.backgroundColor = "gray"
    document.getElementById('atacar2').style.backgroundColor = "gray"
    document.getElementById('defender2').style.backgroundColor = "gray"
    document.getElementById('esquivar2').style.backgroundColor = "gray"
}

function ableButtons1(){
    document.getElementById('preparar1').removeAttribute('disabled', 'disabled')
    document.getElementById('atacar1').removeAttribute('disabled', 'disabled')
    document.getElementById('defender1').removeAttribute('disabled', 'disabled')
    document.getElementById('esquivar1').removeAttribute('disabled', 'disabled')
    document.getElementById('preparar1').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
    document.getElementById('atacar1').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
    document.getElementById('defender1').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
    document.getElementById('esquivar1').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
}

function ableButtons2(){
    document.getElementById('preparar2').removeAttribute('disabled', 'disabled')
    document.getElementById('atacar2').removeAttribute('disabled', 'disabled')
    document.getElementById('defender2').removeAttribute('disabled', 'disabled')
    document.getElementById('esquivar2').removeAttribute('disabled', 'disabled')
    document.getElementById('preparar2').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
    document.getElementById('atacar2').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
    document.getElementById('defender2').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
    document.getElementById('esquivar2').style.backgroundColor = "rgba(7, 21, 77, 0.822)";
}




///////////////////////////////////////////////////////////////////////////////////// Validações batalha




function ataqueVsAtaque(knightAttack, knightPrepare, knightRetaque, knightRLife, actionText, outPrepareText){
    if(knightPrepare){ 
        if(knightAttack && knightRetaque){// Ataque True = Retaque True
            knightRLife.value = knightRLife.value - 3
            actionText.innerText = 'Acertou o ataque!!'
            outPrepareText.innerText = 'Sem posição'
                if(knightChoise == 1){
                    knight1Obj.prepare = false
                }else{
                    knight2Obj.prepare = false
                }
            knightPrepare = false
        }
    }else{
        actionText.innerText = 'Não estava em posição para atacar!!'
    }

}


function ataqueVsDefense(knightAttack, knightPrepare, knightRDefense, knightRLife, actionText, outPrepareText, knightDefense){
    
        if(knightAttack && knightRDefense){ // Attack vs defense
            if(knightPrepare){
                knightRLife.value = knightRLife.value - 1
                knightPrepare = false
                actionText.innerText = 'Acertou o ataque!!'
                outPrepareText.innerText = 'Sem posição'
            }else{
                actionText.innerText = 'Knight não estava preparado,\n errou o ataque'
    }
    }

        if(knightDefense){ // Defense
            actionText.innerText = 'Knight se defendeu'
        }


}

function ataqueVsPrepare(knightAttack, knightPrepare, knightRetaque, knightRDefense, knightRDodge, knightRLife, actionText, outPrepareText){
        if(knightAttack && knightRetaque == false && knightRDefense == false && knightRDodge == false){
            if(knightPrepare){
                knightRLife.value = knightRLife.value - 3
                actionText.innerText = 'Acertou o ataque!!'             
                knightPrepare = false    
                outPrepareText.innerText = 'Sem posição'

        }else{
            actionText.innerText = 'Knight não estava preparado,\n errou o ataque'
    }
    }
}


function ataqueVsDodge(knightAttack, knightPrepare, knightRDodge, actionText, outPrepareText, knightDodge, active){
        if(knightAttack && knightRDodge){
            if(knightPrepare){
                actionText.innerText = 'Knight errou o Ataque,\n o adversário se esquivou!'
                outPrepareText.innerText = 'Sem posição'
                knightPrepare = false 
            }else{
                actionText.innerText = 'Knight não estava preparado,\n errou o ataque'
                knightPrepare = false
            }
        }
          
}


function dodge(knightDodge){
        if(knightDodge){
        if(knightChoise == 1){
            knight1Obj.prepare = false
            knight1Obj.dom.outAction.innerText = 'Knight se esquivou! \n(Saiu da posição de ataque)'
            knight1Obj.dom.outPrepare.innerText = 'Sem posição'
        }else{
            knight2Obj.prepare = false
            knight2Obj.dom.outAction.innerText = 'Knight se esquivou! \n(Saiu da posição de ataque)'
            knight2Obj.dom.outPrepare.innerText = 'Sem posição'
        }
    }
}




function knightPrepareZ(knightPrepare, actionText, outPrepareText, knightAttack, knightDefense, knightDodge, active){
    if(knightPrepare && knightAttack == false && knightDefense == false && knightDodge == false){
        actionText.innerText = 'Manteve a posição de ataque!'
        outPrepareText.innerText = 'Posição de Ataque!'
        active = false
    }
}





function ataqueTrue(knightAttack, knightPrepare, knightRetaque, knightRDefense, knightRDodge, knightRLife, actionText, outPrepareText, knightDefense, knightDodge, active){
    ataqueVsAtaque(knightAttack, knightPrepare, knightRetaque, knightRLife, actionText, outPrepareText)
    ataqueVsDefense(knightAttack, knightPrepare, knightRDefense, knightRLife, actionText, outPrepareText, knightDefense)
    ataqueVsPrepare(knightAttack, knightPrepare, knightRetaque, knightRDefense, knightRDodge, knightRLife, actionText, outPrepareText)
    ataqueVsDodge(knightAttack, knightPrepare, knightRDodge, actionText, outPrepareText, knightDodge, active)
    dodge(knightDodge, knightPrepare, actionText, outPrepareText, active)
    if(active){
    knightPrepareZ(knightPrepare, actionText, outPrepareText, knightAttack, knightDefense, knightDodge, active)
    }
    
}





////////////////////////////////////////////////////////////////////////////////////////////// limpeza
function clearStatus(){
    knight1Obj.ataque = false
    knight1Obj.defense = false
    knight1Obj.dodge  = false

    knight2Obj.ataque = false
    knight2Obj.defense = false
    knight2Obj.dodge = false


}

////////////////////////////////////////////////////////////////////// Exec validation

function addEvento1(){
    knightChoise = 1
    ataqueTrue(knight1Obj.ataque, knight1Obj.prepare, knight2Obj.ataque, knight2Obj.defense, knight2Obj.dodge, knight2Obj.dom.vida, knight1Obj.dom.outAction, knight1Obj.dom.outPrepare, knight1Obj.defense, knight1Obj.dodge, knight1Obj.active)
}

function addEvento2(){
    knightChoise = 2
    ataqueTrue(knight2Obj.ataque, knight2Obj.prepare, knight1Obj.ataque, knight1Obj.defense, knight1Obj.dodge, knight1Obj.dom.vida, knight2Obj.dom.outAction, knight2Obj.dom.outPrepare, knight2Obj.defense, knight2Obj.dodge, knight2Obj.active)
}


///// validação morte
function dead(){
    if(knight1Obj.dom.vida.value <= 0){
        knight1Obj.dom.outAction.innerText = 'Morto'
        knight1Obj.dom.outAction.setAttribute('style', 'color: red')
        disabledButtons1()
        knight1Obj.dom.vida.value = 0
    }
    if(knight2Obj.dom.vida.value <= 0){
        knight2Obj.dom.outAction.innerText = 'Morto'
        knight2Obj.dom.outAction.setAttribute('style', 'color: red')
        disabledButtons2()
        knight2Obj.dom.vida.value = 0
    }
}





/////////// Liberação Batalha

function releaseButton(knight1Select, knight2Select){
    if(knight1Select == 1 && knight2Select == 1){
        document.getElementById('batalharClick').style.display = "block"
    }
}

function hideButton(){
    knight1Select = 0
    knight2Select = 0
    document.getElementById('batalharClick').style.display = "none"
}




////////////////////////////////////////////////////////////////////////////////// exec batalha

document.getElementById('batalharClick').addEventListener('click', addEvento1)
document.getElementById('batalharClick').addEventListener('click', addEvento2)
document.getElementById('batalharClick').addEventListener('click', clearStatus)
document.getElementById('batalharClick').addEventListener('click', ableButtons1)
// document.getElementById('batalharClick').addEventListener('click', ableButtons2)
document.getElementById('batalharClick').addEventListener('click', dead)
document.getElementById('batalharClick').addEventListener('click', hideButton)





//////////////////////////////// IA

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
    if(knight1Obj.prepare && knight2Obj.prepare && knight1Obj.dom.vida.value >= 5){
        let decisao = Math.floor(Math.random() * 2)  
        if(decisao == 0){   
            knight2Obj.ataque = true
        }else{
            knight2Obj.defense = true
        }
    }else if(knight1Obj.prepare && knight2Obj.prepare &&knight1Obj.dom.vida.value <= 4){
        let decisao = Math.floor(Math.random() * 3)
        if(decisao == 0){
            knight2Obj.ataque = true
        }else if(decisao == 1){
            knight2Obj.defense = true
        } else if(decisao == 2){
            knight2Obj.dodge = true
        }
    }
    if(knight1Obj.prepare && knight2Obj.prepare == false){
        knight2Obj.dodge = true
    }
}





