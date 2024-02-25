/* 
Del 1 - En klass Color (prototypbaserad)
Gör en konstruktorfunktion för en färg, Color, som initieras med argumenten r, g och b (d.v.s varje värde tar in värdet 0-255).

Skapa metoder som konverterar mellan olika färgen genom att lägga till var och en av dessa på Colors "prototype". Dessa är:

rgb() - returnerar färgen "rgb(x,y,z)"
hex() - returnerar färgens hexkod "#XXYYZZ" - googla efter lämplig omvandling, rgb till hex
rgba() - användaren anger även alpha-värdet som argument och returnerar "rgba(x,y,z,a)
frivilligt med fler omvandlingar ex hsl(), etc
Testa genom att skapa en färg (Color) och anropa respektive metod, exempelvis genom att byta bakgrundsfärgen på en sida.

Del 2 - OOP Poker (ES6 klasser)
I denna del ska du använda E56 klasser för grundlogiken i ett pokerspel Gå till https://github.com/chasacademy-sandra-larsson/js--oop-poker och följ instruktionerna.

Pokerspelet är endast tänkt att köras i konsolen, det är alltså frivilligt att bygga vidare med ett UI. 
*/

function myColor(r, g, b) {
    this.red = r
    this.green = g
    this.blue = b
}

myColor.prototype.rgb = function () {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`
}

let color = new myColor(255, 10, 10)
console.log(color.rgb())

function rgbToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex
}

myColor.prototype.toHex = function () {
    return "#" + rgbToHex(this.red) + rgbToHex(this.green) + rgbToHex(this.blue)
}

let newHex = new myColor(12, 12, 12);

console.log(newHex.toHex());

function colorTransparent(r, g, b, a) {
    const oldColor = new myColor(r, g, b)
    this.newColor = { ...oldColor }
    this.transparency = a
}
colorTransparent.prototype.rgba = function () {
    return `rgba(${this.newColor.red}, ${this.newColor.green}, ${this.newColor.blue}, ${this.transparency})`;
}

const color2 = new colorTransparent(11, 11, 11, 11)
console.log(color2.rgba())

function myBody() {
    document.body.style.backgroundColor = color2.rgba()
}

function myBody() {
    document.body.style.backgroundColor = color.rgb()
}