const products = [
	{
		title: "Doors",
		description:
			"Precision-made glazed door systems for sharp thresholds, quiet motion, and durable daily use.",
		cta: "Product overview",
		image: "/collection/doors.svg",
		imageAlt: "Abstract architectural doorway composition",
	},
	{
		title: "Additional",
		image: "/collection/additional.svg",
		imageAlt: "Abstract interior glazing composition",
		className: "md:mt-20",
	},
	{
		title: "Structural",
		image: "/collection/structural.svg",
		imageAlt: "Abstract structural glazing composition",
		className: "md:mt-4",
	},
	{
		title: "Windows",
		image: "/collection/windows.svg",
		imageAlt: "Abstract window system composition",
		className: "md:-mt-28",
	},
] as const;

export default products;