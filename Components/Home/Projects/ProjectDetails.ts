export type projectDetailsType = {
	id?: number;
	img: string;
	title: string;
	description: string;
	url?: string;
};

export const projectDetails: projectDetailsType[] = [
	{
		id: 1,
		img: "/projects/xjobs.jpeg",
		title: "XJobs",
		description: `XJobs is a web app that helps freelancers and clients connect and securely handle payments with the latest web3 technology for a smooth and safe onboarding process.`,
	},
	{
		id: 2,
		img: "/projects/jerrysview.png",
		title: "JerrysView",
		description: `Verigo is a company that offers courier/logistics digital solutions for individuals and enterprises in Nigeria and throughout Africa.`,
		url: "https://jerrysview.com",
	},
	{
		id: 3,
		img: "/projects/mobiele.jpeg",
		title: "Mobiele",
		description: `Mobiele is a super cool platform based in Africa where you can play mobile games, join tournaments, connect with other gamers, and even win prizes! It's all about gaming fun and competition.`,
	},
	{
		id: 4,
		img: "/projects/verigo.jpeg",
		title: "Verigo",
		description: `Verigo is a company that offers courier/logistics digital solutions for individuals and enterprises in Nigeria and throughout Africa.`,
	},
];
