//Global scope
var globalName = "Béla";
const NAME="Gizi"

function something() {
    //Local scope vagy function scope.
    //A let blokk scopú, a var function scopú, const is blokk szintű
    var globalName = "Jack";
    const NAME="Tribál";
    {
        const NAME='Zita';
        let globalName = "Sanyi";
        console.log(globalName, NAME);
    }
    console.log(globalName, NAME);
}
something();
    
console.log(globalName, NAME);
