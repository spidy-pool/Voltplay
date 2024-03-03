import mongoose from 'mongoose';







export const Connection = async (URP) => {
  
    try {
        await mongoose.connect(URP,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            });
        console.log('Error nhi aya database m ');
    }
    catch (error) {
        console.log('Error agya h database m',error.message)
    }
}

export default Connection;