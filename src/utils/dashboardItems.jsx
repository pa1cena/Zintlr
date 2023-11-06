import {FiSettings} from 'react-icons/fi'
import {GrHomeRounded,GrTransaction} from 'react-icons/gr'
import {BsBucket,BsBank2} from 'react-icons/bs'
import {CgTemplate} from 'react-icons/cg'
import {FaRegNewspaper} from 'react-icons/fa'
import {LuNetwork} from 'react-icons/lu'
import {IoIosPeople} from 'react-icons/io'

export const DASHBOARD = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		icon: <GrHomeRounded/>
	},
	{
		key: 'build_operations',
		label: 'Build Operations',
		icon: <BsBucket/>
	},
	{
		key: 'transactions',
		label: 'Transactions',
		icon: <GrTransaction />
	},
	{
		key: 'your_network',
		label: 'Your Network',
		icon: <LuNetwork/>
	},
	{
		key: 'consumers',
		label: 'Consumers',
		icon: <IoIosPeople/>
	},
	{
		key: 'other_operations',
		label: 'Other Operations',
		icon: <CgTemplate/>
	},
    {
		key: 'manage_bank',
		label: 'Manage Bank Accounts',
		icon: <BsBank2/>
	},
    {
		key: 'faq',
		label: 'FAQ',
		icon: <FaRegNewspaper/>
	},
    {
		key: 'customize_dashboard',
		label: 'Customize Dashboard',
		icon: <FiSettings />
	},
]

