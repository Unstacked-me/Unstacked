import type { Icon } from './icons';

export interface SidebarItem {
	label: string;
	/** Anchor id of the matching section on the page. */
	slug: string;
	/** Shown greyed out with "(coming soon)" and not clickable. */
	comingSoon?: boolean;
}

export interface SidebarSection {
	title: string;
	icon?: Icon;
	/** Expanded when the page loads (on desktop). */
	open?: boolean;
	items: SidebarItem[];
}

/** Sidebar for /unstackme. Each item links to `#slug` on that page. */
export const unstackMeSidebar: SidebarSection[] = [
	{
		title: 'Unstack Me',
		icon: 'goals',
		open: true,
		items: [
			{ label: 'Introduction', slug: 'introduction' },
			{ label: 'What are your goals?', slug: 'what-are-your-goals' },
			{ label: 'Overview', slug: 'overview' },
			{ label: 'What are we working with?', slug: 'what-are-we-working-with' },
			{ label: 'Budgeting', slug: 'budgeting' },
			{ label: 'Priorities', slug: 'priorities' },
			{ label: 'Emergency buffer', slug: 'emergency-buffer' },
			{ label: 'Bad debt', slug: 'bad-debt' },
			{ label: 'Pension matching', slug: 'pension-matching' },
			{ label: 'Full emergency fund', slug: 'full-emergency-fund' },
			{ label: 'Home ownership', slug: 'home-ownership' },
			{ label: 'Investing', slug: 'investing', comingSoon: true },
			{ label: 'Business', slug: 'business', comingSoon: true },
			{ label: 'Maintaining', slug: 'maintaining' },
			{ label: 'Summary', slug: 'summary' },
		],
	},
	{
		title: 'Advanced Investing',
		// Placeholder: add this section's pages here when they exist.
		items: [],
	},
];
