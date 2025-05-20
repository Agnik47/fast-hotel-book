import User from '../models/user.js';
import { Webhook } from 'svix';

const clerkWebhooks = async (req, res) => {
  try {
    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SERECT); 
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await webhook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,  
      userName: data.first_name + " " + data.last_name,
      image: data.image_url,
      recentSearchCities: [],  // default to empty array
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
      default:
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
