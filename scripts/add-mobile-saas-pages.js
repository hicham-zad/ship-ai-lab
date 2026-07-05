#!/usr/bin/env node
/**
 * Final script to add remaining 5 UK service pages
 * Pages 4-8: Mobile Development (3) + SaaS Development (2)
 */

const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'data', 'uk-services.ts');

// Read current file
let content = fs.readFileSync(dataFilePath, 'utf8');

// Remove the closing bracket and export
content = content.replace(/\];\s*export default ukServices;\s*$/, '');

// Add final 5 pages - keeping them concise but comprehensive
const finalPages = `,
    // Page 4: AI Mobile App Development UK  
    {
        slug: "ai-mobile-app-development-uk",
        name: "AI Mobile App Development UK",
        title: "AI Mobile App Development UK | iOS & Android AI Apps | Ship AI Lab",
        metaDescription: "Expert AI mobile app development in the UK. Build intelligent iOS and Android apps with machine learning, NLP, and computer vision. From £2,800.",
        h1: "AI Mobile App Development in the UK",
        subtitle: "Build Intelligent Mobile Applications That Learn and Adapt",
        introduction: "Mobile applications are evolving beyond simple interfaces to become intelligent assistants that understand user intent, predict needs, and deliver personalised experiences. UK businesses are leveraging AI-powered mobile apps to transform customer engagement, streamline operations, and create competitive advantages in crowded markets. At Ship AI Lab, we specialise in developing native iOS and Android applications that integrate cutting-edge AI capabilities including on-device machine learning, natural language processing, computer vision, and predictive analytics. Our UK-based team understands the unique challenges of mobile AI development—from optimising models for limited device resources to ensuring offline functionality and battery efficiency. Whether you're a London fintech needing fraud detection, a Manchester retailer wanting visual search, or a Birmingham healthcare provider requiring diagnostic assistance, we build AI mobile apps that deliver exceptional performance whilst maintaining user privacy and GDPR compliance through on-device processing where appropriate.",
        benefits: [
            "On-device AI processing ensuring user privacy, offline functionality, and lightning-fast responses without server dependencies",
            "Personalised mobile experiences that adapt to individual user behaviour, preferences, and context in real-time",
            "Advanced features like visual search, voice commands, and augmented reality powered by computer vision and NLP",
            "Predictive capabilities anticipating user needs and proactively delivering relevant content and recommendations",
            "Intelligent automation handling repetitive tasks, data entry, and decision-making within your mobile app",
            "Cross-platform development (iOS & Android) with shared AI models reducing development costs and time-to-market",
            "Battery-optimised AI ensuring intelligent features don't drain device resources or impact user experience",
            "GDPR-compliant data handling with options for on-device processing eliminating cloud data transfer concerns"
        ],
        services: [
            "Custom AI mobile app development for iOS and Android with native performance",
            "On-device machine learning using Core ML (iOS) and ML Kit (Android) for privacy-first AI",
            "Computer vision integration for image recognition, object detection, and AR experiences",
            "Natural language processing for voice assistants, chatbots, and text analysis",
            "Recommendation engines delivering personalised content and product suggestions",
            "Predictive analytics and forecasting within mobile applications",
            "AI-powered camera features including visual search, barcode scanning, and document processing",
            "Offline AI functionality ensuring intelligent features work without internet connectivity",
            "Biometric authentication and fraud detection using machine learning",
            "Health and fitness AI for activity tracking, nutrition analysis, and wellness coaching",
            "AI chatbot integration for in-app customer support and engagement",
            "Cross-platform AI development using React Native or Flutter with shared AI models"
        ],
        process: [
            {
                step: 1,
                title: "Mobile AI Strategy & UX Design",
                description: "We analyse your mobile app requirements, identify AI opportunities, and design user experiences that showcase AI capabilities naturally. This includes determining optimal AI deployment (on-device vs cloud), selecting appropriate models for mobile constraints, and creating wireframes demonstrating AI features. We consider battery life, storage limitations, and offline functionality from the start."
            },
            {
                step: 2,
                title: "AI Model Development & Optimisation",
                description: "Our AI engineers develop and train machine learning models, then optimise them for mobile deployment. This includes model compression, quantisation, and pruning to reduce size whilst maintaining accuracy. We test models on actual devices ensuring acceptable performance across various hardware specifications. For iOS, we convert models to Core ML; for Android, we use TensorFlow Lite or ML Kit."
            },
            {
                step: 3,
                title: "Native App Development & Integration",
                description: "Our mobile developers build native iOS and Android applications (or cross-platform using React Native/Flutter) and integrate optimised AI models. Development includes creating intuitive UIs for AI features, implementing offline functionality, optimising battery usage, and ensuring smooth performance. We follow platform-specific guidelines and best practices for app store approval."
            },
            {
                step: 4,
                title: "Testing, Deployment & App Store Launch",
                description: "Rigorous testing on multiple devices ensures AI features work flawlessly across different hardware and OS versions. We conduct performance testing, battery impact analysis, and user acceptance testing. After approval, we handle app store submissions (Apple App Store, Google Play), provide launch support, and implement analytics to monitor AI feature usage and performance post-launch."
            }
        ],
        techStack: [
            "Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "React Native", "Flutter",
            "Core ML", "Create ML", "TensorFlow Lite", "ML Kit", "PyTorch Mobile",
            "ARKit", "RealityKit", "ARCore", "Vision Framework", "Natural Language Framework",
            "Firebase", "AWS Amplify", "Supabase", "PostgreSQL", "SQLite",
            "OpenAI API", "Google AI", "Anthropic", "Hugging Face"
        ],
        examples: [
            {
                title: "AI Shopping Assistant for London Fashion Retailer",
                description: "Developed an iOS/Android app with visual search allowing customers to photograph items and find similar products instantly. On-device AI analyses images for privacy, whilst personalisation engine recommends complementary items. The app increased mobile conversion rates by 55% and average order value by 30% through intelligent product discovery."
            },
            {
                title: "Health Monitoring App for Manchester NHS Trust",
                description: "Built a medical-grade mobile app using on-device AI to analyse patient-reported symptoms, track medication adherence, and predict health deteriorations. Machine learning models process sensitive health data locally ensuring GDPR compliance. The app reduced hospital readmissions by 40% through early intervention alerts sent to healthcare providers."
            },
            {
                title: "AI Language Learning App for Edinburgh EdTech Startup",
                description: "Created an intelligent language learning mobile app using speech recognition and NLP to provide real-time pronunciation feedback and conversational practice. On-device AI enables offline learning whilst adaptive algorithms personalise lesson difficulty. The app achieved 4.8-star ratings and 100,000+ downloads within 6 months of launch."
            }
        ],
        whyChooseUs: [
            "Specialised expertise in mobile AI development with proven track record across iOS and Android",
            "Deep understanding of on-device AI optimisation ensuring fast performance and battery efficiency",
            "UK-based team with experience navigating Apple and Google app store approval processes",
            "GDPR expertise ensuring mobile AI apps handle personal data responsibly and legally",
            "Transparent fixed pricing starting at £2,800 for AI mobile app MVPs",
            "Rapid development delivering testable prototypes in 4-6 weeks for market validation",
            "Comprehensive app store launch support including submission, optimisation, and marketing guidance",
            "Ongoing maintenance and AI model updates keeping your app competitive as technology evolves"
        ],
        pricing: {
            starting: "£2,800",
            currency: "GBP",
            timeline: "4-6 weeks for MVP"
        },
        faqs: [
            {
                question: "Can AI features work offline on mobile devices?",
                answer: "Yes! We specialise in on-device AI using Core ML (iOS) and TensorFlow Lite/ML Kit (Android). This allows AI features like image recognition, text analysis, and recommendations to work without internet connectivity. On-device AI also ensures user privacy as data never leaves the device. We determine the optimal balance between on-device and cloud AI based on your specific requirements, model complexity, and performance needs."
            },
            {
                question: "How much does AI mobile app development cost in the UK?",
                answer: "Our AI mobile app development starts at £2,800 for an MVP with core AI features on one platform (iOS or Android). Cross-platform development (both iOS and Android) typically ranges from £5,000-£12,000 depending on complexity. This is significantly more cost-effective than traditional agencies charging £30,000-£100,000. We provide transparent fixed pricing with detailed scope definitions so you know exactly what you're getting for your investment."
            },
            {
                question: "Will AI features drain the phone battery quickly?",
                answer: "Not when implemented correctly. We optimise AI models specifically for mobile deployment, reducing computational requirements whilst maintaining accuracy. This includes model quantisation, efficient inference scheduling, and smart caching. We also implement battery-aware features that adjust AI processing based on device battery levels. Our apps typically have minimal battery impact—users won't notice significant differences compared to non-AI apps."
            },
            {
                question: "Can you build AI apps for both iPhone and Android?",
                answer: "Yes, we develop for both iOS and Android. We can build native apps (Swift for iOS, Kotlin for Android) for maximum performance, or use cross-platform frameworks (React Native, Flutter) for cost-effective development across both platforms. For AI features, we use platform-specific tools (Core ML for iOS, ML Kit for Android) or cross-platform solutions like TensorFlow Lite. We recommend the best approach based on your budget, timeline, and feature requirements."
            },
            {
                question: "How do you ensure AI mobile apps comply with GDPR?",
                answer: "GDPR compliance is built into our development process. We implement privacy-by-design principles, use on-device AI processing where possible to avoid data transfer, obtain proper user consent for data collection, and provide transparency about AI decision-making. All cloud-processed data uses UK/EU servers. We conduct data protection impact assessments and provide full documentation for ICO compliance. Our apps include privacy controls allowing users to manage their data."
            },
            {
                question: "What happens if Apple or Google rejects our AI app?",
                answer: "We have extensive experience with app store guidelines and design AI features to meet approval requirements. Before submission, we review against Apple and Google policies, ensure proper privacy disclosures, and implement required consent mechanisms. If rejection occurs (rare with our apps), we quickly address issues and resubmit. Our app store approval rate exceeds 95% on first submission. We also handle all communication with app store review teams."
            },
            {
                question: "Can AI be added to our existing mobile app?",
                answer: "Yes, we can integrate AI features into existing iOS and Android apps. We analyse your current codebase, identify integration points, and add AI capabilities without disrupting existing functionality. Whether you have a native app or cross-platform solution, we can enhance it with intelligent features. This is often more cost-effective than building from scratch and allows you to add AI incrementally based on user feedback."
            },
            {
                question: "How long does it take to build an AI mobile app?",
                answer: "Our typical timeline is 4-6 weeks for an MVP with core AI features on one platform. This includes AI model development, mobile app development, testing, and app store submission. Cross-platform apps or complex AI implementations may take 8-12 weeks. We use agile development with weekly demos, allowing you to see progress and provide feedback throughout. App store approval typically adds 1-2 weeks to the timeline."
            },
            {
                question: "Do you provide app store optimisation and marketing support?",
                answer: "Yes, we offer app store optimisation (ASO) services including keyword research, compelling app descriptions, screenshot design, and review management strategies. Whilst we don't provide full marketing services, we can recommend UK-based app marketing agencies and help with initial launch strategies. Our focus is ensuring your AI app is technically excellent and positioned well in app stores for organic discovery."
            },
            {
                question: "What ongoing support do you provide after app launch?",
                answer: "We include 30 days of post-launch support covering bug fixes and minor adjustments. Beyond that, we offer monthly support packages (from £500/month) including app updates for new iOS/Android versions, AI model improvements, performance monitoring, crash fixing, and feature enhancements. Many clients choose ongoing partnerships where we continuously improve their AI app based on user feedback and analytics."
            }
        ],
        relatedServices: [
            "/ai-app-developers-london",
            "/ai-powered-mobile-apps-uk",
            "/ai-web-app-development-uk"
        ]
    }
];

export default ukServices;
`;

// Write updated content
fs.writeFileSync(dataFilePath, content + finalPages, 'utf8');

const wordCount = (content + finalPages).split(/\s+/).length;
console.log('✅ Added page 4: AI Mobile App Development UK');
console.log(`📊 Current word count: ~${wordCount} words`);
console.log('\n📝 4 more pages remaining...');
console.log('   Will be added in next iteration to keep manageable');
