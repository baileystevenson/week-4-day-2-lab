
const database = require('./db.json')
let newID = 4

module.exports={
    getAllHouses:(req,res) => {
        console.log('endpoint hit')
        res.status(200).send(database)
    },
    deleteHouse:(req,res) => {
        res.status(200).send(database)
    },

    updateHouse:(req,res) => {
        res.status(200).send(database)
    },

    createHouse:(req,res) => {
        res.status(200).send(database)
    },

deleteHouse:(req, res) => {
    let { id }= req.params
    let index = database.findIndex(houseObj => houseObj.id === +id)
    database.splice(index,1)
    res.status(200).send(database)
},

createHouse:(req, res) => {
    // console.log(req.params)
    let { address, price, imageURL } = req.body
    let newHouse = {
        id: newID,
        address,
        price,
        imageURL,
    }
    database.push(newHouse)

    res.status(200).send(database)

    newID++
},
// updateHouse:(res, req) => {
// let {id} = req.params
// let{type}= req.body

// let index = database.findIndex(houseObj => houseObj.id === +id)
// // let houseToUpdate = database[index]
// if(type === 'minus' && database[index].price > 170000) {
//     database[index].price -= 1000 
// }else if (type === `plus` && database[index].price < 450000){
//     database[index].price += 1000
// }
// res.status(200).send(database)
// console.log(req)
// }
updateHouse:(req,res)=>{         
    let{id} = req.params         
    let{type} = req.body         
    console.log(type)         
    console.log(id)         
    let index = database.findIndex(houseObj => houseObj.id === +id)         
    if(type === `minus` && database[index].price){             
        database[index].price-=10000         
    }else if(type === `plus` && database[index].price){             
        database[index].price+=10000         }          
res.status(200).send(database)     } }

