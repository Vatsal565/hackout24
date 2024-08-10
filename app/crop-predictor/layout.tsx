
type Props = {
	children: React.ReactNode;
};

function ContactUsLayout({ children }: Props) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}

export default ContactUsLayout;
