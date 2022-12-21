import  categories  from '../../../data/category/category.json'

export default function handler(req, res){
    try{
    res.status(200).json(categories);}
    catch{
        console.log('Error!')
    }
}