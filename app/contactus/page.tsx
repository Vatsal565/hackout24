import ContactUs from "@/components/ContactUs";
import Footer from "@/components/footer";
import { PageWrapper } from "@/components/page-wrapper";

export default function contactus() {
    return (
        <>
        <div className="mb-36">
            <PageWrapper>
            {/* <section className="-mt-24 md:pt-5 md:pb-10 bg-gradient-to-t from-[#183EC2] to-[#EAEEFE] overflow-x-clip "> */}
            <ContactUs />
            {/* </section> */}
            </PageWrapper>
            </div>
        </>
    )
}
