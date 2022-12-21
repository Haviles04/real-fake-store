import  categories  from '../../../data/category/category.json'

export default function handler(req, res){
    res.status(200).json(categories);
}