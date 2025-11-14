

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export const PRODUCTS = [
    { 
        name: 'Hydraulic Cylinders', 
        category: 'Cylinders',
        description: 'High-performance hydraulic cylinders for demanding industrial applications, offering reliability and long service life.',
        specifications: [
            { name: 'Pressure Rating', value: 'Up to 350 bar' },
            { name: 'Rod Material', value: 'Chrome-plated Precision Steel' },
            { name: 'Sealing System', value: 'High-grade Polyurethane' },
            { name: 'Temperature Range', value: '-20°C to +80°C' },
            { name: 'Bore Size', value: '40mm - 200mm' }
        ],
        image: 'https://picsum.photos/seed/hydraulic-cylinder/500/500' 
    },
    { 
        name: 'Hydraulic Pumps', 
        category: 'Pumps',
        description: 'Energy-efficient hydraulic pumps with variable displacement options, designed for low noise performance.',
        specifications: [
            { name: 'Displacement', value: 'Variable, up to 150cc/rev' },
            { name: 'Max Pressure', value: '420 bar' },
            { name: 'Efficiency', value: 'Up to 95% volumetric' },
            { name: 'Noise Level', value: '< 70 dBA at 1500 rpm' },
            { name: 'Mounting', value: 'ISO/SAE standard flanges' }
        ],
        image: 'https://picsum.photos/seed/hydraulic-pump/500/500' 
    },
    { 
        name: 'Control Valves', 
        category: 'Valves',
        description: 'Precision control valves made from corrosion-resistant materials, ready for electronic integration.',
        specifications: [
            { name: 'Control Type', value: 'Proportional / Solenoid' },
            { name: 'Flow Rate', value: 'Up to 200 LPM' },
            { name: 'Max Pressure', value: '350 bar' },
            { name: 'Material', value: 'Cast Iron / Stainless Steel' },
            { name: 'Voltage', value: '12V DC / 24V DC' }
        ],
        image: 'https://picsum.photos/seed/control-valve/500/500' 
    },
    { name: 'Adapter', size: '1/4" BSP to 2" BSP', image: 'https://picsum.photos/seed/adapter-new/500/500', category: 'Adapters', description: 'Standard hydraulic adapters for various connection needs.' },
    { name: 'ED Adapter', size: '1/4" BSP to 1" BSP', image: 'https://picsum.photos/seed/ed-adapter-new/500/500', category: 'Adapters', description: 'Elastomer seal adapters for high-pressure, leak-free connections.' },
    { name: 'Half Adapter', size: '1/4" BSP to 2" BSP', image: 'https://picsum.photos/seed/half-adapter-new/500/500', category: 'Adapters', description: 'Compact half adapters for tight space applications.' },
    { name: 'Swivel Adapter', size: '1/4" BSP to 1 1/2" BSP', image: 'https://picsum.photos/seed/swivel-adapter-new/500/500', category: 'Adapters', description: 'Swivel adapters allowing for rotational movement to prevent hose twisting.' },
    { name: 'Male Elbow', size: '1/4" BSP to 1 1/2" BSP', image: 'https://picsum.photos/seed/male-elbow-new/500/500', category: 'Adapters', description: '90-degree male elbow adapters for directional changes in hydraulic lines.' },
];

export const CONTACT_INFO = {
  phone1: '+91 98765 43210',
  phone2: '+91 81414 11746',
  email: 'info@skihydraulic.com',
  address: 'Gujarat, India',
};

export const SOCIAL_LINKS = [
    { name: 'Facebook', href: '#', icon: 'M13.437 21v-8.318H10V9.317h3.437V6.5c0-3.327 1.972-5.168 5.06-5.168 1.45 0 2.9.27 2.9.27v2.935h-1.522c-1.68 0-2.227.99-2.227 2.13v2.65h3.62l-.58 3.365h-3.04v8.318H13.437z' },
    { name: 'Twitter', href: '#', icon: 'M22.46 6c-.6.2-1.3.4-2 .5.7-.4 1.2-1 1.5-1.8-.7.4-1.4.7-2.2.8-.6-.7-1.5-1-2.5-1-2.5 0-4.5 2-4.5 4.5 0 .3 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.2 0 1.6.8 3 2 3.8-.7 0-1.3-.2-1.9-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.8 2.2 3.1 4.2 3.1-1.5 1.2-3.5 1.9-5.6 1.9-.4 0-.7 0-1.1-.1 2 1.3 4.3 2 6.9 2 8.3 0 12.8-6.9 12.8-12.8 0-.2 0-.4 0-.6.9-.6 1.6-1.4 2.2-2.3z' },
    { name: 'LinkedIn', href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z' },
];

export const TESTIMONIALS = [
    {
        quote: "SKI HYDRAULIC has been our trusted partner for over 8 years. Their hydraulic cylinders have never failed us, even in the most demanding agricultural applications. The quality and reliability are unmatched.",
        name: "Rajesh Kumar",
        title: "Operations Manager, AgriTech Solutions",
        avatarInitial: "R",
        rating: 5,
        logo: "https://picsum.photos/seed/agritech-logo/100/40"
    },
    {
        quote: "The precision and build quality of SKI HYDRAULIC components have significantly improved our production efficiency. Their technical support team is exceptional and always ready to help.",
        name: "Priya Sharma",
        title: "Chief Engineer, Industrial Dynamics",
        avatarInitial: "P",
        rating: 5,
        logo: "https://picsum.photos/seed/dynamics-logo/100/40"
    },
    {
        quote: "We've been using SKI HYDRAULIC pumps in our automotive assembly line for 5 years. Zero downtime, excellent performance, and great value for money. Highly recommended!",
        name: "Amit Patel",
        title: "Production Head, AutoMax Manufacturing",
        avatarInitial: "A",
        rating: 5,
        logo: "https://picsum.photos/seed/automax-logo/100/40"
    },
    {
        quote: "For our heavy construction equipment, reliability is non-negotiable. SKI HYDRAULIC's heavy-duty cylinders and valves have consistently performed under extreme conditions, reducing our maintenance costs significantly.",
        name: "Sanjay Singh",
        title: "Project Director, BuildWell Construction",
        avatarInitial: "S",
        rating: 5,
        logo: "https://picsum.photos/seed/buildwell-logo/100/40"
    },
    {
        quote: "The marine environment is harsh on equipment. SKI HYDRAULIC's corrosion-resistant components have proven to be durable and effective for our shipping vessel operations. Their custom solutions were a perfect fit.",
        name: "Meera Iyer",
        title: "Technical Superintendent, OceanLiners Marine",
        avatarInitial: "M",
        rating: 5,
        logo: "https://picsum.photos/seed/oceanliners-logo/100/40"
    },
    {
        quote: "In logistics, efficiency is key. The hydraulic systems from SKI HYDRAULIC in our warehouse machinery are both powerful and energy-efficient, contributing to faster and smoother operations.",
        name: "Vikram Reddy",
        title: "Warehouse Manager, SwiftLogistics",
        avatarInitial: "V",
        rating: 4,
        logo: "https://picsum.photos/seed/swiftlog-logo/100/40"
    },
    {
        quote: "As a machine tool manufacturer, the precision of our components is paramount. SKI HYDRAULIC provides us with valves and pumps that meet our exact specifications, enhancing the performance of our final products.",
        name: "Anjali Desai",
        title: "Head of Procurement, PrecisionWorks Eng.",
        avatarInitial: "A",
        rating: 5,
        logo: "https://picsum.photos/seed/precision-logo/100/40"
    }
];

export const INDUSTRIES = [
    {
        id: 'agriculture',
        name: 'Agriculture',
        icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m16.28 0h-1.28m-10.5-7.5H4.5v7.5h6.75v-7.5zM12 1.5L2.25 6l9.75 4.5 9.75-4.5L12 1.5z',
        description: 'Powering modern farming with reliable hydraulic solutions for tractors, harvesters, and irrigation systems.',
        tags: ['Tractors', 'Harvesters', 'Irrigation', 'Tillers'],
        image: 'https://picsum.photos/seed/agriculture-industry/600/400',
        keyProducts: ['Hydraulic Cylinders', 'Control Valves', 'Pumps', 'Filters'],
        projectsCompleted: 1200,
        satisfiedClients: 200
    },
    {
        id: 'industrial',
        name: 'Industrial Manufacturing',
        icon: 'M10.5 6h3m-3 0h-3m3 0v3m0-3V3M15 9a3 3 0 11-6 0 3 3 0 016 0zm3 9.75a3 3 0 11-6 0 3 3 0 016 0zm-6-3.75a3 3 0 11-6 0 3 3 0 016 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        description: 'Enabling industrial processes with robust hydraulic systems for heavy machinery and production equipment.',
        tags: ['Manufacturing', 'Automation', 'Presses', 'Conveyors'],
        image: 'https://picsum.photos/seed/industrial-industry/600/400',
        keyProducts: ['Hydraulic Pumps', 'Proportional Valves', 'Actuators', 'Power Units'],
        projectsCompleted: 2500,
        satisfiedClients: 450
    },
];

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1717386255773-1e3037c81788',
  'https://images.unsplash.com/photo-1599583863916-e06c29087f51',
  'https://images.unsplash.com/photo-1622879847332-dbfc228ce486',
  'https://images.unsplash.com/photo-1682268294152-147fab24bcdc',
  'https://images.unsplash.com/photo-1724041483764-9bcbc39ea67e',
];

export const PARTNER_LOGOS = [
  "https://picsum.photos/seed/logo1/150/60",
  "https://picsum.photos/seed/logo2/150/60",
  "https://picsum.photos/seed/logo3/150/60",
  "https://picsum.photos/seed/logo4/150/60",
  "https://picsum.photos/seed/logo5/150/60",
  "https://picsum.photos/seed/logo6/150/60",
  "https://picsum.photos/seed/logo7/150/60",
  "https://picsum.photos/seed/logo8/150/60",
];

export const COMPANY_STATS = [
  { value: 18, label: 'Years of Experience' },
  { value: 500, label: 'Happy Clients' },
  { value: 1000, label: 'Projects Completed' },
  { value: 25, label: 'Awards Won' },
];

export const QUALITY_STATS = [
  { value: 18, label: 'Years Experience', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: 99, label: 'Product Reliability', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: 100, label: 'Material Quality', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 01-.547-1.806zM15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { value: 98, label: 'Client Satisfaction', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
];

export const CERTIFICATIONS = [
  { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { name: 'ISO 14001:2015', description: 'Environmental Management' },
  { name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
];

export const QUALITY_PROCESS_STEPS = [
    { 
        title: "Raw Material Inspection",
        description: "Verifying the quality and specifications of all incoming materials.",
        icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
        points: ["Metallurgical analysis", "Dimensional checks", "Hardness testing"],
        image: "https://picsum.photos/seed/material-inspection/800/600"
    },
    { 
        title: "In-Process Quality Control",
        description: "Monitoring quality at every stage of the manufacturing process.",
        icon: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69-.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.5.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24-.42-.12-.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22-.07-.5-.12-.64l-2.11-1.65zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z",
        points: ["CNC machine tolerance checks", "Surface finish analysis", "Component assembly verification"],
        image: "https://picsum.photos/seed/in-process-control/800/600"
    },
    { 
        title: "Final Product Testing",
        description: "Rigorous testing of the final product before dispatch.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        points: ["Pressure and leak testing", "Performance and cycle testing", "Final dimensional and visual inspection"],
        image: "https://picsum.photos/seed/final-testing/800/600"
    }
];

export const FAQS = [
    {
        question: "What types of hydraulic products do you manufacture?",
        answer: "We specialize in manufacturing a wide range of hydraulic components including cylinders, pumps, control valves, and various types of adapters. Please check our products page for a comprehensive list."
    },
    {
        question: "Can you provide custom hydraulic solutions?",
        answer: "Yes, we have a dedicated engineering team that can work with you to design and manufacture custom hydraulic components tailored to your specific application and requirements."
    },
    {
        question: "What industries do you serve?",
        answer: "We serve a diverse range of industries, including agriculture, industrial manufacturing, construction, automotive, and marine. Our products are designed to perform in demanding environments."
    },
    {
        question: "What are your quality standards?",
        answer: "We adhere to stringent international quality standards, including ISO 9001:2015 for quality management. Every product undergoes a multi-stage quality control process to ensure reliability and performance."
    },
    {
        question: "How can I get a quote for a product?",
        answer: "You can request a quote by filling out the contact form on our website, sending us an email at info@skihydraulic.com, or by calling us directly. Please provide as much detail as possible about your requirements."
    }
];

export const LEADERSHIP_TEAM = [
    {
        name: "Ramesh Patel",
        title: "Founder & CEO",
        image: "https://picsum.photos/seed/ceo/200/200",
        bio: "With over 30 years of experience in the hydraulic industry, Ramesh founded SKI HYDRAULIC with a vision to deliver unmatched quality and innovation.",
        socials: { email: 'mailto:ramesh@skihydraulic.com', phone: 'tel:+919876543210', linkedin: '#' },
        skills: ["Strategic Planning", "Business Development", "Engineering Management", "Innovation"]
    },
    {
        name: "Suresh Sharma",
        title: "Head of Operations",
        image: "https://picsum.photos/seed/coo/200/200",
        bio: "Suresh oversees all manufacturing and operational processes, ensuring efficiency, quality, and timely delivery. His expertise in lean manufacturing is key to our success.",
        socials: { email: 'mailto:suresh@skihydraulic.com', phone: 'tel:+919876543211', linkedin: '#' },
        skills: ["Lean Manufacturing", "Supply Chain Mgmt.", "Quality Assurance", "Process Optimization"]
    }
];

export const MANUFACTURING_FACILITIES = [
    {
        title: "CNC Machining Unit",
        image: "https://picsum.photos/seed/cnc-facility/800/600",
        description: "Our state-of-the-art CNC machining unit is equipped with the latest technology to produce components with exceptional precision and consistency.",
        icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5V3.935m-14 0A10.003 10.003 0 0112 2a10.003 10.003 0 017.945 1.935M6 21h12M12 17.25h.008v.008H12v-.008z",
        specs: [
            { label: "Machines", value: "25+ CNC Machines" },
            { label: "Tolerance", value: "Up to ±0.005 mm" },
        ],
        features: ["Automated tool changing", "Real-time quality monitoring", "Multi-axis machining capabilities"]
    },
    {
        title: "Assembly & Testing Bay",
        image: "https://picsum.photos/seed/testing-facility/800/600",
        description: "A dedicated facility for the careful assembly of hydraulic components and rigorous testing to ensure they meet performance and reliability standards.",
        icon: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69-.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.5.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24-.42-.12-.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22-.07-.5-.12-.64l-2.11-1.65zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z",
        specs: [
            { label: "Pressure Testing", value: "Up to 500 Bar" },
            { label: "Environment", value: "Dust-controlled zone" },
        ],
        features: ["Hydraulic impulse testing", "Endurance and lifecycle tests", "Clean assembly environment"]
    }
];

export const QUALITY_CERTIFICATIONS = [
  { 
    name: 'ISO 9001:2015', 
    logo: 'https://picsum.photos/seed/iso9001/100/100',
    description: 'An international standard for Quality Management Systems (QMS), ensuring we consistently provide products and services that meet customer and regulatory requirements.',
    issued: 'Jan 2022',
    validUntil: 'Dec 2024',
    authority: 'International Organization for Standardization'
  },
  { 
    name: 'IATF 16949', 
    logo: 'https://picsum.photos/seed/iatf/100/100',
    description: 'The global technical specification and quality management standard for the automotive sector, focusing on defect prevention and continual improvement.',
    issued: 'Mar 2022',
    validUntil: 'Feb 2025',
    authority: 'International Automotive Task Force'
  },
];

export const WHY_CHOOSE_US_DATA = [
    {
        title: "Unmatched Precision",
        description: "Our advanced CNC machinery and skilled engineers ensure every component is manufactured to the highest standards of precision and accuracy.",
        icon: "M12 21a9 9 0 100-18 9 9 0 000 18z"
    },
    {
        title: "Robust Quality Assurance",
        description: "We implement a multi-stage quality control process, from raw material inspection to final product testing, to guarantee reliability and performance.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Customized Solutions",
        description: "We work closely with our clients to develop tailored hydraulic solutions that meet their unique application requirements and challenges.",
        icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    },
    {
        title: "Experienced Team",
        description: "Our team of engineers and technicians brings decades of collective experience in the hydraulic industry, ensuring expert advice and support.",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    }
];