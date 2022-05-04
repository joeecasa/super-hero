const express = require("express")
const app = express()

app.use(express.static("public"))

app.set('view engine', 'ejs')
// cuando haga una peticion a la / entonces se llame mi router
// el router va a identificar si llaman a / o si llaman a /about

let puerto = 3030

app.listen(process.env.PORT || puerto, () => {
console.log ("servidor funcionando en puerto " + puerto)
})


const rutasMain = require ("./routes")
//no es necesario ponerle el index xq se llama index si se llamaria diferente se tiene q poner /main por ejemplo
app.use("/", rutasMain)

