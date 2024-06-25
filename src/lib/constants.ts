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