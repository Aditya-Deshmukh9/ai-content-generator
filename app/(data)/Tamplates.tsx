export interface TamplateTypes {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: FormData[];
}
interface FormData {
  label: string;
  field: string;
  name: string;
  required: boolean;
}

export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on provided blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/10026/10026257.png",
    aiPrompt:
      "Generate a list of creative blog title ideas based on the following blog niche and outline:",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Text To Emoji",
    desc: "An AI tool that converts normal text to emoji text based on provided input.",
    category: "Text Conversion",
    icon: "https://cdn-icons-png.flaticon.com/128/10026/10026257.png", // Update with an appropriate icon URL if needed
    aiPrompt: "Convert the following normal text into emoji text:",
    slug: "convert-text-to-emoji",
    form: [
      {
        label: "Enter your normal text",
        field: "textarea",
        name: "normalText",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Caption Generator",
    desc: "This free AI-powered Instagram caption generator creates the perfect caption for your photo to help you get more likes, followers, and comments.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/6373/6373976.png",
    aiPrompt:
      "Generate a catchy Instagram caption for a photo with the following description:",
    slug: "generate-instagram-caption",
    form: [
      {
        label: "Enter photo description",
        field: "textarea",
        name: "description",
        required: true,
      },
    ],
  },
  {
    name: "Marketing Email Generator",
    desc: "Copy.ai’s marketing email generator helps you write more effective marketing emails in minutes.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/944/944948.png",
    aiPrompt:
      "Generate a compelling marketing email based on the following details:",
    slug: "generate-marketing-email",
    form: [
      {
        label: "Enter email details",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Sentence Rewriter",
    desc: "This free Sentence Rewriter tool will rewrite an entire sentence according to the instructions provided by you, so that you can get a unique version of the sentence.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/10564/10564711.png",
    aiPrompt: "Rewrite the following sentence to make it unique:",
    slug: "rewrite-sentence",
    form: [
      {
        label: "Enter sentence to rewrite",
        field: "textarea",
        name: "sentence",
        required: true,
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "Try this free Product Description Generator that enables you to create beautiful and effective product descriptions that sell.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3525/3525271.png",
    aiPrompt:
      "Generate a detailed product description based on the following product details:",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product details",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Paragraph Generator",
    desc: "This free AI Paragraph Generator will generate complete paragraphs according to the instructions provided by you.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/5774/5774563.png",
    aiPrompt:
      "Generate a well-written paragraph based on the following instructions:",
    slug: "generate-paragraph",
    form: [
      {
        label: "Enter instructions",
        field: "textarea",
        name: "instructions",
        required: true,
      },
    ],
  },
  {
    name: "Outline Generator",
    desc: "Dealing with writer's block? Our free outline generator will take you from a blank page to full blog posts in under 5 minutes.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/8663/8663663.png",
    aiPrompt:
      "Generate an outline for a blog post based on the following topic:",
    slug: "generate-outline",
    form: [
      {
        label: "Enter topic",
        field: "textarea",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Cold Email Generator",
    desc: "Try this free cold email generator to create unique personalized cold emails from any LinkedIn URL. Enter any LinkedIn URL and a few details about your company, and you'll have a personalized email ready to send in seconds.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/15422/15422948.png",
    aiPrompt:
      "Generate a personalized cold email based on the provided LinkedIn URL and company details:",
    slug: "generate-cold-email",
    form: [
      {
        label: "Enter LinkedIn URL",
        field: "input",
        name: "linkedin_url",
        required: true,
      },
      {
        label: "Enter company details",
        field: "textarea",
        name: "company_details",
        required: true,
      },
    ],
  },
  {
    name: "Call To Action Generator",
    desc: "Create high converting CTAs with this call to action generator. Not only will it help you create great CTAs, but also helps you improve your conversion rate and increase sales.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/4321/4321131.png",
    aiPrompt:
      "Generate a compelling call to action based on the following details:",
    slug: "generate-cta",
    form: [
      {
        label: "Enter CTA details",
        field: "textarea",
        name: "cta_details",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "This free email subject line generator will help you craft the perfect subject line for your emails, newsletters, and more!",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/9068/9068642.png",
    aiPrompt:
      "Generate an engaging email subject line based on the following email content:",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "email_content",
        required: true,
      },
    ],
  },
  {
    name: "Content Idea Generator",
    desc: "Free Content Idea Generator - Use our exclusive content idea generator to come up with your next blog or social media post!",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/6578/6578946.png",
    aiPrompt: "Generate creative content ideas based on the following topic:",
    slug: "generate-content-idea",
    form: [
      {
        label: "Enter topic",
        field: "textarea",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Slogan Generator",
    desc: "Need a slogan for your company? Our free slogan generator will help you create a slogan that your customers won't be able to forget!",
    category: "Branding",
    icon: "https://cdn-icons-png.flaticon.com/128/16495/16495894.png",
    aiPrompt:
      "Generate a memorable slogan based on the following company details:",
    slug: "generate-slogan",
    form: [
      {
        label: "Enter company details",
        field: "textarea",
        name: "company_details",
        required: true,
      },
    ],
  },
  {
    name: "Bio Generator",
    desc: "Create a social media bio in seconds. No more trying to be clever and witty. We do the hard work for you so that every time you update your social media page, you have an awesome new bio!",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/8846/8846701.png",
    aiPrompt:
      "Generate an engaging bio based on the following personal details:",
    slug: "generate-bio",
    form: [
      {
        label: "Enter personal details",
        field: "textarea",
        name: "personal_details",
        required: true,
      },
    ],
  },
  {
    name: "Blog Post Idea Generator",
    desc: "Want to start a blog but have no ideas what to write? Use our blog post idea generator to get free blog post ideas for all types of blogs including health, fitness, travel, food, relationships, and more.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497953.png",
    aiPrompt: "Generate blog post ideas based on the following niche:",
    slug: "generate-blog-post-idea",
    form: [
      {
        label: "Enter blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Business Name Generator",
    desc: "Have to come up with a business name? Our free AI-powered business name generator can help you find your perfect business name in seconds!",
    category: "Branding",
    icon: "https://cdn-icons-png.flaticon.com/128/9533/9533813.png",
    aiPrompt:
      "Generate a unique business name based on the following business details:",
    slug: "generate-business-name",
    form: [
      {
        label: "Enter business details",
        field: "textarea",
        name: "business_details",
        required: true,
      },
    ],
  },
];
