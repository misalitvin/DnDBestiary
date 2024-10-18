let classSpellList = [];
let DmgList = [];
let Status = [];

document.getElementById("RelButtonCSR").addEventListener('click', () => {
    classSpellList = [];
});

document.getElementById("RelButtonCSS").addEventListener('click', () => {
    console.log('ClassSpell:'+classSpellList);
});

document.getElementById("RelButtonCS").addEventListener('click', () => {
    statusType.push(document.getElementById("ClassSpell").value)
});

document.getElementById("RelButtonDR").addEventListener('click', () => {
    DmgList = [];
});

document.getElementById("RelButtonDS").addEventListener('click', () => {
    console.log('Damage:'+DmgList);
});

document.getElementById("RelButtonD").addEventListener('click', () => {
    DmgList.push(document.getElementById("DamageType").value)
});

document.getElementById("RelButtonSR").addEventListener('click', () => {
    StatusList = [];
});

document.getElementById("RelButtonSS").addEventListener('click', () => {
    console.log('Status:'+StatusList);
});

document.getElementById("RelButtonS").addEventListener('click', () => {
    StatusList.push(document.getElementById("StatusType").value)
});

document.getElementById("SubmitButton").addEventListener('click', () => {
    const spell = {
        name: document.getElementById("nameLabel").value,

        description: document.getElementById("description").value,
        level: parseInt(document.getElementById("levelLabel").value),
        spellTypename: document.getElementById("TypeLabel").value,
        duration: document.getElementById("durationLabel").value,
        concentDura: document.getElementById("concDurationLabel").value,
        distance: parseInt(document.getElementById("distanceLabel").value),
        concentration: document.getElementById("concentration").checked,
        target: document.getElementById("targetLabel").value,
        prepareMoves: parseInt(document.getElementById("prepMovesLabel").value),
        spell_classList: classSpellList,
        damageType_names : DmgList,
        status_names: Status
    }
    spellPush(spell);
    classSpellList = [];
    DmgList = [];
    Status = [];
    document.getElementById("nameLabel").value = '';
    document.getElementById("description").value = '';
    document.getElementById("targetLabel").value = '';
    document.getElementById("durationLabel").value = '';
    document.getElementById("concDurationLabel").value = '';
    document.getElementById("concentration").checked = false;
    document.getElementById("prepMovesLabel").value = '';
    document.getElementById("distanceLabel").value = '';
});


function spellPush(spell) {

    fetch('http://localhost:8080/spellPush', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(spell,null,2),
    })
}


document.getElementById("GetSpell").addEventListener( 'click',() =>{
    fetch(`http://localhost:8080/Spell`, {
        method: 'GET',
    })
})

document.getElementById("GetMonster").addEventListener( 'click',() =>{
    fetch(`http://localhost:8080/Monster`, {
        method: 'GET',
    })
})

document.getElementById("GetItem").addEventListener( 'click',() =>{
    fetch(`http://localhost:8080/Item`, {
        method: 'GET',
    })
})

document.getElementById("GetAbility").addEventListener( 'click',() =>{
    fetch(`http://localhost:8080/Ability`, {
        method: 'GET',
    })
})
