import Header from "@/components/Header";

type Props = {
	children: React.ReactNode;
};

function ContactUsLayout({ children }: Props) {
	return (
		<>
            <Header />
			<main>{children}</main>
		</>
	);
}

export default ContactUsLayout;
