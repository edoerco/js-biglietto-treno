/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

var km = parseInt(prompt('Quanti km prevede il tuo viaggio?'));
console.log(km);

var eta = parseInt(prompt('Quanti anni hai?'));
console.log(eta);

var ticket = (km * 0.21);
console.log(ticket);

if (eta < 18)
{
    var under18 = ticket * 0.8;
        // arrotondo fino al decimale
        under18 = under18.toFixed(2)
    console.log('Il prezzo del biglietto è ' + under18 + ' €');
}
else if (eta > 65) 
{
    var over65 = ticket * 0.6;
        // arrotondo fino al decimale
        over65 = over65.toFixed(2)
    console.log('Il prezzo del biglietto è ' +  over65 + ' €'); 
}
else
{
    var over18under65 = ticket;
        // arrotondo fino al decimale
        over18under65 = over18under65.toFixed(2)
    console.log('Il prezzo del biglietto è ' + over18under65 + ' €')
}


