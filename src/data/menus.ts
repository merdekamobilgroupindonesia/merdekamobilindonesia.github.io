import type { MainMenuItem, MenuNavigation } from "~/types";

export const menuMain: MainMenuItem[] = [
	{
		id: "home",
		label: "Beranda",
		url: "/",
	},
	{
		id: "cars",
		label: "Cari Mobil",
		url: "/cars",
	},
	{
		id: "about",
		label: "Tentang",
		url: "/about-us",
		submenu: [{ id: "testimonials", label: "Testimonials", url: "/about-us/testimonials" }],
	},
	{
		id: "services",
		label: "Layanan",
		url: "/services",
		submenu: [
			{ id: "repairs", label: "Perbaikan", url: "/services/repairs" },
			{ id: "maintenance", label: "Maintenis", url: "/services/maintenance" },
			{ id: "car-sales", label: "Jualin Mobil", url: "/services/car-sales" },
			{ id: "car-sales", label: "Bayarin Pajak", url: "/services/car-sales" },
			{ id: "car-sales", label: "Ngurus BPKB", url: "/services/car-sales" },
		],
	},
	{
		id: "blog",
		label: "Blog",
		url: "/blog",
	},
];

export const menuNavigation: MenuNavigation = {
	prettyName: "Navigation",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuService: MenuNavigation = {
	prettyName: "Service",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuMisc: MenuNavigation = {
	prettyName: "Miscellaneous",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuLegal: MenuNavigation = {
	prettyName: "Legal",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Cars",
			url: "/cars",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};
