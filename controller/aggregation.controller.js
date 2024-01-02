import Order from '../models/sampleData.js';
import Data from '../sampleData.js'
const insertData = async (req, res)=>{
    try {
        const DataToSave = req.body;
        console.log("DataToSave",DataToSave);
        // process.exit(0)
        const inserManyDataInSampleDataModel = await Order.insertMany(DataToSave);
        res.status(200).send({
            'status':"200",
            'msg': 'Inserted Successfully'
        })
    } catch (error) {
        console.log("Error in insertData:",error)
    }
}

export default insertData;