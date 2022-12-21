import  shoes  from '../../../data/products/shoes.json'

export default function handler(req, res){
    try{
    res.status(200).json(shoes);}
    catch(err){
        console.log(err);
        res.status(500).send({message: 'Internal Server Error'})
    }
}