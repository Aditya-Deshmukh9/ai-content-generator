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
  required?: boolean;
}

export const Tamplates: TamplateTypes[] = [
  {
    name: "Ai Prompt Enhancer",
    desc: "Turn rough ideas into polished, professional prompts. Our tool enhances clarity, adds roles, defines formats, and improves grammar for better AI outputs.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/6125/6125875.png",
    aiPrompt: `INPUT: You will receive a short user prompt and some options (tone, length, format, role). Produce a single JSON object with these fields:

* enhanced_prompt: the full prompt text to send to an LLM.
* summary: one-sentence explanation of what you changed.
* why_changes: 2-3 bullet reasons for the most important improvements.
* tags: short list of tags (e.g., "blog, marketing, code")
* estimated_word_count: integer for expected output length if used as-is.

Rules:

1. Always assign a role (e.g., "Act as a senior product manager...") unless the user opts out.
2. Include explicit output format instructions (e.g., "Return in 5 bullet points", or "Provide JSON with fields ...").
3. Add constraints and edge-case guards (e.g., length, language, no hallucinated facts).
4. If user prompt is ambiguous, expand with reasonable assumptions rather than ask a clarifying question.
5. Do not add content that changes the user's intent; only clarify, structure, and add guiding instructions.
6. Keep enhanced_prompt concise but unambiguous (typically 30–120 words for many tasks; longer for complex tasks).
7. If the user asked for code, include required language, library versions, and example input/output.

Now, convert the following examples to show the pattern (use the same JSON schema), then convert the user prompt provided in the "USER_PROMPT" field.

FEW-SHOT EXAMPLES:
Example 1 - INPUT: "write linkedin post about our new product"
OUTPUT (example):
{
"enhanced_prompt": "Act as a senior marketing copywriter. Write a LinkedIn post (about 120-150 words) announcing our new product 'AcmeFlow' — mention its main benefit (reduces onboarding time by 40%), include one customer quote placeholder, a short CTA encouraging signups, and 3 relevant hashtags. Tone: professional and optimistic. Do not include links or private data.",
"summary": "Added role, product name, benefit, CTA, and hashtags.",
"why_changes": ["Role gives voice", "Specific metrics make claims testable", "Format and length guide the model"],
"tags": ["social","marketing","short"],
"estimated_word_count": 130
}

Example 2 - INPUT: "explain quantum computing simple"
OUTPUT (example):
{
"enhanced_prompt": "Act as an educator explaining quantum computing to a high-school student with no physics background. Use analogies, avoid jargon, include 3 short examples, and finish with 2 simple resources to learn more. Keep total length under 400 words. Tone: friendly, curious.",
"summary": "Added audience, structure, examples and resource suggestions.",
"why_changes": ["Audience drives vocabulary", "Structure organizes learning", "Resource suggestions provide next steps"],
"tags": ["education","explain","longform"],
"estimated_word_count": 350
}

--- END OF INSTRUCTIONS ---

USER_PROMPT:
{{user_prompt_here}}`,
    slug: "ai-prompt-enhancer",
    form: [
      {
        label: "Your Raw Prompt",
        field: "textarea",
        name: "user_prompt",
        required: true,
      },
      {
        label: "Additional Details (e.g. context, audience, constraints)",
        field: "textarea",
        name: "extra_details",
      },
    ],
  },
  {
    name: "Direct Email To HR",
    desc: "Send AI-generated email to HR via button click only.",
    category: "email",
    icon: "https://cdn-icons-png.flaticon.com/128/10026/10026257.png",
    aiPrompt: `  Write a professional job application email to HR using the details provided. 
   The email must be recruiter-friendly and include the following: 
   1. A clear Subject line: 'Application for [Job Title] | [Applicant Name]'. 
   2. A polite greeting using the HR's name if provided, otherwise 'Dear HR'. 
   3. A concise introduction stating who the applicant is, the role applied for, and their core expertise. 
   4. A short 'Key Highlights' section in 2–4 bullet points, showcasing the applicant's most relevant skills, projects, or achievements. 
   5. A closing paragraph expressing availability, enthusiasm, and willingness to contribute. 
   6. A professional sign-off with the applicant’s full name, email, phone number, and (if provided) LinkedIn/GitHub/Portfolio links. 
   Keep the tone polite, confident, and formal while ensuring the email is easy to scan for busy recruiters.`,
    slug: "direct-email-to-hr",
    form: [
      {
        label: "Your Full Name",
        field: "input",
        name: "applicant_name",
        required: true,
      },
      {
        label: "HR Email Address",
        field: "input",
        name: "hr_email",
        required: true,
      },
      {
        label:
          "Job Title / Description (Copy pasted from the job description section)",
        field: "textarea",
        name: "job_description",
        required: true,
      },
      {
        label: "Additional Details (e.g. experience, skills, portfolio link)",
        field: "textarea",
        name: "extra_details",
      },
    ],
  },
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
    name: "Perfect Email Write",
    desc: "Enhance your email communication with our AI-powered tool that corrects grammar and improves professionalism.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/6125/6125875.png",
    aiPrompt:
      "Write a professional email on given topic. with no gramtical mistake, and Humanatic touch - this email topic",
    slug: "email-rewrite",
    form: [
      {
        label: "Enter your email Topic",
        field: "textarea",
        name: "emailTopic",
        required: true,
      },
    ],
  },
  {
    name: "Blog Title Generator",
    desc: "Generate compelling blog titles tailored to your content with our AI tool.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
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
    name: "YouTube SEO Title",
    desc: "Optimize your YouTube videos with SEO-friendly titles generated by our AI tool.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    aiPrompt:
      "Generate SEO-friendly YouTube titles based on the following video topic and keywords:",
    slug: "youtube-seo-title",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter relevant keywords",
        field: "textarea",
        name: "keywords",
      },
    ],
  },
  {
    name: "YouTube Description Generator",
    desc: "Craft engaging and optimized YouTube descriptions with our AI-powered tool.",
    category: "YouTube",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    aiPrompt:
      "Generate an engaging and optimized YouTube description based on the following video topic and details:",
    slug: "youtube-description",
    form: [
      {
        label: "Enter your video topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter video details",
        field: "textarea",
        name: "details",
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "Refine your writing with our tool that eliminates errors and redundancies, offering tone analysis and better word choices.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    aiPrompt:
      "Improve the following text by eliminating errors and redundancies, and suggest better word choices:",
    slug: "text-improver",
    form: [
      {
        label: "Enter your text",
        field: "textarea",
        name: "text",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "Boost your Instagram reach with AI-generated hashtags relevant to your content.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    aiPrompt:
      "Generate a list of relevant hashtags based on the following Instagram post topic:",
    slug: "instagram-hashtag-generator",
    form: [
      {
        label: "Enter your Instagram post topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism-Free)",
    desc: "Use our tool to rewrite articles or blog posts, ensuring they are plagiarism-free and undetectable by AI detectors.",
    category: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    aiPrompt:
      "Rewrite the following article to make it plagiarism-free and undetectable by AI detectors:",
    slug: "rewrite-article",
    form: [
      {
        label: "Enter your article content",
        field: "textarea",
        name: "articleContent",
        required: true,
      },
    ],
  },
  {
    name: "Code Generator",
    desc: "Generate programming code in any language with our AI tool.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    aiPrompt:
      "Generate the following code snippet in the specified programming language:",
    slug: "code-writer",
    form: [
      {
        label: "Describe the code you need",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
      {
        label: "Enter the programming language",
        field: "input",
        name: "language",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "Identify and fix bugs in your code with our tool that offers detailed solutions and alternatives.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    aiPrompt:
      "Analyze the following code snippet and provide detailed solutions for any detected bugs:",
    slug: "code-bug-detector",
    form: [
      {
        label: "Enter your code snippet",
        field: "textarea",
        name: "codeSnippet",
        required: true,
      },
      {
        label: "Describe the issue or error message",
        field: "textarea",
        name: "issueDescription",
      },
    ],
  },

  {
    name: "Commit Message Generator",
    desc: "Generate commit messages using AI-powered conventional commit format generator.",
    category: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1041/1041916.png",
    aiPrompt:
      "I want you to act as a commit message generator. I will provide you with information about the task and the prefix for the task code, and I would like you to generate an appropriate commit message using the conventional commit format. Do not write any explanations or other words, just reply with the commit message.",
    slug: "commit-message-generator",
    form: [
      {
        label: "Enter task details",
        field: "textarea",
        name: "task-details",
        required: true,
      },
      {
        label: "Enter prefix for the task code",
        field: "input",
        name: "task-prefix",
        required: true,
      },
    ],
  },
];

interface Feature {
  text: string;
  disabled?: boolean;
}

interface PricePlan {
  name: string;
  price: number;
  features: (string | Feature)[];
  popular: boolean;
  buttonText: string;
}

export const pricePlans: PricePlan[] = [
  {
    name: "Basic",
    price: 0,
    features: [
      "10,000 Words/Month",
      "50+ Tamplate Content",
      "Unlimited Download & Copy",
      "1 Month of History",
      { text: "Add Custum Tamplate", disabled: true },
      { text: "Access Premium templates", disabled: true },
    ],
    popular: false,
    buttonText: "Free",
  },
  {
    name: "Pro",
    price: 100,
    features: [
      "10,00,000 Words/Month",
      "50+ Tamplate Content",
      "Unlimited Download & Copy",
      "1 Year of History",
      { text: "Add Custum Tamplate", disabled: false },
      { text: "Access Premium templates", disabled: false },
    ],
    popular: true,
    buttonText: "Get Pro",
  },
];
