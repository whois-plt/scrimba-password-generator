const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let getPassword1 = document.getElementById("password1")
let getPassword2 = document.getElementById("password2")

function generatePassword() {
    let pass1 = ""
    let pass2 = ""
    for ( let i = 0; i < 15; i++) {
        let randomPass1 = Math.floor(Math.random() * characters.length)
        let randomPass2 = Math.floor(Math.random() * characters.length)
        pass1 += characters[randomPass1]
        getPassword1.textContent = pass1
        pass2 += characters[randomPass2]
        getPassword2.textContent = pass2
    }
}

/*

Mi tortént itt valójában (a pass1 rubrika bemutatásával)?

- egyértelműen készítettünk 2 db variable-t, ami store-olja a div-ekben található dolgokat (getPassword1 & 2)
- készítettünk egy functiont, amire a gomb hallgat ezen belül ->
- kellett egy üres variable, ami majd store-olja a karaktereket, amit az array-ből loopolunk (a diven belül)
- meg kellett adni a loopban, hogy max 15 karaktert vehet ki belőle
- majd a Math.random-al biztosítani kellett a random találatot az arrayből
- végül a korábban elkészített üres variable-nek (pass) meg kellett adni a forrást és az indexet (a forrást a karakterlista volt, az index pedig a Math.random)
- végül meg kellett adni a textContent-et, hogy a helyén jelenjennek meg a számok

*/