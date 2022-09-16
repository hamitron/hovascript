'use strict';

const publicServiceAnnouncement = (name, product, amount, title, company) => {
    let preface = `Allow me to reintroduce myself...`;
    let intro = whatsYourName(name);
    let formerProfession = moveWeight(product, amount);
    let currentProfession = getCurrentOccupation(title, company, name);

    console.log(`${preface} ${intro} ${formerProfession} ${currentProfession}`);
}

const whatsYourName = (name) => {
    const nameArray = name.split('');
    let spellIt = '';

    for (let i = 0; i < nameArray.length; i++) {
        if (i === 0) {
            spellIt += `${nameArray[i]} to the`;
        } else {
            spellIt += ` ${nameArray[i]}`
        }
    }

    return `My name is ${name}, ${spellIt}. `;
}

const moveWeight = (product, amount) => {
    let item = product === 'cocaine' ? 'snowflakes' : 'cds';
    let weight = amount === 'ounces' ? 'O-Z' : 'handful';

    return `I used to move ${item} by the ${weight}. `
}

const getCurrentOccupation = (title, company, name) => {
    let job = title.toUpperCase();
    let co = company === 'Roc Nation' ? 'R-O-C' : 'Live Nation';

    return `I guess even back then you can call me, ${job} of the ${co}...  ${name}`
}

publicServiceAnnouncement('HOV', 'cocaine', 'ounces', 'ceo', 'Roc Nation');
