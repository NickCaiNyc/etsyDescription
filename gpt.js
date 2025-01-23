import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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", // Ensure you have set this environment variable,
});
(async () => {
    try {
      const imageMessages = urls.map((url) => ({
        type: "image_url",
        image_url: {
          url: url,
        },
      }));
const response = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "Format:\nTitle\n- 140 characters max. with punctuation and space counted.\n\nTips:\n1. The first 30 characters are the most important (they appear first). So the language has to be precise, simple, put the most important value of your item on the first 5-7 words.\n\nDescription \nWhat makes your item special? Buyers will only see the first few lines unless they expand the description.\n\nTips:\n-Describe specific details rather than make generalizations.\n\n1. Think about what your audience values and adjust the description accordingly. A small boutique (and etsy shoppers) tend to value the hand-made, labor-intensive process. The current trend in America prefers small, family-owned and women-run businesses. If the shop has those values, this also means that you might describe the clothing differently, or with a different emphasis for in-person boutique sales rather than online sales. \n\n2. For online descriptions, think about what a picture *cannot* convey easily, and use your descriptions to bridge the gap. Are there design details that are not obvious from the pictures (example: the buttons on the tank dress)? Use your writing as a spotlight to draw your attention to those details. Remember that what you describe is what your audience will notice. Also, think in terms of all five senses, not just the visual. For mud clothing, this often means describing the texture and feel of the fabric, which is sometimes quite different from the conventional silk sateen. \n\n3. Be concrete in your descriptions as much as possible. I think it's is helpful to to hint at usage (where the buyer can wear the item, etc), but mostly focus on very specific things that the buyer can actually see and feel once the clothing arrives at their door. This helps to give a sense of the value in the listing, and reinforce that sense of value once it arrives in your buyer's home. \n\nThis is the example of mine:\n\nDesign:\nElevate your wardrobe with our elegant sleeveless top, meticulously crafted from 100% mulberry silk and naturally dyed for a sustainable touch. This top boasts a sleek, minimalist design that effortlessly transitions from day to night. The rich black hue adds a touch of sophistication, while the unique texture of the Xiangyun (mud) silk ensures a standout look. Perfect for pairing with skirts, trousers, or layering under a blazer, this versatile piece is a must-have for any fashion-forward wardrobe.\n\n- Sleeveless Xiangyun silk (100% mulberry silk base) top\n- Naturally dyed for sustainability\n- Minimalist design\n- Luxurious and unique texture\n- Versatile for various occasions\n\n --------------\nI like to add a little summary if the audience doesn't want all the paragraphs. This helps them to glimpse the functionality, benefits, styles, material (necessary things that they need to know) in a quick way.\n\nTags (SEO)\n-Add up to 13 tags to help people search for your listings.\n-Tags must be between 1 and 20 characters.\n"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "image_url",
          "image_url": {
            "url": imageMessages
          }
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "### Elegant Printed Long Silk Dress\n\nElevate your style with this exquisite long dress crafted from 100% silk. The intricate print design blends earthy tones and artistic patterns for a luxurious look. The dress features a traditional mandarin collar and 3/4 sleeves, offering a timeless and elegant silhouette. Ideal for formal occasions or intimate gatherings, the silk material provides a smooth, comfortable feel against the skin. \n\n- 100% Silk dress\n- Intricate print design\n- Mandarin collar\n- 3/4 sleeves\n- Elegant and versatile\n\n### Tags\nSilk, Dress, Elegant, Printed, Long, Mandarin Collar, 3/4 Sleeves, Formal, Timeless, Artistic"
        }
      ]
    }
  ],
  response_format: {
    "type": "text"
  },
  temperature: 1,
  max_completion_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
});
    // Check for valid response and log the output
    if (response.choices && response.choices.length > 0) {
        console.log("GPT Response:");
        console.log(response.choices[0].message.content);
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      // Log error for debugging
      if (error.response) {
        console.error("API Error Response:", error.response.data);
      } else {
        console.error("Error communicating with OpenAI API:", error.message);
      }
    }
  })();