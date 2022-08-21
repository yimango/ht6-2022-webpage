document.getElementById('addWord').addEventListener("click", showadd);
document.getElementById('addthis').addEventListener("click", combine);
document.getElementById("removeword").addEventListener("click", removeword);
document.getElementById('thisword').addEventListener('click', wordsearch)

var setwordbank = [{"word": "parole", "trans": "speech, word", "use": "noun"}];
var wordbank = [];
var allwords = [].concat(setwordbank, wordbank);
var words = [];
var defaultwords = ['parole'];
var wordsstrings = [].concat(words, defaultwords);

function showadd(){
    document.getElementById('newword').hidden = false;
    document.getElementById('newtrans').hidden = false;
    document.getElementById('newuse').hidden = false;
    document.getElementById('addWord').hidden = true;
    document.getElementById('addthis').hidden = false;
}

function addword(){
    var word = document.getElementById('newword').value;
    var trans = document.getElementById('newtrans').value;
    var use = document.getElementById('newuse').value;
    return [word, trans, use]
}

function createword(arr){
    var obj = {
        word: arr[0],
        trans: arr[1],
        use: arr[2]

    }

    if(!words.includes(obj.word)){
        wordbank.push(obj)
        words.push(obj.word)
    }
}

function combine(){
    createword(addword());
    console.log(words)
}

function removeword(){
    document.getElementById('wordToBeRmvd').hidden = false;
    document.getElementById('removeword').hidden = true;
    document.getElementById('thisword').hidden = false;
}

function wordsearch(){
    var word = document.getElementById('wordToBeRmvd').value
    if(words.includes(word)){
        words.splice(words.indexOf(word), 1)
        wordbank.splice(words.indexOf(word), 1)
    }
}

function generatenumb(){
    var current_date, epocDate;

         current_date = new Date();
         var epocDate = new Date(new Date().getTime() / 1000);
         var res = Math.abs(current_date - epocDate) / 1000;
         var days = Math.floor(res / 86400);
         return days
}

function wordoftheday(){
    var rando = generatenumb() * new Date().getUTCMonth() * new Date().getUTCFullYear();
    var i = rando%wordsstrings.length;
    var j = 3 * i % wordsstrings.length;
    var k = 12 * i % wordsstrings.length;
    document.getElementById("wordoftheday").appendChild(document.createTextNode("Le 1er du jour: " + allwords[i].word + "," + allwords[i].use + ". Anglais: " + allwords[i].trans + "."))
    document.getElementById("wordoftheday").appendChild(document.createTextNode("Le 2e du jour: " + allwords[j].word + "," + allwords[j].use + ". Anglais: " + allwords[j].trans + "."))
    document.getElementById("wordoftheday").appendChild(document.createTextNode("Le 3e du jour: " + allwords[k].word + "," + allwords[k].use + ". Anglais: " + allwords[k].trans + "."))
    
}

wordoftheday()