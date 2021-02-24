import { v4 as uuid } from "uuid";

import {
  FaPlus,
  FaTrash,
  FaEnvelope,
  FaMobile,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export const iconsObj = {
  addButton: <FaPlus />,
  removeButton: <FaTrash />,
  mailButton: <FaEnvelope />,
  phoneButton: <FaMobile />,
  locationButton: <FaMapMarkerAlt />,
  twitterButton: <FaTwitter />,
  linkedInButton: <FaLinkedin />,
  githubButton: <FaGithub />,
};

export const iconsStyle = {
  parentGreen: {
    color: "white",
    backgroundColor: "#2cbbad",
    padding: "0.25rem",
    borderRadius: "0.25rem",
  },
  parentInfo: {
    color: "white",
    backgroundColor: "#17a2b8",
    padding: "0.25rem",
    borderRadius: "0.25rem",
  },
  parentViolet: {
    color: "white",
    backgroundColor: "#6f42c1",
    padding: "0.25rem",
    borderRadius: "0.25rem",
  },
  childGreen: {
    color: "#2cbbad",
    padding: "0.25rem",
  },
  childInfo: {
    color: "#17a2b8",
    padding: "0.25rem",
  },
  childViolet: {
    color: "#6f42c1",
    padding: "0.25rem",
  },
};

export const staticDb = [
  {
    name: "Web development",
    CV: {
      basicInfo: {
        name: "Elon Musk",
        titles: "Entrepreneur, Engineer, Inventor and Investor",
        goals:
          "Aiming to reduce global warming through sustainable energy production and consumption. Planning to reduce the risk of human extinction by making life multi-planetary and setting up a human colony on Mars",
      },
      image: require(`../img/cv-images/elon.jpg`),
      contactInfo: {
        mail: "elon@teslamotors.com",
        phone: "620-681-5000",
        location: "Austin, TX",
        twitter: "@elonmusk",
        linkedin: "",
      },
      workExperience: [
        {
          id: uuid(),
          position: "Founder, CEO & Lead Designer",
          company: "SpaceX - Space Exploration Technologies",
          period: {
            startMonth: "06",
            startYear: "2002",
            endMonth: "",
            endYear: "",
            present: false,
            location: "Hawthorne, USA",
          },
          aboutJob: "Accomplishments",
          jobDescription: [
            "Successfully launched Falcon Heavy, the most powerful operational rocket in the world by a factor of two, with the ability to lift into orbit nearly 64 metric tons (141.000 lb) -- a mass greater than a 737 jetliner loaded with passengers, crew, luggage and fuel.",
            "Plans to reduce space transportation costs to enable people to colonize Mars.",
            "Developed the Falcon 9 spacecraft which replaced the space shuttle when it retired in 2011",
          ],
        },
        {
          id: uuid(),
          position: "Founder",
          company: "The Boring Company",
          period: {
            startMonth: "12",
            startYear: "2016",
            endMonth: "",
            endYear: "",
            present: false,
            location: "Hawthorne, USA",
          },
          aboutJob: "Accomplishments",
          jobDescription: [
            "Raised $10m by selling 20.000 flamethrowers in 4 days.",
            "Raised $1m by selling 50.000 baseball caps.",
            "Hyperloop -- an ultra high-speed underground public transportation system in which passengers are transported on autonomous electric pods traveling at 600+ miles per hour in a pressurized cabin.",
          ],
        },
        {
          id: uuid(),
          position: "CEO and Product Architect",
          company: "Tesla Inc.",
          period: {
            startMonth: "",
            startYear: "2004",
            endMonth: "",
            endYear: "",
            present: true,
            location: "San Mateo, USA",
          },
          aboutJob: "Accomplishments",
          jobDescription: [
            "Global sales passed 250,000 units in September 2017",
            "Consumer Reports named Tesla as the top American car brand and ranked it 8th among global carmakers in February 2017.",
            "Topped Consumer Reports Annual Owner Satisfaction Survey at 91% in 2016",
          ],
        },
        {
          id: uuid(),
          position: "Co-founder and Former Chairman",
          company: "SolarCity (subsidiary of Tesla Inc.)",
          period: {
            startMonth: "06",
            startYear: "2006",
            endMonth: "",
            endYear: "",
            present: true,
            location: "San Mateo, USA",
          },
          aboutJob: "Accomplishments",
          jobDescription: [
            "Merged the company with Tesla Inc. and now offers energy storage service through Tesla, including a turnkey residential battery backup service that incorporates Tesla's Powerwall.",
            "In 2015, installed 870MW of solar power, approximately 28% of non-utility solar installation in the U.S. that year.",
          ],
        },
        {
          id: uuid(),
          position: "Founder & CEO",
          company: "Neurolink",
          period: {
            startMonth: "07",
            startYear: "2016",
            endMonth: "",
            endYear: "",
            present: true,
            location: "San Francisco, USA",
          },
          aboutJob: "Vision",
          jobDescription: [
            "A company aims to make devices to treat serious brain diseases in the short-term, with the eventual goal of human enhancement.",
          ],
        },
      ],
      education: [
        {
          id: uuid(),
          study: "",
          institution: "",
          period: {
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            present: false,
            location: "",
          },
          aboutEducation: "",
          educationDescription: [],
        },
      ],
      languages: [],
      informalEducation: [],
      skills: [
        "Thinking through first principles",
        "Marketing",
        "Micromanagement",
        "Goal oriented",
        "Resiliency",
        "Future focused",
        "Leadership",
        "Creativity",
        "Time Management",
        "Persistence",
        "Turning ideas into companies",
        "Long-term thinking",
      ],
      achievements: [
        {
          achievement: "53rd Richest person in the world - Forbes (2018)",
          description: "",
        },
        {
          achievement:
            "21st on the Forbes list of the world's Most Powerful people (2016)",
          description: "",
        },
        {
          achievement: "IEEE Honorary Membership",
          description:
            "Given to the people who have rendered meritorious service to humanity in the IEEE's designated fields of interest.",
        },
        {
          achievement: "Businessperson of The Year by Fortune Magazine (2013)",
          description: "",
        },
        {
          achievement: "FAI Gold Space Medal (2010)",
          description:
            "One of the highest honors in the aerospace industry shared with prominent personalities like Neil Armstrong and John Glenn.",
        },
        {
          achievement:
            "Honorary Doctorate in Design from the Art Center College of Design",
          description: "",
        },
        {
          achievement:
            "Honorary Doctorate (DUniv) in Aerospace Engineering from the university of Surrey.",
          description: "",
        },
        {
          achievement:
            "Honorary Doctorate of Engineering and Technology from Yale University",
          description: "",
        },
      ],
      interests: [
        "Physics",
        "Alternative Energy",
        "Sustainability",
        "Space Engineering",
        "Philanthrophy",
        "Reading",
        "Twitter",
        "Video Games",
        "Extraterrestrial Life",
        "AI",
      ],
    },
    tips: [
      {
        name: "CV",
        start:
          "Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself. \n Tailor the CV according to job you’re applying for. There is no ‘one size fits all’ CV – so always adapt it before applying to a job. \n Tip: Use Action verbs to demonstrate your experience. Examples include: “applied”, “improved”, “implemented” etc.",
        image:
          "Your photo should be professional. It’s better to send a CV without a photo, that with one that makes you seem unserious.",
        aboutMe:
          "Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in. \nDon’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.",
        workExperience:
          "Write your previous job experience and if you’re currently working, your current job titles. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.",
        dates:
          "Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last.",
        education:
          "Education is an important section – but be sure to select only what is relevant to the job you’re applying for. Write about your university degrees, relevant courses and if you have any publications, but skip the high and elementary school.",
        skills:
          "Showcase your tech stack . List the stack under every previous project you have worked on, or showcase your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you have worked on. Another way is to showcase your projects on GitHub.",
        contact:
          "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you have proof of your previous job experiences online, link that too.",
        language:
          "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
        informalEducation:
          "Don’t be afraid to include a “Informal Education” section, where you can list all the courses, podcasts and webinars that you used to teach yourself about software development. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
      },
      {
        name: "Linkedin",
        about:
          "Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest. \n Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. \nUse the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you.\nDon’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly.",
        workExperience:
          "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. \nDon’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. \nTip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
        education:
          "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
        activity:
          "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.\nPut in the skills you are most experienced in, so you can be endorsed from other people.\nTip: Ask friends and coworkers to endorse you.",
        interests:
          "List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award from a hackaton.",
      },
      {
        name: "Laika",
        email: "Tip: Make sure you leave an email that you check regularly",
        socialMedia:
          "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
        useFor:
          "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
        industry:
          "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).",
        expertise:
          "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
        technologies:
          "*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.",
        experience:
          "Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
        salary:
          "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.",
        jobPlan: "*You can choose multiple choices for your desired job plan",
        locations: "*You can choose out of four locations, or multiple",
        jobType: "*You can choose between a job in office, remote, or both.",
        jobTitle: "*Let the companies know what is your current job title.",
        opportunity:
          "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
        experienceLevel:
          "*Please be honest when selecting the level of your experience",
        education:
          "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      },
    ],
  },
  {
    name: "Data Science",
    CV: {
      basicInfo: {
        name: "Aleksandra Janakievska",
        titles: "Data Scientist",
        goals:
          "Highly accurate and experienced Data Scientist adept at collecting, analyzing and interpreting large datasets, developing developing new forecasting models, and performing data management tasks.",
      },
      image: require(`../img/cv-images/aleksandra.jpg`),
      contactInfo: {
        mail: "aleksandraxx@wearelaika.com",
        phone: "xxxxxxxxx",
        location: "",
        twitter: "",
        linkedin: "",
      },
      workExperience: [
        {
          id: uuid(),
          position: "Data Scientist",
          company: "Rocket Corp",
          period: {
            startMonth: "11",
            startYear: "2019",
            endMonth: "",
            endYear: "",
            present: true,
            location: "Skopje",
          },
          aboutJob: "Achievemenets/Tasks",
          jobDescription: [
            "Collecting, analyzing and interpeting raw data from various websites",
            "Collaborating with the Operations and Technology Department on the development of new automated data management/analysis software which increases the overall productivity and cut unnecessary costs",
            "Maintaining and managing company's MS SQL server",
          ],
        },
        {
          id: uuid(),
          position: "Data Science Intern",
          company: "Random Co.",
          period: {
            startMonth: "07",
            startYear: "2019",
            endMonth: "10",
            endYear: "2019",
            present: false,
            location: "Skopje",
          },
          aboutJob: "Achiemenets/Tasks",
          jobDescription: [
            "Reported actionable, statistical and analytical insights to executives for effective strategic positioning in the market place",
            "Shadowed data scientist and assist in developing algorithms for predictive modeling",
            "Analyzed and processed sophisticated data sets using SAS, MYSQL and Excel",
            "Wrote python scripts to automate everyday tasks",
          ],
        },
      ],
      education: [
        {
          id: uuid(),
          study: "Data Science Academy",
          institution: "Brainster",
          period: {
            startMonth: "01",
            startYear: "2019",
            endMonth: "01",
            endYear: "2020",
            present: false,
            location: "Skopje",
          },
          aboutEducation: "",
          educationDescription: [],
        },
        {
          id: uuid(),
          study: "Financial management",
          institution:
            'Faculty of Economy, University "St. Cyril and Methodius"',
          period: {
            startMonth: "",
            startYear: "",
            endMonth: "",
            endYear: "",
            present: false,
            location: "",
          },
          aboutEducation: "",
          educationDescription: [],
        },
      ],
      dataScienceSkills: [
        {
          skill: "Python",
          level: 4,
        },
        {
          skill: "MySQL",
          level: 4,
        },
        {
          skill: "PHP",
          level: 3,
        },
        {
          skill: "R",
          level: 3,
        },
        {
          skill: "C",
          level: 3,
        },
      ],
      skills: [],
      certificates: ["Data Analysis", "Machine Learning"],
      achievements: [
        {
          achievement:
            "The Impact of Targeted Data Management Training for Field Research Projects (06/2019)",
          description: "",
        },
      ],
      languages: [
        {
          language: "English",
          level: 4,
        },
      ],
      informalEducation: [
        "Artificial Intelligence Webinar",
        "Business Analytics Course",
      ],
    },
    tips: [
      {
        name: "CV",
        start:
          "Write your resume in the language that you would use at your workplace. \nKeep it brief\nIt might require more work and research, but customize your CV according to the position you are applying for. Add small details in some places in accordance to the job description.\n Tip: Speak in the third person, in bullet form. Don’t write long sentences, try to go straight to the point. Try to incorporate the answers to these questions: What did they commend me for? Which technologies and tools did I use? Did I implement a new idea?\n Order: Start with the skills and recent job positions. Languages and other qualifications should come after that. If you need space, leave out your personal interests, or at least use a smaller font for them.",
        image:
          "Put a photo made with a good camera. It’s better to send a CV without a photo, if you were planning on cropping yourself from a group photo from a dinner with friends, or a selfie in you room.",
        aboutMe:
          "Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in. \nDon’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.",
        workExperience:
          "Write your previous job experience, and if you’re currently working, your current job title. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.",
        projects:
          "Immediately should be your Projects/Publications section. In the tech industry, the focus should be on what you have created. Include data analysis projects, machine learning projects, and if possible, published scientific articles or tutorials.\nPick projects with relevance and connection to the job you’re applying for. They should demonstrate your technical skills and how they are applicable to solving real problems.",
        dates:
          "Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away. Describe every job title with a few words about your most relevant experiences connected to the title you’re applying for.",
        education:
          "Let the recruiter know about your education , but only write the important parts – skip the high school and elementary, stick to the university degrees and courses relevant to the job you’re applying for.",
        skills:
          "Be specific about the skills, tech and tools you used, and what your role was if you’re listing group projects. Specify coding languages, libraries etc.\n Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited, so don’t waste t on soft skills like leadership or communication.",
        contact:
          "Include your LinkedIn profile link, but don’t just copy and paste the whole profile URL, shorten it.\nAdd a GitHub link or personal profile link to your contact information, and make it clickable. You’re applying for data science jobs, so most employers are going to look at your portfolio to see what kinds of projects you’re working on.\nEmail, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.",
        language:
          "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
        informalEducation:
          "Don’t be afraid to include a “Informal Education” section, where you can list all the courses, podcasts and webinars that you used to teach yourself about software development. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
      },
      {
        name: "Linkedin",
        about:
          "Make sure that your title matches your skills. E.g., if you’re an entry level Data Scientist, don’t say that you’re a Data Science Expert. Skip the abbreviations and titles – keep it short and modest. \n Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. \nUse the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you.\nDon’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly.",
        workExperience:
          "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc.\nDon’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. It serves as proof to your work ethics and adaptability.\nTip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
        education:
          "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Digital Marketing Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
        activity:
          "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.\nPut in the skills you are most experienced in, so you can be endorsed from other people.\nTip: Ask friends and coworkers to endorse you.",
        interests:
          "List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award from a hackaton.",
      },
      {
        name: "Laika",
        email: "Tip: Make sure you leave an email that you check regularly",
        socialMedia:
          "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
        useFor:
          "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
        industry:
          "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).",
        expertise:
          "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
        technologies:
          "*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.",
        experience:
          "*Please be honest when selecting the level of your experience",
        salary:
          "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.",
        jobPlan: "*You can choose multiple choices for your desired job plan",
        locations: "*You can choose out of four locations, or multiple",
        jobType: "*You can choose between a job in office, remote, or both.",
        jobTitle: "*Let the companies know what is your current job title.",
        opportunity:
          "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
        experienceLevel:
          "Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
        education:
          "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      },
    ],
  },
  {
    name: "Digital Marketing",
    CV: {
      basicInfo: {
        name: "Stefanija Tenekedjieva",
        titles: "Digital Marketer",
        goals:
          "Fascinated by the power of communication and media. Quick learner. Endlessly curious and keen to know more.",
      },
      image: require(`../img/cv-images/stefanija.jpg`),
      contactInfo: {
        mail: "stefanija.tenekedjieva@gmail.com",
        phone: "Phone Number",
        location: "",
        twitter: "",
        linkedin: "",
      },
      workExperience: [
        {
          id: uuid(),
          position: "Digital Marketer",
          company: "Laika",
          period: {
            startMonth: "07",
            startYear: "2019",
            endMonth: "",
            endYear: "",
            present: true,
            location: "Skopje, Macedonia",
          },
          aboutJob: "Achiemenets/Tasks",
          jobDescription: [
            "content writing",
            "social media advertising",
            "lead generation",
            "conversion rate optimisation",
          ],
        },
        {
          id: uuid(),
          position: "Project coordinator",
          company: "Radio MOF",
          period: {
            startMonth: "12",
            startYear: "2017",
            endMonth: "02",
            endYear: "2019",
            present: false,
            location: "Skopje, Macedonia",
          },
          aboutJob: "Achiemenets/Tasks",
          jobDescription: [
            "Editing, writing, planning and reporting for the projects of radio mof",
            "Maintaining social media profiles, web content and statistics of www.radiomof.mk through Google Analytics",
            "Editing and proofreading of content on www.radiomof.mk",
          ],
        },
        {
          id: uuid(),
          position: "Journalist",
          company: "Radio MOF",
          period: {
            startMonth: "09",
            startYear: "2015",
            endMonth: "12",
            endYear: "2017",
            present: false,
            location: "Skopje, Macedonia",
          },
          aboutJob: "Achiemenets/Tasks",
          jobDescription: [
            "Content writing and reporting for Radio MOF",
            "Reports and articles for radios shows",
            "Hosting trainings for Civil and Digital Journalism",
          ],
        },
      ],
      education: [
        {
          id: uuid(),
          study: "Education",
          institution: "Brainster Digital Marketing Academy",
          period: {
            startMonth: "04",
            startYear: "2019",
            endMonth: "09",
            endYear: "2019",
            present: false,
            location: "",
          },
          aboutEducation: "Courses",
          educationDescription: [
            "Integrated Marketing Comunication",
            "Unpaid & Paid Social Media",
            "Funnel Marketing",
            "Sales",
            "Lead Generation",
            "Google Ads",
            "Google Analytics",
            "Growth Hacking",
            "Segmentation",
            "SEO",
          ],
        },
      ],
      skills: [
        "Google Ads",
        "Facebook Ads Manager",
        "Google Analytics",
        "Google Data Studio",
        "Wordpress",
        "Canva",
        "Adobe Premiere",
        "Content Writing",
      ],
      achievements: [
        {
          achievement:
            "First Award for Professional reporting of the refugee crisis in 2017 by UNHCR and MYLA",
          description: "",
        },
        {
          achievement:
            "Third Award for Best journalistic story from the Macedonian Council of Ethics in Media",
          description: "",
        },
      ],
      languages: [
        {
          language: "English",
          level: 4,
        },
      ],
    },
    tips: [
      {
        name: "CV",
        start:
          "Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.\nDo your research in advance to create a value proposition relevant to the company you’re applying to.\nTip: Highlight the key achievements you have presented on your CV so the hiring manager can catch them very quickly.",
        image:
          "Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than a photo that makes you seem unprofessional.",
        aboutMe:
          "Know your unique value proposition and communicate it effectively. You need a personal tagline that will help you stand out from everyone else. This line should be the first impression the hiring manager will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative and say why they should hire you to handle their content.",
        workExperience:
          "List the job experiences that are relevant to the position you’re applying for. If you’re currently working, your current job titles. Explain your responsibilities and projects and list the strategies and projects you created or worked on.\nTailor your CV to the company and position you’re applying for. Highlight the keywords from the job specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such as ‘’Conversion, bounce rate and Google Analytics’’.\nTalk about campaigns you worked on, the budget you had, how it benefited the company etc. This will help recruiters learn how you could benefit them based on your past experience.",
        dates:
          "Dates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. Enable the reader to see what he needs to about your experience right away. Describe every job title with a few words about your most relevant experiences connected to the title you’re applying for",
        education:
          "Under education, list only the relevant studies and courses , like university degree or Digital Marketing Academy. Don’t write where you went to high school.",
        skills:
          "Analyze what your key skills are. Make sure to list the skills you can shine in from day one.\nShowcase all the tools and technologies you know how to use . Everything that’s useful to a marketer: from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible.",
        contact:
          "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.",
        language:
          "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
        informalEducation:
          "Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
      },
      {
        name: "Linkedin",
        about:
          "Make sure that your title matches your skills. E.g., if you’re an entry level PPC specialist, don’t say that you’re a PPC Expert. Skip the abbreviations and titles – keep it short and modest. \n Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. \nUse the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you.\nDon’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly.",
        workExperience:
          "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. \nList the experiences that aren’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. \nTip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
        education:
          "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
        activity:
          "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.\nPut in the skills you are most experienced in, so you can be endorsed from other people.\nTip: Ask friends and coworkers to endorse you.",
        interests:
          "List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award from a hackaton.",
      },
      {
        name: "Laika",
        email: "Tip: Make sure you leave an email that you check regularly",
        socialMedia:
          "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
        useFor:
          "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
        industry:
          "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).",
        expertise:
          "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
        technologies:
          "*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.",
        experience:
          "*Please be honest when selecting the level of your experience",
        salary:
          "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.",
        jobPlan: "*You can choose multiple choices for your desired job plan",
        locations: "*You can choose out of four locations, or multiple",
        jobType: "*You can choose between a job in office, remote, or both.",
        jobTitle: "*Let the companies know what is your current job title.",
        opportunity:
          "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
        experienceLevel:
          "Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
        education:
          "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      },
    ],
  },
  {
    name: "Design",
    CV: {
      basicInfo: {
        name: "KIRIL NIKOLOVSKI",
        titles: "GRAPHIC DESIGNER",
        goals:
          "Graphic Designer with expertise in branding and logo design, packing design, typography, creative direction and illustration. Oriented into helping small businesses realize their unique vision.",
      },
      // image: require(''),
      contactInfo: {
        mail: "kiril.nikolovskixx@gmail.com",
        phone: "xxxxxxxx",
        location: "Skopje, Macedonia",
        twitter: "",
        linkedin: "linkedin.com/in/kiril-nikolovski",
      },
      workExperience: [
        {
          id: uuid(),
          position: "Junior Graphic Designer",
          company: "Brainster.Co, Skopje.",
          period: {
            startMonth: "02",
            startYear: "2019",
            endMonth: "",
            endYear: "",
            present: true,
            location: "",
          },
          aboutJob: "Achiemenets/Tasks",
          jobDescription: [
            "Creating visual concepts to communicate ideas that inspire, inform and captivate consumers. Developing overall layout and production design for ads, brochures, magazines and corporate digital marketing content.",
          ],
        },
        {
          id: uuid(),
          position: "Freelance Graphic Designer",
          company: "Upwork",
          period: {
            startMonth: "",
            startYear: "2016",
            endMonth: "",
            endYear: "2019",
            present: false,
            location: "",
          },
          aboutJob: "Achiemenets/Tasks",
          jobDescription: [
            "Working with international clients and helping them to get their ideas out in a workable way.",
            "Conceptualizing visuals based on their requirements, Shaping the visual aspects of brand identities, product packingng, book covers, magazines, brochures, posters and many more.",
          ],
        },
      ],
      education: [
        {
          id: uuid(),
          study: "",
          institution: "Brainster Academy of Design",
          period: {
            startMonth: "",
            startYear: "2018",
            endMonth: "",
            endYear: "2019",
            present: false,
            location: "",
          },
          aboutEducation: "",
          educationDescription: [],
        },
        {
          id: uuid(),
          study: "",
          institution:
            "Ss. Cyril and Methodious University Faculty of Mechanical Engineering Industrial Design",
          period: {
            startMonth: "",
            startYear: "2016",
            endMonth: "",
            endYear: "2019",
            present: false,
            location: "",
          },
          aboutEducation: "",
          educationDescription: [],
        },
      ],
      skills: [
        "Adobe Photoshop",
        "Adobe Illustator",
        "Adobe inDesign",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Adobe Xd",
        "MS Office",
        "SolidWorks",
      ],
      languages: [],
    },
    tips: [
      {
        name: "CV",
        start:
          "Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.\nOne CV isn’t suitable for every job position. Adapt your CV for the job position you’re applying for.\nTemplates aren’t suitable for a designer, except if you are applying to a job call that explicitly wants that format.\nMake it just one page, and don’t write all the projects you’ve worked on – only the ones relevant to the position.\nAdvice: This builder is a great start to help you with the content of the CV, but try making it in Photoshop or Illustrator.",
        image:
          "Put a photo in a circle frame. It should be professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than with one that makes you seem unprofessional.",
        aboutMe:
          "Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in. \nDon’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.",
        workExperience:
          "Describe every job experience with a few words about your most relevant responsibilities and projects connected to the title you’re applying for.",
        dates:
          "Dates are a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). First write your most recent experience, and the oldest ones last. We want to enable the reader to see what he needs to about your experience right away.",
        education:
          "List relevant education , including workshops or lectures you have visited. If you have a bachelor in Sports, and now you are applying as a designer because you finished a course, the course should be the highest in your “education” section. Don’t put in high and elementary school.",
        skills:
          "List all the skills, tools and technologies that you know well.",
        contact:
          "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.\nLeave a link to your LinkedIn profile, or Behance/Dribbble/WiX. Make sure it’s clickable, and shorten it.",
        language:
          "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
        informalEducation:
          "Don’t be afraid to include a “Informal Education” section, where you can list all the courses, podcasts and webinars that you used to teach yourself about software development. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
      },
      {
        name: "Linkedin",
        about:
          "Make sure that your title matches your skills. E.g., if you only finished an academy or course, don’t say you are a Graphic Design Expert. Skip the abbreviations and titles – keep it short and modest.\n Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. \nUse the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you.\nDon’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly.",
        workExperience:
          "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc.\nList experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability.",
        education:
          "Under education, the formal and non-formal education relevant to your current title. For example, if you put Brainster Graphic Design Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
        activity:
          "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.\nPut in the skills you are most experienced in, so you can be endorsed from other people.\nTip: Ask friends and coworkers to endorse you.",
        interests:
          "List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award from a hackaton.",
      },
      {
        name: "Laika",
        email: "Tip: Make sure you leave an email that you check regularly",
        socialMedia:
          "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Behance, Dribbble, your personal website etc.)",
        useFor:
          "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
        industry:
          "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).",
        expertise:
          "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
        technologies:
          "*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.",
        experience:
          "*Please be honest when selecting the level of your experience",
        salary:
          "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.",
        jobPlan: "*You can choose multiple choices for your desired job plan",
        locations: "*You can choose out of four locations, or multiple",
        jobType: "*You can choose between a job in office, remote, or both.",
        jobTitle: "*Let the companies know what is your current job title.",
        opportunity:
          "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
        experienceLevel:
          "Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
        education:
          "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      },
    ],
  },
];

export const db = {
  basicInfo: {
    name: "",
    titles: "",
    goals: "",
  },
  image: "",
  contactInfo: {
    mail: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    twitter: "",
  },
  workExperience: [
    {
      id: uuid(),
      position: "",
      company: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      present: false,
      location: "",
      aboutJob: "",
      jobDescription: [
        {
          id: uuid(),
          accomplishment: "",
        },
        {
          id: uuid(),
          accomplishment: "",
        },
        {
          id: uuid(),
          accomplishment: "",
        },
      ],
    },
  ],
  education: [
    {
      id: uuid(),
      degree: "",
      university: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      present: false,
      location: "",
      courses: "",
      educationDescription: [
        {
          id: uuid(),
          thingLearned: "",
        },
        {
          id: uuid(),
          thingLearned: "",
        },
        {
          id: uuid(),
          thingLearned: "",
        },
      ],
    },
  ],
  languages: [
    {
      id: uuid(),
      language: "English",
      level: "5",
    },
    {
      id: uuid(),
      language: "",
      level: "3",
    },
  ],
  informalEducation: [
    {
      id: uuid(),
      education: "",
    },
    {
      id: uuid(),
      education: "",
    },
  ],
  skills: [
    { id: uuid(), skill: "Skill 1", level: 5 },
    { id: uuid(), skill: "Skill 2", level: 5 },
    { id: uuid(), skill: "Skill 3", level: 4 },
    { id: uuid(), skill: "Skill 4", level: 3 },
    { id: uuid(), skill: "Skill 5", level: 5 },
  ],
  achievements: [
    {
      id: uuid(),
      achievement: "",
      description: "",
    },
    {
      id: uuid(),
      achievement: "",
      description: "",
    },
  ],
  interests: ["", "", ""],
};

export const tips = {
  "web-development": {
    cv: {
      intro:
        "Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.",
      image:
        "Your photo should be professional. It’s better to send a CV without a photo, that with one that makes you seem unserious.",
      about:
        "Tailor the CV according to job you’re applying for. There is no ‘one size fits all’ CV – so always adapt it before applying to a job. Write a short intro that truly represents you – not cheesy quotes, but something you truly believe in. Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary.",
      workExperience:
        "Write your previous job experience and if you’re currently working, your current job titles. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.\nDates – a time frame in which you have been on a certain job title. If you are still working there, leave a hyphen ( - ). Leave your most recent experience first, and the oldest ones last. Tip: Use Action verbs to demonstrate your experience. Examples include: “applied”, “improved”, “implemented” etc.",
      education:
        "Education is an important section – but be sure to select only what is relevant to the job you’re applying for. Write about your university degrees, relevant courses and if you have any publications, but skip the high and elementary school. Showcase your tech stack. List the stack under every previous project you have worked on, or showcase your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you have worked on. Another way is to showcase your projects on GitHub. Use numbers. If you helped a website scale, put a metric in there. Don’t be afraid to include a “Informal Education” section, where you can list all the courses, podcasts and webinars that you used to teach yourself about software development. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
      contactInfo:
        "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you have proof of your previous job experiences online, link that too.",
      skills: "List all the skills, tools and technologies that you know well.",
      languages:
        "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
    },
    linkedin: {
      about:
        "Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest. Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you. Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly. Put in the skills you are most experienced in, so you can be endorsed from other people. Tip: Ask friends and coworkers to endorse you.",
      experience:
        "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. Tip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
      education:
        "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
      interests:
        "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.",
    },
    wearelaika: {
      email: "Tip: Make sure you leave an email that you check regularly",
      links:
        "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
      whatFor:
        "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
      industry:
        "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).\n*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
      experience:
        "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.\n*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.\n*Please be honest when selecting the level of your experience.\n Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
      education:
        "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      salary:
        "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.\n*You can choose multiple choices for your desired job plan",
      location: "*You can choose out of four locations, or multiple",
      jobType: "*You can choose between a job in office, remote, or both.",
      jobTitle: "*Let the companies know what is your current job title.",
      motivation:
        "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
    },
  },
  "data-science": {
    cv: {
      intro:
        "Write your resume in the language that you would use at your workplace.",
      image:
        "Put a photo made with a good camera. It’s better to send a CV without a photo, if you were planning on cropping yourself from a group photo from a dinner with friends, or a selfie in you room.",
      about: "",
      workExperience:
        "Write your previous job experience, and if you’re currently working, your current job title. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was.\nImmediately should be your Projects/Publications section. In the tech industry, the focus should be on what you have created. Include data analysis projects, machine learning projects, and if possible, published scientific articles or tutorials.\nPick projects with relevance and connection to the job you’re applying for. They should demonstrate your technical skills and how they are applicable to solving real problems.\nTip: Speak in the third person, in bullet form. Don’t write long sentences, try to go straight to the point.\nTry to incorporate the answers to these questions: What did they commend me for? Which technologies and tools did I use? Did I implement a new idea?",
      education:
        "Let the recruiter know about your education, but only write the important parts – skip the high school and elementary, stick to the university degrees and courses relevant to the job you’re applying for.",
      informalEducation:
        "Don’t be afraid to include a “Informal education” where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
      contactInfo:
        "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.\nInclude your LinkedIn profile link, but don’t just copy and paste the whole profile URL, shorten it.\nAdd a GitHub link or personal profile link to your contact information, and make it clickable. You’re applying for data science jobs, so most employers are going to look at your portfolio to see what kinds of projects you’re working on.",
      languages:
        "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
      skills:
        "Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited, so don’t waste t on soft skills like leadership or communication.",
    },
    linkedin: {
      title:
        "Make sure that your title matches your skills. E.g., if you’re an entry level PHP developer, don’t say that you’re a PHP Expert. Skip the abbreviations and titles – keep it short and modest.",
      about:
        "Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you. Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly. Put in the skills you are most experienced in, so you can be endorsed from other people. Tip: Ask friends and coworkers to endorse you.",
      experience:
        "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. Tip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
      education:
        "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
      interests:
        "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.",
    },
    wearelaika: {
      email: "Tip: Make sure you leave an email that you check regularly",
      links:
        "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
      whatFor:
        "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
      industry:
        "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).\n*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
      experience:
        "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.\n*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.\n*Please be honest when selecting the level of your experience.\n Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
      education:
        "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      salary:
        "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.\n*You can choose multiple choices for your desired job plan",
      location: "*You can choose out of four locations, or multiple",
      jobType: "*You can choose between a job in office, remote, or both.",
      jobTitle: "*Let the companies know what is your current job title.",
      motivation:
        "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
    },
  },
  "digital-marketing": {
    cv: {
      intro:
        "Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.",
      image:
        "Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than a photo that makes you seem unprofessional.",
      about:
        "Know your unique value proposition and communicate it effectively. You need a personal tagline that will help you stand out from everyone else. This line should be the first impression the hiring manager will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative and say why they should hire you to handle their content.\nDo your research in advance to create a value proposition relevant to the company you’re applying to.",
      workExperience:
        "List the job experiences that are relevant to the position you’re applying for. If you’re currently working, your current job titles. Explain your responsibilities and projects and list the strategies and projects you created or worked on.\nTailor your CV to the company and position you’re applying for. Highlight the keywords from the job specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such as ‘’Conversion, bounce rate and Google Analytics’’.\nTalk about campaigns you worked on, the budget you had, how it benefited the company etc. This will help recruiters learn how you could benefit them based on your past experience.\nUse numbers. If you helped a social media page gain a lot of followers, put the number in. If your campaign influenced a spike in sales, write in the percentage. Also, explain how you got there too.",
      education:
        "Under education, list only the relevant studies and courses, like university degree or Digital Marketing Academy. Don’t write where you went to high school.",
      informalEducation: "",
      contactInfo:
        "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.",
      languages:
        "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
      skills:
        "Analyze what your key skills are. Make sure to list the skills you can shine in from day one.\nShowcase all the tools and technologies you know how to use. Everything that’s useful to a marketer: from Typeform and Canva, to Photoshop and Data Studio. Link campaigns you worked on If possible.",
      achievements:
        "Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
    },
    linkedin: {
      title:
        "Make sure that your title matches your skills. E.g., if you’re an entry level PPC specialist, don’t say that you’re a PPC Expert. Skip the abbreviations and titles – keep it short and modest.",
      about:
        "Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you. Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly. Put in the skills you are most experienced in, so you can be endorsed from other people. Tip: Ask friends and coworkers to endorse you.",
      experience:
        "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. Tip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
      education:
        "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
      interests:
        "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.",
    },
    wearelaika: {
      email: "Tip: Make sure you leave an email that you check regularly",
      links:
        "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
      whatFor:
        "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
      industry:
        "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).\n*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
      experience:
        "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.\n*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.\n*Please be honest when selecting the level of your experience.\n Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
      education:
        "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      salary:
        "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.\n*You can choose multiple choices for your desired job plan",
      location: "*You can choose out of four locations, or multiple",
      jobType: "*You can choose between a job in office, remote, or both.",
      jobTitle: "*Let the companies know what is your current job title.",
      motivation:
        "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
    },
  },
  design: {
    cv: {
      intro:
        "Write your resume in the language that you would use at your workplace. This is a great chance to show the company’s representatives that you can express yourself.",
      image:
        "Put a photo that looks professional – made with a good camera and showing you in a warm light. It’s better to send a CV without a photo, than a photo that makes you seem unprofessional.",
      about:
        "Know your unique value proposition and communicate it effectively. You need a personal tagline that will help you stand out from everyone else. This line should be the first impression the hiring manager will get from you. E.g. if you’re a Content Writer, don’t just say ‘’I’m a great content writer’’. Be creative and say why they should hire you to handle their content.\nDo your research in advance to create a value proposition relevant to the company you’re applying to.",
      workExperience:
        "List the job experiences that are relevant to the position you’re applying for. If you’re currently working, your current job titles. Explain your responsibilities and projects and list the strategies and projects you created or worked on.\nTailor your CV to the company and position you’re applying for. Highlight the keywords from the job specification on your CV. For example, if you’re applying for an e-commerce role, include keywords such as ‘’Conversion, bounce rate and Google Analytics’’.\nTalk about campaigns you worked on, the budget you had, how it benefited the company etc. This will help recruiters learn how you could benefit them based on your past experience.\nUse numbers. If you helped a social media page gain a lot of followers, put the number in. If your campaign influenced a spike in sales, write in the percentage. Also, explain how you got there too.",
      education:
        "Under education, list only the relevant studies and courses, like university degree or Digital Marketing Academy. Don’t write where you went to high school.",
      informalEducation: "",
      contactInfo:
        "Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. Don’t leave your home address.",
      languages:
        "All languages, even those you don’t speak fluently, can help you get a certain position. It’s good to use expressions such as “fluent in”, “speaking level of”, “native language” and similar.",
      skills: "List all the skills, tools and technologies that you know well.",
      achievements:
        "Don’t be afraid to include a “Self-Study” where you can list all the courses, conferences, workshops and webinars that you used to teach yourself about digital marketing. Don’t include everything – just the education that is relevant and necessary for the position you are applying for.",
    },
    linkedin: {
      title:
        "Make sure that your title matches your skills. E.g., if you’re an entry level PPC specialist, don’t say that you’re a PPC Expert. Skip the abbreviations and titles – keep it short and modest.",
      about:
        "Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you. Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly. Put in the skills you are most experienced in, so you can be endorsed from other people. Tip: Ask friends and coworkers to endorse you.",
      experience:
        "Explain every work experience you’ve had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. Don’t be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. Tip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.",
      education:
        "Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education.",
      interests:
        "Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.",
    },
    wearelaika: {
      email: "Tip: Make sure you leave an email that you check regularly",
      links:
        "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.)",
      whatFor:
        "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run.",
      industry:
        "*You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support).\n*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.",
      experience:
        "*You can pick up to 5 options in the Expertise field. Make sure your choices are realistic and they truly reflect the skills you are most confident in.\n*Choose up to 8 technologies, but make sure you really know their ins and outs. The matching algorithm connects you to companies whose job openings have precise technologies listed.\n*Please be honest when selecting the level of your experience.\n Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have.",
      education:
        "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge.",
      salary:
        "*Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience.\n*You can choose multiple choices for your desired job plan",
      location: "*You can choose out of four locations, or multiple",
      jobType: "*You can choose between a job in office, remote, or both.",
      jobTitle: "*Let the companies know what is your current job title.",
      motivation:
        "*Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees.",
    },
  },
};

const categories = [
  {
    id: 1,
    title: "Web Development",
    url: "web-development",
  },
  {
    id: 2,
    title: "Data Science",
    url: "data-science",
  },
  {
    id: 3,
    title: "Digital Marketing",
    url: "digital-marketing",
  },
  {
    id: 4,
    title: "Design",
    url: "design",
  },
];

export default categories;
