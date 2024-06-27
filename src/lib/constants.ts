import BarChart from '@/components/icons/bar_chart'
import Calendar from '@/components/icons/calendar'
import CheckCircle from '@/components/icons/check_circled'
import Chip from '@/components/icons/chip'
import ClipboardIcon from '@/components/icons/clipboardIcon'
import Compass from '@/components/icons/compass'
import Database from '@/components/icons/database'
import Flag from '@/components/icons/flag'
import Headphone from '@/components/icons/headphone'
import Home from '@/components/icons/home'
import Info from '@/components/icons/info'
import LinkIcon from '@/components/icons/link'
import Lock from '@/components/icons/lock'
import Message from '@/components/icons/messages'
import Notification from '@/components/icons/notification'
import Payment from '@/components/icons/payment'
import Person from '@/components/icons/person'
import Pipelines from '@/components/icons/pipelines'
import PluraCategory from '@/components/icons/plura-category'
import Power from '@/components/icons/power'
import Receipt from '@/components/icons/receipt'
import Send from '@/components/icons/send'
import Settings from '@/components/icons/settings'
import Shield from '@/components/icons/shield'
import Star from '@/components/icons/star'
import Tune from '@/components/icons/tune'
import Video from '@/components/icons/video_recorder'
import Wallet from '@/components/icons/wallet'
import Warning from '@/components/icons/warning'
import Leads from '@/components/icons/leads'
import Inbox from '@/components/icons/inbox'
import Integration from '@/components/icons/integration'
import InboxIcon from '@/components/icons/inboxIcon'

export const pricingCards = [
  {
    title: 'Starter',
    description: 'Perfect for trying out plura',
    price: 'Free',
    duration: '',
    highlight: 'Key features',
    features: ['3 Sub accounts', '2 Team members', 'Unlimited pipelines'],
    priceId: '',
  },
  {
    title: 'Basic',
    description: 'For serious agency owners',
    price: '₹1050',
    duration: 'month',
    highlight: 'Everything in Starter, plus',
    features: ['Unlimited Sub accounts', 'Unlimited Team members'],
    priceId: 'price_1P0pX6HB3lvw4HqDedeImzOT',
  },
  {
    title: 'Unlimited Saas',
    description: 'The ultimate agency kit',
    price: '₹700',
    duration: 'month',
    highlight: 'Key features',
    features: ['Rebilling', '24/7 Support team'],
    priceId: 'price_1P0pYEHB3lvw4HqDIkSd491q',
  
  },
]

//change priority support
export const addOnProducts = [
  { title: 'Priority Support', id: 'prod_PofCdsrvVrHHbd' },
]

export const icons = [
  {
    value: 'chart',
    label: 'Bar Chart',
    path: BarChart,
  },
  {
    value: 'headphone',
    label: 'Headphones',
    path: Headphone,
  },
  {
    value: 'send',
    label: 'Send',
    path: Send,
  },
  {
    value: 'pipelines',
    label: 'Pipelines',
    path: Pipelines,
  },
  {
    value: 'calendar',
    label: 'Calendar',
    path: Calendar,
  },
  {
    value: 'settings',
    label: 'Settings',
    path: Settings,
  },
  {
    value: 'check',
    label: 'Check Circled',
    path: CheckCircle,
  },
  {
    value: 'chip',
    label: 'Chip',
    path: Chip,
  },
  {
    value: 'compass',
    label: 'Compass',
    path: Compass,
  },
  {
    value: 'database',
    label: 'Database',
    path: Database,
  },
  {
    value: 'flag',
    label: 'Flag',
    path: Flag,
  },
  {
    value: 'home',
    label: 'Home',
    path: Home,
  },
  {
    value: 'info',
    label: 'Info',
    path: Info,
  },
  {
    value: 'link',
    label: 'Link',
    path: LinkIcon,
  },
  {
    value: 'lock',
    label: 'Lock',
    path: Lock,
  },
  {
    value: 'messages',
    label: 'Messages',
    path: Message,
  },
  {
    value: 'notification',
    label: 'Notification',
    path: Notification,
  },
  {
    value: 'payment',
    label: 'Payment',
    path: Payment,
  },
  {
    value: 'power',
    label: 'Power',
    path: Power,
  },
  {
    value: 'receipt',
    label: 'Receipt',
    path: Receipt,
  },
  {
    value: 'shield',
    label: 'Shield',
    path: Shield,
  },
  {
    value: 'star',
    label: 'Star',
    path: Star,
  },
  {
    value: 'tune',
    label: 'Tune',
    path: Tune,
  },
  {
    value: 'videorecorder',
    label: 'Video Recorder',
    path: Video,
  },
  {
    value: 'wallet',
    label: 'Wallet',
    path: Wallet,
  },
  {
    value: 'warning',
    label: 'Warning',
    path: Warning,
  },
  {
    value: 'person',
    label: 'Person',
    path: Person,
  },
  {
    value: 'category',
    label: 'Category',
    path: PluraCategory,
  },
  {
    value: 'clipboardIcon',
    label: 'Clipboard Icon',
    path: ClipboardIcon,
  },
  {
    value: 'leads',
    label: 'Leads',
    path: Leads,
  },
  {
    value: 'inbox',
    label: 'Inbox',
    path: Inbox,
  },
  {
    value: 'integration',
    label: 'Integration',
    path: Integration,
  },
  {
    value: 'inboxicon',
    label: 'InboxIcon',
    path: InboxIcon, 
  },
]

export type EditorBtns =
  | 'text'
  | 'container'
  | 'section'
  | 'contactForm'
  | 'paymentForm'
  | 'link'
  | '2Col'
  | 'video'
  | '__body'
  | 'image'
  | null
  | '3Col'

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: 'center',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  textAlign: 'left',
  opacity: '100%',
}


//landing-page reference
import client1 from '../../public/client1.png';
import client2 from '../../public/client2.png';
import client3 from '../../public/client3.png';
import client4 from '../../public/client4.png';
import client5 from '../../public/client5.png';

export const CLIENTS = [
  { alt: 'client1', logo: client1 },
  { alt: 'client2', logo: client2 },
  { alt: 'client3', logo: client3 },
  { alt: 'client4', logo: client4 },
  { alt: 'client5', logo: client5 },
];

export const USERS = [
  {
    name: 'Alice',
    message:
      'Cypress has been a game-changer for our team. With its reliable end-to-end testing, we catch bugs early, leading to faster development cycles and improved collaboration.',
  },
  {
    name: 'Bob',
    message:
      "I used to spend hours debugging frontend issues, but Cypress simplified everything. Now, I'm more productive, and my colleagues can trust our code thanks to Cypress.",
  },
  {
    name: 'Charlie',
    message:
      "Cypress has transformed the way we work. Our QA and development teams are on the same page, and our productivity has skyrocketed. It's a must-have tool.",
  },
  {
    name: 'David',
    message:
      'I was skeptical at first, but Cypress exceeded my expectations. Our project timelines have improved, and collaboration between teams is seamless.',
  },
  {
    name: 'Ella',
    message:
      "Cypress made writing and running tests a breeze. Our team's productivity has never been higher, and we're delivering more reliable software.",
  },
  {
    name: 'Frank',
    message:
      "Thanks to Cypress, we've eliminated testing bottlenecks. Our developers and testers collaborate effortlessly, resulting in quicker releases.",
  },
  {
    name: 'Grace',
    message:
      'Cypress has improved our development process significantly. We now have more time for innovation, and our products are of higher quality.',
  },
  {
    name: 'Hank',
    message:
      "Cypress's user-friendly interface made it easy for our non-technical team members to contribute to testing. Our workflow is much more efficient now.",
  },
  {
    name: 'Ivy',
    message:
      "Our team's collaboration improved immensely with Cypress. We catch issues early, leading to less friction and quicker feature deployments.",
  },
  {
    name: 'Jack',
    message:
      "Cypress's robust testing capabilities have elevated our development standards. We work more harmoniously, and our releases are more reliable.",
  },
  {
    name: 'Katherine',
    message:
      "Cypress is a lifesaver for our cross-functional teams. We're more productive, and there's a shared sense of responsibility for product quality.",
  },
  {
    name: 'Liam',
    message:
      "Cypress has helped us maintain high standards of quality. Our team's collaboration has improved, resulting in faster development cycles.",
  },
  {
    name: 'Mia',
    message:
      "Cypress is a powerful tool that improved our productivity and collaboration. It's now an integral part of our development process.",
  },
  {
    name: 'Nathan',
    message:
      "Cypress's user-friendly interface and detailed reporting have made testing a breeze. Our team's productivity is at an all-time high.",
  },
  {
    name: 'Olivia',
    message:
      "We saw immediate benefits in terms of productivity and collaboration after adopting Cypress. It's an essential tool for our development workflow.",
  },
  {
    name: 'Paul',
    message:
      "Cypress has streamlined our testing process and brought our teams closer. We're more efficient and deliver better results.",
  },
  {
    name: 'Quinn',
    message:
      'Cypress has been a game-changer for us. Our productivity and collaboration have improved significantly, leading to better software.',
  },
  {
    name: 'Rachel',
    message:
      'Thanks to Cypress, our testing process is now a seamless part of our development cycle. Our teams collaborate effortlessly.',
  },
  {
    name: 'Sam',
    message:
      'Cypress is a fantastic tool that has revolutionized our workflow. Our productivity and collaboration have reached new heights.',
  },
];




export const MAX_FOLDERS_FREE_PLAN = 3;

