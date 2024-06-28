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
    name: 'Dibakar',
    message:
      'Switching to Blem CRM was one of the best decisions we made. It offers robust features at an affordable price. The call integration works flawlessly, and the real-time analytics have provided us with valuable insights. Fantastic product!',
  },
  {
    name: 'Sankar M',
    message:
      "As a small business, we needed a CRM that was powerful yet easy to use. Blem CRM fits the bill perfectly. Its user-friendly, and the support team is always ready to help. We have seen a significant improvement in customer satisfaction and sales efficiency.",
  },
  {
    name: 'Gurunath',
    message:
      "Blem CRM has been a game-changer for our sales team. The automation features save us so much time, and the platform is incredibly reliable. Our lead management is more organized, and we have closed more deals since implementing Blem.",
  },
  {
    name: 'Sujit',
    message:
      'Since adopting Blem CRM, our workflow has become much more streamlined. The platform is straightforward to navigate, and the automation features have reduced our manual tasks significantly. Its been a vital tool for our sales team.',
  },
  {
    name: 'Mahesh',
    message:
      "Blem CRM has been more than just a tool. It's been a partner in our growth. The platform is incredibly user-friendly, and the continuous updates ensure we are always ahead of the curve.",
  },
  {
    name: 'Sakhshi',
    message:
      "We needed a CRM that could scale with us as we grew, and Blem CRM delivered. The customization options allowed us to tailor it to our needs, and the call features work without a hitch. Its helped us stay on top of our customer relationships and sales goals.",
  },
  {
    name: 'Prabhat',
    message:
      'Blem helps me to get 15% conversion and please add more integrations.',
  },
  {
    name: 'Sachin',
    message:
      "Switching to blem CRM was the best decision for our business.",
  },
  {
    name: 'Aditya',
    message:
      "Blem CRMstand out for its ease is use and robust features. It has made managing customer relationship a breeze. Excellent support.",
  },
  {
    name: 'Divya',
    message:
      "We love how easy it is to use Blem. It's intuitive, comprehensive and has made our sales process much more streamlined.",
  },
  {
    name: 'Hannah',
    message:
      "ntegrating blem CRM with our existing business applications was a breeze. It's seamless and has enhanced our overall workflow.",
  },
  {
    name: 'Rahul',
    message:
      "Excellent Tool with robust features and great customer support.",
  },
  
];




export const MAX_FOLDERS_FREE_PLAN = 3;


export const priorityOptions = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
]

export const contactTypeOptions = [
  { value: 'lead', label: 'Lead' },
  { value: 'qualifiedLead', label: 'Qualified Lead' },
  { value: 'customer', label: 'Customer' },
  { value: 'partner', label: 'Partner' },
  { value: 'vendor', label: 'Vendor' },
]

export const statusOptions = [
  { value: 'contacted', label: 'Contacted' },
  { value: 'attempted', label: 'Attempted' },
  { value: 'badFit', label: 'Bad Fit' },
  { value: 'qualified', label: 'Qualified' },
  { value: 'newLead', label: 'New Lead' },
]


export const leadStatusColors: Record<string, string> = {
  contacted: 'bg-[#F59E0B]',
  attempted: 'bg-[#6366F1]',
  badfit: 'bg-[#EF4444]',
  qualified: 'bg-[#22C55E]',
  newLead: 'bg-[#0EA5E9]',
};
export const statusFilter = [

  {
    value:"contacted",
    label:"Contacted"
  },
  {
    value:"attempted",
    label:"Attempted"
  },
  {
    value:"badFit",
    label:"Bad Fit"
  },
  {
    value:"qualified",
    label:"Qualified"
  },
  {
    value:"newLead",
    label:"New Lead"
  }
]
export const dateFilter = [
  {
    value:"today",
    label:"Today"
  },
  {
    value:"yesterday",
    label:"Yesterday"
  },
  {
    value:"thisWeek",
    label:"This Week"
  },
  {
    value:"thisMonth",
    label:"This Month"
  },
  {
    value:"thisYear",
    label:"This Year"
  },
  {
    value:"lastQuarter",
    label:"Last Quarter"
  }
]

