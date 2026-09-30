export interface FAQ {
    question: string;
    answer: string;
}

interface LocationFAQSource {
    name: string;
    services: string[];
    techStack: string[];
    startingPrice: string;
    timeline: string;
    highlights: { title: string; description: string }[];
}

// Answers draw on each city's own data so pages differ in substance, not just in the city name.
// Only claims the site can stand behind: price, timeline, process, support and deliverables.
export function generateLocationFAQs(location: LocationFAQSource): FAQ[] {
    const { name, services, techStack, startingPrice, timeline, highlights } = location;

    return [
        {
            question: `How much does AI app development cost in ${name}?`,
            answer: `Projects for ${name} businesses start at ${startingPrice} at a fixed price that we agree on the free discovery call, before any work begins. The final price depends on scope, so you know the exact cost upfront.`,
        },
        {
            question: `How long does it take to build an AI app for ${name}?`,
            answer: `A focused first version is delivered in ${timeline}: design and planning in days 1–3, build and testing in days 4–12, and launch in days 13–15. Larger scopes take longer, and we say so on the discovery call.`,
        },
        {
            question: `What can you build for ${name} businesses?`,
            answer: `For ${name}, our most common projects are: ${services.slice(0, 4).join('; ')}. We also build custom web, mobile and AI products outside this list.`,
        },
        {
            question: `What do you take into account when building for ${name}?`,
            answer: highlights.slice(0, 3).map((h) => `${h.title}: ${h.description}`).join(' '),
        },
        {
            question: `What technology do you use for ${name} projects?`,
            answer: `Typical projects use ${techStack.join(', ')}. We pick the simplest stack that will scale with your product, and you receive the full source code and documentation at launch.`,
        },
        {
            question: `Do you have a team based in ${name}?`,
            answer: `We work remotely with clients in ${name} and worldwide. Discovery, design reviews and daily progress updates all happen online, so you can follow the build from wherever you are.`,
        },
        {
            question: `Can you help a ${name} startup build an MVP?`,
            answer: `Yes — building a focused first version that you can test with real users is what we specialise in. We scope it to the core features on the discovery call so it can be live in ${timeline}.`,
        },
        {
            question: `What support do you provide after launch?`,
            answer: `Every project includes 30 days of post-launch support, a training session, and the source code and documentation. After that you can keep working with us on new features or run the product yourself.`,
        },
        {
            question: `How do I start a project in ${name}?`,
            answer: `Book a free 30-minute consultation. We discuss your idea and users, agree on scope and price, and outline the ${timeline} plan — with no commitment.`,
        },
    ];
}
