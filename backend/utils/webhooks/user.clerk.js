import { Webhook } from "svix";
import { User } from '../../models/user.model.js'
import { clerkClient } from '@clerk/clerk-sdk-node'

export async function createUser (req, res) {
  try {
    const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      throw new Error("You need a WEBHOOK_SECRET in your .env");
    }
  
    // Grab the headers and body
    const headers = req.headers;
    const payload = req.body;
  
    // Get the Svix headers for verification
    const svix_id = headers["svix-id"]
    const svix_timestamp = headers["svix-timestamp"]
    const svix_signature = headers["svix-signature"]
  
    // If there are missing Svix headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Error occured -- no svix headers", {
        status: 400,
      });
    }
  
    // Initiate Svix
    const wh = new Webhook(WEBHOOK_SECRET);
  
    let evt;
  
    // Attempt to verify the incoming webhook
    // If successful, the payload will be available from 'evt'
    // If the verification fails, error out and  return error code
    try {
      evt = wh.verify(JSON.stringify(payload), {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) 
    } catch (err) {
      // Console log and return error
      console.log("Webhook failed to verify. Error:", err.message);
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  
    // Grab the ID and TYPE of the Webhook
    const eventType = evt.type;
  
    // Create MongoDB User 
    if(eventType === "user.created") {
      const {
        id,
        email_addresses,
        image_url,
        first_name,
        last_name,
      } = evt.data 
  
      const newUser = await User.create({
        clerkId: id,
        email: email_addresses[0].email_address,
        firstName: first_name,
        lastName: last_name,
        photo: image_url
      })

      if(newUser) {
        await clerkClient.users.updateUserMetadata(id, {
          publicMetadata: {
            userId: newUser._id,
          }
        })
      }
    }
  
    return res.status(200).json({
      success: true,
      message: "Webhook received and User created!",
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}
