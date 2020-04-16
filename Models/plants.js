const mongoose= require('mongoose');

const Schema = new mongoose.Schema({
    name: {type:String,
        required:true,
    },
    image: {type:String,
        required:true,
    },
    description: {type:String,
        required:true,
    },
    category: {type:String,
        required:true,
    },
    water: {type:String,
        required:true,
    },
    sunlight: {type:String,
        required:true,
    },
});
const  plants= mongoose.model('plants',Schema);
module.exports =plants;
