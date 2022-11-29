class DatabaseManager{
    model

    constructor(model) {
        this.model = model
    }

    async store(credentials){
        try {
            return await this.model.create(credentials)
        }catch (err){
            throw err
        }
    }

    async getAll() {
        try {
            return await this.model.find({})
        }catch (err){
            throw err
        }
    }

    async delete(id){
        try {
            await this.model.deleteOne({_id: id})
        }catch (err){
            throw err
        }
    }

    async update(id, credentials){
        try {
            return await this.model.findOneAndUpdate({_id: id}, credentials)
        }catch (err){
            throw err
        }
    }

    async getById(credentials){
        try {
            return await this.model.findOne(credentials)
        }catch (err){
            throw err
        }
    }

    async deleteAll(){
        try {
            return await this.model.deleteMany({})
        }catch (err) {
            throw err
        }
    }
}

module.exports = DatabaseManager