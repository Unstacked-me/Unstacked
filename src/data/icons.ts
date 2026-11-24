// SVG path data for the menu icons (24×24 viewBox, stroked, no fill).
export type Icon = 'goals' | 'info' | 'download' | 'article';

export const icons: Record<Icon, string> = {
	goals: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-5 10c.8-2.3 2.7-3.5 5-3.5s4.2 1.2 5 3.5',
	info: 'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7 8v6m0-9.5v.5',
	download: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M12 11v6m-3-3 3 3 3-3',
	article: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h6',
};
