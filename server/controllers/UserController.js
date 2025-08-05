import { Webhook } from "svix";
import userModel from "../models/userModel.js";

// API Controller Function to Manage Clerk user with database
//http://localhost:4000/api/user/webhooks
const clerkWebhooks = async (req,res) => {

    try {
        // Create a Svix instance with clerk webhook secret
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await  whook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"]
        })

        const{data,type} = req.body

        // console.log(`Received webhook event: ${type}`); // For debugging

        switch (type){
            case "user.created":
            case "user.signed_in": { // Add user.signed_in event to handle sign-ins
                const userData = {
                    clerkID: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url,
                }
                
                // Use findOneAndUpdate with upsert:true to handle both create and update
                await userModel.findOneAndUpdate({clerkID: data.id}, userData, { upsert: true, new: true });
                
                res.json({success: true, message: "User created or updated successfully"});

                break;
            }
            case "user.updated":{

                const userData = {
                    clerkID: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    photo:data.image_url,
                }

                await userModel.findOneAndUpdate({clerkID:data.id},userData, { new: true });
                res.json({success: true, message: "User updated successfully"});

                break;
            }
            case "user.deleted":{
                await userModel.findOneAndDelete({clerkID:data.id})
                res.json({success: true, message: "User deleted successfully"});

                break;
            }
            default: {
                console.log(`Unhandled event type: ${type}`);
                res.json({success: true, message: "Webhook received, but event type not handled"});
            }
        }
    } catch (error){
        console.error(error); // Use console.error for better visibility
        res.status(500).json({success:false, message:error.message});
    }
}


export {clerkWebhooks}