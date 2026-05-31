import {
  BrainCircuit,
  Building2,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'

const site = {
  brand: 'Precision Ed',
  nav: [
    { label: 'About', href: '#about' },
    { label: 'What We Offer', href: '#offerings' },
    { label: 'Programs', href: '#programs' },
    { label: 'Partners', href: '#partners' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Global Education & Innovation Consortium',
    title: 'Start early. Aim globally. Build with precision.',
    copy: '"A premium mentorship pathway for students preparing for top universities, AI fluency, and future-ready careers."',
    stats: [
      // ['Top 20', 'student cohort model'],
      // ['8-12', 'grades served'],
      // ['2-week', 'mentorship rhythm'],
    ],
  },
  offerings: [
    // {
    //   icon: ShieldCheck,
    //   title: 'Profile Positioning',
    //   text: '"A stronger story across academics and activities."',
    // },
    {
      icon: Target,
      title: 'Profile Positioning',
      text: 'Precision Ed’s global preparation model equips students with long‑term academic planning, essential skill‑building, Olympiad and hackathon readiness, and clarity on qualifying for the world’s top internships and research programs.',
    },
    {
      icon: BrainCircuit,
      title: 'Global Education & Technology Awareness',
      text: 'Personalized admissions guidance strengthens every part of a student’s profile — with support from Ivy League mentors and industry leaders.',
    },
    // {
    //   icon: ShieldCheck,
    //   title: 'Profile Positioning',
    //   text: '"A stronger story across academics and activities."',
    // },
    // {
    //   icon: Globe2,
    //   title: 'Global Opportunity Prep',
    //   text: '"Olympiads, research, internships, and global exposure."',
    // },
  ],
  programTabs: [
    {
      label: 'Global BS Prep',
      title: '"Built for the top 20 students ready to compete globally."',
      points: [
        'Step-by-step BS admissions roadmap.',
        'For Grade 8-12 students with global ambition.',
        'Biweekly mentorship with elite mentors.',
        'Exposure to students already studying abroad.',
      ],
    },
    {
      label: 'What Students and Parents Gain',
      title: '"AI awareness that feels practical, modern, and accessible."',
      points: [
        'A clear roadmap to top global universities. Stronger admission outcomes through long term strategy. ',
        'Confidence to pursue medicine, engineering, law, arts, or technology anywhere in the world. Holistic development across academics, activities, mindset, and communication. ',
        'A future ready perspective that elevates both career and life.',
      ],
    },
    // {
    //   label: 'Mentorship',
    //   title: '"Guidance from people who have already walked the path."',
    //   points: [
    //     'Ivy League and global-campus mentors.',
    //     'Mindset, communication, and direction.',
    //     'Clear feedback for students and parents.',
    //     'Long-term growth, not last-minute stress.',
    //   ],
    // },
  ],
  benefits: [
    'Precision Ed unites the world’s brightest minds—top educators, global mentors, and elite university partners—to shape tomorrow’s most impactful leaders.',
    'We ignite early mastery of AI and breakthrough innovation while opening doors to global opportunities guided by mentors who’ve excelled at the highest levels',
    'Working across schools and universities, we prepare students to rise into the world’s best institutions and launch future‑ready careers with confidence and purpose.',
    // '"Growth across academics, activities, and communication."',
    // '"A future-ready perspective for career and life."',
  ],
  partners: [
    {
      title: 'University Leaders',
      text: '"Mentorship, research pathways, and global exposure."',
      icon: Building2,
    },
    {
      title: 'Schools & Universities',
      text: '"AI and technology awareness for future-ready campuses."',
      icon: GraduationCap,
    },
    {
      title: 'Nonprofits',
      text: '"Access to guidance where opportunity changes trajectories."',
      icon: Users,
    },
  ],
  faqs: [
    ['How early should students start preparing for top global universities ?', 'Most top‑admitted students begin early because it allows time to build depth, achievements, and a standout profile. Early preparation creates a long‑term advantage that late applicants rarely match.'],
    ['What separates top global applicants from equally talented students ?', 'It’s not just grades — it’s strategy, mentorship, and exposure. Students who understand what global universities value build stronger profiles and make smarter academic and activity choices.'],
    [' How do global mentors actually change a student’s direction ?', 'Mentors studying at top universities give insider clarity on what works, what doesn’t, and how to stand out. Their guidance helps students avoid common mistakes and aim higher with confidence.'],
  ],
  quotes: [
    '"Ambition needs architecture."',
    '"Global preparation starts before applications."',
    '"Students do better when the path is visible."',
  ],
}

export default site