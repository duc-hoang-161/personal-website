import {
    airbnb,
    binance,
    coinbase,
    dropbox,
    nitk,
    cluboard,
    cash_flow,
    freadom,
    bank,
    gdsc,
    iris,
    ecell,
    genesis,
    graphql,
    portfolio,
    publiclab,
    zulip,
    cdc,
    chargeswap,
    placeicon,
    recruitment,
    huntly,
    ces,
    gameloft,
    miu,
    bk,
    repo,
} from '../assets';

import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail,
    AiOutlineTwitter,
    AiFillHtml5,
    AiOutlineGoogle,
    AiOutlineGitlab,
} from 'react-icons/ai';

import {
    SiDjango,
    SiSqlite,
    SiJavascript,
    SiBootstrap,
    SiReact,
    SiMaterialui,
    SiTailwindcss,
    SiGraphql,
    SiPython,
    SiCplusplus,
    SiC,
    SiRubyonrails,
    SiJquery,
    SiVisualstudiocode,
    SiPostman,
    SiGit,
    SiMysql,
    SiSolidity,
    SiNetlify,
    SiChartdotjs,
    SiVite,
    SiArduino,
    SiWeb3Dotjs,
    SiIpfs,
    SiDotnet,
    SiTwilio,
    SiFlutter,
    SiReplit,
    SiFlask,
    SiFigma,
    SiGooglemaps,
    SiJava,
    SiNodedotjs,
    SiTypescript,
    SiExpress,
    SiSpringboot,
    SiAntdesign,
    SiGithub,
} from 'react-icons/si';

import { FaHardHat } from 'react-icons/fa';

import { IoIosNotificationsOutline } from 'react-icons/io';

import { DiCss3, DiMsqlServer, DiRuby } from 'react-icons/di';

export const resumeLink = '#';
export const repoLink = 'https://github.com/duc-hoang-161/personal-website';

export const callToAction = 'https://www.linkedin.com/in/htmduc/';

export const navLinks = [
    {
        id: 'skills',
        title: 'Skills & Experience',
    },
    {
        id: 'education',
        title: 'Education',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'testimonials',
        title: 'Testimonial',
    },
    {
        id: 'contactMe',
        title: 'Contact Me',
    },
];

export const educationList = [
    {
        id: 'education-1',
        icon: miu,
        title: 'Maharishi International University',
        degree: 'MS in Computer Science',
        duration: 'August 2022 - May 2024 (Ongoing to be completed)',
        content1: 'Software Engineering',
        content2: 'Science and Technology of Consciousness',
    },
    {
        id: 'education-2',
        icon: bk,
        title: 'Da Nang University of Science and Technology',
        degree: 'BS in Computer Science',
        duration: 'August 2015 - Jan 2020',
        content1: 'Information Technology',
        content2: 'Software Engineering',
    },
];

export const skills = [
    {
        title: 'Programming Languages',
        items: [
            { id: 'pl-0', icon: SiNodedotjs, name: 'NodeJs' },
            {
                id: 'pl-7',
                icon: SiJavascript,
                name: 'JavaScript',
            },
            {
                id: 'pl-9',
                icon: SiTypescript,
                name: 'TypeScript',
            },
            {
                id: 'pl-8',
                icon: SiJava,
                name: 'Java',
            },
            {
                id: 'pl-1',
                icon: SiCplusplus,
                name: 'C++',
            },
            {
                id: 'pl-2',
                icon: SiPython,
                name: 'Python',
            },
        ],
    },
    {
        title: 'Frameworks/Libraries',
        items: [
            { id: 'f-0', icon: SiExpress, name: 'Express' },
            {
                id: 'f-1',
                icon: SiDjango,
                name: 'Django',
            },
            {
                id: 'f-2',
                icon: SiSpringboot,
                name: 'Spring Boot',
            },
            {
                id: 'f-3',
                icon: SiReact,
                name: 'ReactJS',
            },
            {
                id: 'f-43',
                icon: SiAntdesign,
                name: 'Ant Design',
            },
            {
                id: 'f-4',
                icon: SiBootstrap,
                name: 'Bootstrap',
            },
            {
                id: 'f-5',
                icon: SiTailwindcss,
                name: 'Tailwind CSS',
            },
            {
                id: 'f-6',
                icon: SiJquery,
                name: 'jQuery',
            },
            {
                id: 'f-7',
                icon: SiGraphql,
                name: 'GraphQL',
            },
        ],
    },
    {
        title: 'Tools',
        items: [
            {
                id: 't-1',
                icon: SiMysql,
                name: 'MySQL',
            },
            {
                id: 't-2',
                icon: SiPostman,
                name: 'Postman',
            },
            {
                id: 't-3',
                icon: SiVisualstudiocode,
                name: 'VS Code',
            },
            {
                id: 't-4',
                icon: SiGit,
                name: 'Git',
            },
            {
                id: 't-5',
                icon: AiFillGithub,
                name: 'GitHub',
            },
            {
                id: 't-6',
                icon: AiOutlineGitlab,
                name: 'Gitlab',
            },
            {
                id: 't-7',
                icon: SiNetlify,
                name: 'Netlify',
            },
            {
                id: 't-8',
                icon: SiVite,
                name: 'ViteJS',
            },
        ],
    },
];

export const experiences = [
    {
        organisation: 'CODE ENGINE STUDIO',
        logo: ces,
        link: 'https://www.codeenginestudio.com/',
        positions: [
            {
                title: 'Software Developer',
                duration: 'Feb 2020 - Jul 2022',
                content: [
                    {
                        text: 'Conducted front-end and back-end programming using JavaScript.',
                        link: '',
                    },
                    {
                        text: 'Assisted in planning Agile sprints and translating customer requirements to robust, scalable code.',
                        link: '',
                    },
                    {
                        text: 'Leveraged ReactJS, Flow, Styled Components, HTML, CSS, SASS, and Redux to develop web apps.',
                        link: '',
                    },
                    {
                        text: 'Developed high-performance React application using React Hooks, React Context, and Redux.',
                        link: '',
                    },
                    {
                        text: 'Constructed role-based access control for RESTful API apps using NodeJS, ExpressJS, and MongoDB.',
                        link: '',
                    },
                    {
                        text: 'Developed object-oriented models for data visualization.',
                        link: '',
                    },
                    {
                        text: 'Established testing frameworks for team projects using Jest; built mock tests using NodeJS RESTful API.',
                        link: '',
                    },
                    {
                        text: 'Integrated applications with 3rd-party systems including Dropbox, Google Analytics, Google Search Console, SendGrid, MailChimp, Stripe, and Intercom.',
                        link: '',
                    },
                    {
                        text: 'Led extension of exclusive features and plugins in 3rd-party libraries for visualizing data on web applications and exporting PowerPoint files.',
                        link: '',
                    },
                    {
                        text: 'Built complex payment gateway integrated with Stripe APIs. Established product schema compatible with business logic and recurring subscriptions for users.',
                        link: '',
                    },
                    {
                        text: 'Managed application deployments, EC2 instances, domain names, and email configuration.',
                        link: '',
                    },
                    {
                        text: 'Configured JavaScript projects using Webpack, Babel, Docker, and CI/CD on Gitlab and GitHub.',
                        link: '',
                    },
                    {
                        text: 'Consulted with clients to identify and resolve technical issues.',
                        link: '',
                    },
                    {
                        text: 'Conducted research on potential of technologies, platforms and tools including Facebook Pixel, Keyword Hero, and Google services to solve client challenges.',
                        link: '',
                    },
                ],
            },
            {
                title: 'Internship Coach',
                duration: 'Jul 2020 - Jul 2022',
                content: [
                    {
                        text: "Responsible for overseeing the development and growth of the intern, providing guidance and support to ensure that the intern's work is of high quality and meets the expectations of the organization",
                        link: '',
                    },
                ],
            },
            {
                title: 'Software Developer Intern',
                duration: 'Jun 2019 - Aug 2019',
                content: [
                    {
                        text: 'Focused on web application development using React. My experience includes working on complex features and utilizing MongoDB as the database, demonstrating my strong technical skills and ability to work effectively with a variety of technologies.',
                        link: '',
                    },
                    {
                        text: 'Worked independently and communicate effectively with team members, resulting in consistently high-quality work. My sense of responsibility and understanding of the impact my work has on project success has made me a valuable asset to my past and current teams.',
                        link: '',
                    },
                ],
            },
        ],
    },
    {
        organisation: 'Gameloft',
        logo: gameloft,
        link: 'https://www.gameloft.com/',
        positions: [
            {
                title: 'Software Developer Intern',
                duration: 'Jun 2018 - Aug 2018',
                content: [
                    {
                        text: 'Responsible for contributing to the development of a game project.',
                        link: '',
                    },
                    {
                        text: 'Involved working closely with the team to understand the requirements and design, and then using my programming skills to implement game features.',
                        link: '',
                    },
                    {
                        text: 'Responsible for testing and debugging the game to ensure that it met the standards for quality and performance.',
                        link: '',
                    },
                    {
                        text: 'Focused on delivering high-quality work and was committed to meeting the expectations of the team and the organization.',
                        link: '',
                    },
                ],
            },
        ],
    },
];

export const openSourceContributions = [
    {
        id: 'os-1',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'pull-request',
        status: 'merged',
        title: 'Move _wiki to old table look, common template for email and settings digest only',
        link: 'https://github.com/publiclab/plots2/pull/10731',
        number: '#10731',
        date: 'Feb 24 2022',
        linesAdded: '101',
        linesDeleted: '48',
    },
    {
        id: 'os-2',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'pull-request',
        status: 'merged',
        title: 'Combine templates for email digest and settings digest',
        link: 'https://github.com/publiclab/plots2/pull/10681',
        number: '#10681',
        date: 'Feb 9 2022',
        linesAdded: '86',
        linesDeleted: '106',
    },
    {
        id: 'os-3',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'pull-request',
        status: 'merged',
        title: 'Fix reverse chronological sorting on inline grids',
        link: 'https://github.com/publiclab/plots2/pull/11114',
        number: '#11114',
        date: 'May 4 2022',
        linesAdded: '1',
        linesDeleted: '1',
    },
    {
        id: 'os-4',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'pull-request',
        status: 'merged',
        title: 'style: Make post page footer responsive',
        link: 'https://github.com/publiclab/plots2/pull/10634',
        number: '#10634',
        date: 'Feb 24 2022',
        linesAdded: '64',
        linesDeleted: '8',
    },
    {
        id: 'os-5',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'issue',
        status: 'closed',
        title: 'Typos in Translation_System.md',
        link: 'https://github.com/publiclab/plots2/issues/11120',
        number: '#11120',
        date: 'May 6 2022',
        linesAdded: '',
        linesDeleted: '',
    },
    {
        id: 'os-6',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'issue',
        status: 'closed',
        title: 'Missing translations on layouts/_header.html.erb',
        link: 'https://github.com/publiclab/plots2/issues/11115',
        number: '#11115',
        date: 'May 4 2022',
        linesAdded: '',
        linesDeleted: '',
    },
    {
        id: 'os-7',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'issue',
        status: 'closed',
        title: "Missing translation of 'This is part of' on _tagging.html.erb",
        link: 'https://github.com/publiclab/plots2/issues/10986',
        number: '#10986',
        date: 'Apr 8 2022',
        linesAdded: '',
        linesDeleted: '',
    },
    {
        id: 'os-8',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'issue',
        status: 'closed',
        title: 'Wrong closing heading tag in _digest.html.erb',
        link: 'https://github.com/publiclab/plots2/issues/10985',
        number: '#10985',
        date: 'Apr 8 2022',
        linesAdded: '',
        linesDeleted: '',
    },
    {
        id: 'os-9',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'issue',
        status: 'closed',
        title: 'Add class to center wiki.scraped_image in wikis template',
        link: 'https://github.com/publiclab/plots2/issues/10797',
        number: '#10797',
        date: 'Mar 18 2022',
        linesAdded: '',
        linesDeleted: '',
    },
    {
        id: 'os-10',
        organisation: 'PublicLab',
        logo: publiclab,
        repo: 'plots2',
        type: 'issue',
        status: 'closed',
        title: 'Images on /wiki are not center aligned',
        link: 'https://github.com/publiclab/plots2/issues/10755',
        number: '#10755',
        date: 'Mar 4 2022',
        linesAdded: '',
        linesDeleted: '',
    },
    {
        id: 'os-11',
        organisation: 'Zulip',
        logo: zulip,
        repo: 'zulip',
        type: 'pull-request',
        status: 'merged',
        title: 'invitations: Check invitation from a now-deactivated user.',
        link: 'https://github.com/zulip/zulip/pull/20206',
        number: '#20206',
        date: 'Dec 30 2021',
        linesAdded: '31',
        linesDeleted: '1',
    },
    {
        id: 'os-12',
        organisation: 'Zulip',
        logo: zulip,
        repo: 'zulip',
        type: 'pull-request',
        status: 'merged',
        title: 'invitations: Check invitation from a now-deactivated user.',
        link: 'https://github.com/zulip/zulip/pull/20206',
        number: '#20206',
        date: 'Dec 30 2021',
        linesAdded: '31',
        linesDeleted: '1',
    },
    {
        id: 'os-13',
        organisation: 'Zulip',
        logo: zulip,
        repo: 'zulip',
        type: 'pull-request',
        status: 'merged',
        title: 'authentication: Fix placeholder realms for redirects.',
        link: 'https://github.com/zulip/zulip/pull/19689',
        number: '#19689',
        date: 'Sep 9 2021',
        linesAdded: '1',
        linesDeleted: '1',
    },
    {
        id: 'os-14',
        organisation: 'Zulip',
        logo: zulip,
        repo: 'zulip',
        type: 'pull-request',
        status: 'merged',
        title: 'message_editing : Fix topic edit propagate option cut-off',
        link: 'https://github.com/zulip/zulip/pull/19760',
        number: '#19760',
        date: 'Feb 10 2022',
        linesAdded: '9',
        linesDeleted: '8',
    },
];

export const projects = [
    {
        id: 'project-1',
        title: 'Movie Rating Portal',
        github: 'https://github.com/EA-course-MIU/Movie-Rating-Portal',
        image: repo,
        content:
            'In this application, users can create, rate and write comments about movies and tv series. Users can create favorite lists and they can share their lists with other users.',
        stack: [
            {
                id: 'icon-1',
                icon: SiReact,
                name: 'React',
            },
            {
                id: 'icon-2',
                icon: SiTailwindcss,
                name: 'TailwindCSS',
            },
            {
                id: 'icon-3',
                icon: SiWeb3Dotjs,
                name: 'Web3.js',
            },
            {
                id: 'icon-4',
                icon: SiSolidity,
                name: 'Solidity',
            },
            {
                id: 'icon-5',
                icon: FaHardHat,
                name: 'HardHat',
            },
            {
                id: 'icon-6',
                icon: SiIpfs,
                name: 'IPFS',
            },
            {
                id: 'icon-7',
                icon: SiArduino,
                name: 'Arduino',
            },
            {
                id: 'icon-8',
                icon: IoIosNotificationsOutline,
                name: 'Push Protocol',
            },
        ],
    },
    {
        id: 'project-2',
        title: 'The revolution of electric vehicle​',
        github: '#',
        link: '',
        image: repo,
        content:
            'Data analysis and visualization of electric vehicle charging stations in the United States.',
        stack: [
            {
                id: 'icon-1',
                icon: SiDotnet,
                name: 'Dot Net Core MVC 6',
            },
            {
                id: 'icon-2',
                icon: SiBootstrap,
                name: 'Bootstrap',
            },
            {
                id: 'icon-3',
                icon: DiMsqlServer,
                name: 'MS Sql Server',
            },
            {
                id: 'icon-4',
                icon: SiJquery,
                name: 'jQuery',
            },
            {
                id: 'icon-5',
                icon: SiTwilio,
                name: 'Twillio',
            },
        ],
    },
    {
        id: 'project-3',
        title: 'Personal Portfolio',
        github: 'https://github.com/duc-hoang-161/personal-website',
        link: 'https://resume.htmd.dev/',
        image: repo,
        content:
            'A personal portfolio website built with React and TailwindCSS to showcase my projects and skills. The website is fully responsive and is hosted on Amazon AWS.',
        stack: [
            {
                id: 'icon-1',
                icon: SiRubyonrails,
                name: 'Ruby on Rails',
            },
            {
                id: 'icon-2',
                icon: SiTailwindcss,
                name: 'TailwindCSS',
            },
            {
                id: 'icon-3',
                icon: SiJquery,
                name: 'jQuery',
            },
        ],
    },
    {
        id: 'project-4',
        title: 'Resumelysis',
        github: 'https://github.com/duc-hoang-161/personal-website',
        image: repo,
        content:
            'A web application that analyzes resumes and provides insights to recruiters. The application is built with ReactJS, NodeJs, and Django Rest Framework.',
        stack: [
            {
                id: 'icon-1',
                icon: SiDjango,
                name: 'Django Rest Framework',
            },
            {
                id: 'icon-2',
                icon: SiFlutter,
                name: 'Flutter',
            },
            {
                id: 'icon-3',
                icon: SiReplit,
                name: 'Replit',
            },
            {
                id: 'icon-3',
                icon: SiFlask,
                name: 'Flask',
            },
            {
                id: 'icon-4',
                icon: SiFigma,
                name: 'Figma',
            },
            {
                id: 'icon-4',
                icon: SiGooglemaps,
                name: 'Google Maps API',
            },
        ],
    },
    {
        id: 'project-5',
        title: 'JOMK-Game',
        github: 'https://github.com/duc-hoang-161/JOMK-Game',
        link: '',
        image: repo,
        content:
            'A cross-platform game built with C++ using Cocos2d-x framework.',
        stack: [
            {
                id: 'icon-1',
                icon: SiDjango,
                name: 'Django',
            },
            {
                id: 'icon-2',
                icon: AiFillHtml5,
                name: 'HTML',
            },
            {
                id: 'icon-3',
                icon: DiCss3,
                name: 'CSS',
            },
            {
                id: 'icon-4',
                icon: SiJavascript,
                name: 'JavaScript',
            },
            {
                id: 'icon-5',
                icon: SiBootstrap,
                name: 'Bootstrap',
            },
            {
                id: 'icon-6',
                icon: SiChartdotjs,
                name: 'Chart.js',
            },
        ],
    },
    {
        id: 'project-6',
        title: 'Truyenda',
        github: 'https://github.com/truyenda/truyenda-web-app',
        image: repo,
        content:
            'A React application to help users visualise and minimise cash flow among multiple transactions.',
        stack: [
            {
                id: 'icon-1',
                icon: SiReact,
                name: 'React',
            },
            {
                id: 'icon-2',
                icon: AiFillHtml5,
                name: 'HTML',
            },
            {
                id: 'icon-3',
                icon: DiCss3,
                name: 'CSS',
            },
            {
                id: 'icon-4',
                icon: SiMaterialui,
                name: 'Material UI',
            },
        ],
    },
];

export const blogPosts = [
    {
        id: 'post-1',
        title: 'Blog Post 01 - Title',
        link: '#',
        date: new Date().toLocaleDateString(), // Can be edited to any string format
        image: 'https://via.placeholder.com/600/92c952',
        tags: [
            {
                id: 'tag-1',
                name: 'tag 01',
            },
            {
                id: 'tag-2',
                name: 'tag 03',
            },
            {
                id: 'tag-3',
                name: 'tag 03',
            },
        ],
    },
    {
        id: 'post-2',
        title: 'Blog Post 02 - Title',
        link: '#',
        date: new Date().toLocaleDateString(),
        image: 'https://via.placeholder.com/600/d32776',
        tags: [
            {
                id: 'tag-1',
                name: 'tag 01',
            },
            {
                id: 'tag-2',
                name: 'tag 03',
            },
            {
                id: 'tag-3',
                name: 'tag 03',
            },
        ],
    },
    {
        id: 'post-3',
        title: 'Blog Post 03 - Title',
        link: '#',
        date: new Date().toLocaleDateString(),
        image: 'https://via.placeholder.com/600/771796',
        tags: [
            {
                id: 'tag-1',
                name: 'tag 01',
            },
            {
                id: 'tag-2',
                name: 'tag 03',
            },
            {
                id: 'tag-3',
                name: 'tag 03',
            },
        ],
    },
];

export const stats = [
    {
        id: 'stats-1',
        title: 'Organisations',
        value: '2+',
    },
    {
        id: 'stats-2',
        title: 'Issues Opened',
        value: '6+',
    },
    {
        id: 'stats-3',
        title: 'Pull Requests',
        value: '6+',
    },
];

export const testimonials = [
    {
        organisation: 'Code Engine Studio',
        title: '#HumansofCES',
        duration: 'December 2021',
        content: [
            {
                text: `Duc has earned the team's trust that he can deliver his work with excellent quality. He is detail-oriented and observant. He continuously keeps updated with the latest technology and pays close attention to the details of software products.  He also has a good understanding of requirements and is also capable of doing complex tasks independently. Duc also shows lots of patience in his mentor role in our internship and community programs. Well done, Duc!`,
                link: 'https://www.facebook.com/codeengine/posts/4742094005885382',
            },
        ],
        logo: ces,
    },
    {
        organisation: 'Code Engine Studio',
        title: 'David Kuehl - Director of Training',
        duration: 'March 2022',
        content: [
            {
                text: 'Duc has a unique and creative way of viewing the world. He continually separates himself from the collective opinion and offers creative solutions and insights. He is dependable and mature. During discussions, he will think and wait and digest the information before sharing an informed and insightful response. He has an advanced set of soft skills that many of his age have not acquired yet. He has won many awards for his work at the company and is held in high regard by all of his colleagues. One of the things that set him apart from others is that he also cares for the greater community through volunteer work and service. He is passionate about making a difference and it is evident and inspirational to those around him. ',
                link: '',
            },
        ],
        logo: ces,
    },
    {
        organisation: 'CODE ENGINE STUDIO',
        title: 'NGUYEN MINH HOANG - Project Manager',
        duration: 'March 2022',
        content: [
            {
                text: 'He is one of the best developers in our company. He has shown from the very beginning that he is capable of learning quickly and effectively. I was impressed with his passion for learning and how well he applied the new knowledge to a real project. He can also work independently but also will raise questions and give his ideas clearly to the team. He has earned his team’s trust on his quality of work as well as his personality. I think he will succeed in every field or every learning that he wants to. He is smart and determined enough to overcome any difficulty.',
                link: '',
            },
        ],
        logo: ces,
    },
];

export const socialMedia = [
    {
        id: 'social-media-1',
        icon: AiFillLinkedin,
        link: 'https://www.linkedin.com/in/htmduc/',
    },
    {
        id: 'social-media-2',
        icon: AiFillGithub,
        link: 'https://github.com/duc-hoang-161',
    },
    {
        id: 'social-media-3',
        icon: AiFillMail,
        link: 'mailto:triston.h.161@gmail.com',
    },
    {
        id: 'social-media-4',
        icon: AiOutlineTwitter,
        link: 'https://www.twitter.com/#',
    },
    {
        id: 'social-media-5',
        icon: AiFillInstagram,
        link: 'https://www.instagram.com/#',
    },
];

export const clients = [
    {
        id: 'client-1',
        logo: airbnb,
    },
    {
        id: 'client-2',
        logo: binance,
    },
    {
        id: 'client-3',
        logo: coinbase,
    },
    {
        id: 'client-4',
        logo: dropbox,
    },
];

export const aboutMe = {
    name: 'Trong Hoang',
    tagLine:
        'Software Developer | Full-stack JS Developer | Cloud Solution Architect',
    intro: 'I am a highly skilled software developer with extensive experience in complex technologies. My expertise and proven track record have made me a valuable asset to any team I work with. I am dedicated to staying at the forefront of my field, always striving for excellence in my work.',
};
