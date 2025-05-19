import User from '../models/user'
import { Webhook } from 'svix'


const clerkWebhooks = async (req,res)=> {
    try {
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SERECT);
        const headers = {
            "svix-id" : req.headers["svix-id"],
            "svix-timestamp" : req.headers["svix-timestamp"],
            "svix-signature" : req.headers["svix-signature"],

        };

        //!Verify Headers
        await webhook.verify(JSON.stringify(req.body), headers);

        const { data, type} = req.body
        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_adress,
            username: data.first_name + " " + last.first_name,
            image: data.image_url, 
        }

        switch(type) {
            case "user.created":{
                await User.create(userData);
                break;
            }
            case "user.updated":{
                await User.findByIdAndUpdate(data.id,userData);
                break;
            }
            case "user.deleted":{
                await User.findByIdAndDelete(userData);
                break;
            }

            default: 
                break;
        }

        res.json({success : true, message: "webhook Recived"})
    } catch (error) {
        console.log(error.message);
        res.json({success : false, message: error.message})
    }

}

export default clerkWebhooks;