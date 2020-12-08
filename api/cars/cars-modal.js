
const db = require('../../data/dbConfig')


module.exports = {
    get(){
        return db('cars')
    },
    create(car){
        return db('cars').insert(car)
        .then(([id]) => {
            return db('cars').where('id', id).first()
        })
    }
}