const knex = require('../config/db.js')

const getAllProduct = async(req, res) => {
    try{
        const data = await knex("products")
        if (data != null){
            return res.status(200).json(data)
        }else{
            return res.status(404).json({message: "Data not found"})
        }
    }catch(err){
        return res.status(500).json({message: err})
    }
}

const getActiveProduct = async(req,res)=>{
    try{
        const data = await knex("products").where("is_active",1)
        if (data != null){
            return res.status(200).json(data)
        }else{
            return res.status(404).json({message: "Data not found"})
        }
    }catch(err){
        return res.status(500).json({message: err})
    }
}

const addProduct  = async(req,res)=>{
    try{
        const image = req.body.image
        const name = req.body.name
        const product_price = req.body.product_price
        const product_spesial_price = req.body.product_spesial_price
        const product_discount = req.body.product_discount

        const is_active = 0
        const is_highlight = 0

        if(image == null || name == null || product_price == null || product_spesial_price == null || product_discount == null){
            return res.status(400).json({message: "data tidak lengkap"})
        }

        await knex("products").insert({
            "image": image,
            "name": name,
            "product_price": product_price,
            "product_spesial_price": product_spesial_price,
            "product_discount": product_discount,
            "is_active": is_active,
            "is_highlight": is_highlight
        })

        return res.status(200).json({message: "berhasil menambah data"})

    }catch(err){
        return res.status(500).json({message: err})
    }
}

const deleteProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        await knex("products").where("id",id).del()
        return res.status(200).json({message: "berhasil menghapus data"})
    }catch(err){
        return res.status(500).json({message: err})
    }
}

const changeActiveProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await knex("products").where("id",id)
        if(data[0].is_active == 0){
            await knex("products").where("id",id).update({
                "is_active": 1
            })
            return res.status(200).json({message: "berhasil mengaktifkan produk"})
        }
        else{
            await knex("products").where("id",id).update({
                "is_active": 0
            })
            return res.status(200).json({message: "berhasil menonaktifkan produk"})
        }
    }catch(err){
        return res.status(500).json({message: err})
    }
}

const changeHighlightProduct = async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await knex("products").where("id",id)
        if(data[0].is_highlight == 0){
            await knex("products").where("id",id).update({
                "is_highlight": 1
            })

            await knex("products").where("id","!=",id).update({
                "is_highlight": 0
            })

            return res.status(200).json({message: "berhasil menghighlight produk"})
        }
        else{
            await knex("products").where("id",id).update({
                "is_highlight": 0
            })
            return res.status(200).json({message: "berhasil menonHighlight produk"})
        }
    }catch(err){
        return res.status(500).json({message: err})
    }
}



module.exports = {
    getAllProduct,
    getActiveProduct,
    addProduct,
    deleteProduct,
    changeActiveProduct,
    changeHighlightProduct
}