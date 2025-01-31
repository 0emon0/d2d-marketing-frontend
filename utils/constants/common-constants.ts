import { FormItems, SidebarItem, statusColor, CreateLeadStatusItems } from '@/models/global-types';
import { BookIcon, HomeIcon, SettingIcon } from '../../assets/icons';

export const getStatusColor: statusColor = {
  Cool: 'bg-blue-200',
  Hot: 'bg-[#FFD9D9]',
  Warm: 'bg-[#FFEFB8]',
};

export const PAGE_ROUTES = {
  Dashboard: '/dashboard',
  Leads: '/leads',
  Settings: '/settings',
  Signin: '/auth/signin',
  Signup: '/auth/signup',
  Forgetpassword: '/auth/forget-password',
  EmailSent:  '/auth/forget-password/email-sent',
  LeadCreate: '/leads/create',
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    id: 1,
    iconName: 'Dashboard',
    path: PAGE_ROUTES.Dashboard,
    icon: HomeIcon,
    position: -15,
  },
  {
    id: 2,
    iconName: 'Leads',
    path: PAGE_ROUTES.Leads,
    icon: BookIcon,
    position: 50,
  },
  {
    id: 3,
    iconName: 'Settings',
    path: PAGE_ROUTES.Settings,
    icon: SettingIcon,
    position: 110,
  },
];

export const FORM_ITEMS: FormItems = {
  Title: '',
  Name: '',
  Phone: '',
  Email: '',
  Reference: '',
  Note: '',
  Status: '',
  Reminder: '',
  Date: '',
  Image: '',
};

export const LEAD_STATUS = {
  Pending: 'Pending',
  Progress: 'Progress',
  Completed: 'Completed',
  Hot: 'Hot',
  Cool: 'Cool',
  Warm: 'Warm',
};

export const CREATE_LEAD_STATUS_NEW: CreateLeadStatusItems[] = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Progress', label: 'Progress' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Hot', label: 'Hot' },
  { value: 'Cool', label: 'Cool' },
  { value: 'Warm', label: 'Warm' },
  
]

export const CREATE_LEAD_STATUS: string[] = [
  LEAD_STATUS.Pending,
  LEAD_STATUS.Progress,
  LEAD_STATUS.Completed,
  LEAD_STATUS.Hot,
  LEAD_STATUS.Cool,
  LEAD_STATUS.Warm,
];

export const AUTH_LEFT_TEXT = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."

export const NEXTAUTH_SECRET = `JMKLDJKLDJgdfgdfKLDSJKLgkljgdkl`;
export const SERVER_BASE_URL = 'http://157.245.204.196:8021/v1';
