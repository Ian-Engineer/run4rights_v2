import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";

export default function TermsOfService({
  lastUpdated = "November 6, 2025",
}: {
  lastUpdated?: string;
  contactEmail?: string;
}) {

    function formatDateAttr(input: string) {
        // Attempt to convert human date to ISO date for <time dateTime>
        const d = new Date(input);
        if (!isNaN(d.getTime())) return d.toISOString().slice(0, 10);
        // Fallback: return as-is; consumer can provide ISO if needed
        return input;
    }

    function RenderSection({title, idName, children}:  {title: string, idName: string, children: ReactElement}) {
        return (
            <div>
                <Typography color="primary" variant="h4" id={idName} sx={{ scrollMarginTop: 20 }}>{title}</Typography>
                <div className="p-4 pb-0">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-row overflow-hidden">
            <div className="w-fit md:block hidden" id='left-side'>
                <Box className="w-full h-1/2 max-h-80 flex flex-col-reverse text-right p-8" sx={{backgroundColor: "primary.main"}}>
                    <Typography variant="h1" fontWeight={700}>Terms & Conditions</Typography>
                </Box>
                <aside className="hidden md:block">
                <div className="flex flex-col gap-8">
                    <Typography color="primary" variant="h6" className="w-full text-right">
                        Last updated: <time dateTime={formatDateAttr(lastUpdated)}>{lastUpdated}</time>
                    </Typography>
                    <div className="flex flex-col gap-2 ml-4 overflow-scroll">
                        <Link href="#purpose">1. Purpose of the Service</Link>
                        <Link href="#donations">2. Donations & Payment Processing</Link>
                        <Link href="#runner">3. Runner Accounts & Activity Data</Link>
                        <Link href="#use">4. Acceptable Use</Link>
                        <Link href="#property">5. Intellectual Property</Link>
                        <Link href="#third">6. Third-Party Links & Services</Link>
                        <Link href="#disclaimers">7. Disclaimers</Link>
                        <Link href="#liability">8. Limitation of Liability</Link>
                        <Link href="#indemnification">9. Indemnification</Link>
                        <Link href="#changes">10. Changes to These Terms</Link>
                        <Link href="#governing">11. Governing Law</Link>
                        <Link href="#contact">12. Contact Us</Link>
                    </div>
                </div>
                </aside>
            </div>

            <div className="flex justify-center grow" id="right-side">
                <div className="w-5/6 flex flex-col gap-8 overflow-scroll py-8 no-scrollbar" style={{ scrollBehavior: "smooth" }}>
                    <Typography className="block md:hidden" fontWeight={600} variant="h3" color="primary">
                        Terms & Conditions
                    </Typography>
                    <div className="flex flex-col gap-4">
                        <Typography color="primary" variant="body2">
                            Welcome to Run4Rights (“we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your access to and use of the Run4Rights website, platform, services, and any related features (collectively, the “Service”). By using or accessing Run4Rights, you agree to be legally bound by these Terms.
                        </Typography>
                        <Typography color="primary" variant="body2">
                            If you do not agree with these Terms, you may not use Run4Rights.
                        </Typography>
                    </div>
                    <RenderSection title={"1. Purpose of the Service"} idName="purpose">
                        <>
                            <Typography color="primary" variant="body2">
                                Run4Rights hosts fundraising events where participants donate to charitable organizations. Donations made through our platform support rotating nonprofit partners. Runner activity may contribute to event milestones, goals, or impact-based achievements.
                            </Typography>
                        </>
                    </RenderSection>
                    <RenderSection title={"2. Donations & Payment Processing"} idName="donations">
                        <div className="flex flex-col gap-2">
                            <Typography color="primary" variant="body2">
                                All donations are processed by third-party payment provider Stripe.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                Run4Rights does not store donor payment information (credit card details, banking information, or billing addresses). All payment data is subject to Stripe’s Terms and Privacy Policy.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                Donations are generally non-refundable.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                If you believe a donation was made in error, you must contact us within 7 days of the transaction and we will review the request.
                            </Typography>
                        </div>
                    </RenderSection>
                    <RenderSection title={"3. Runner Accounts & Activity Data"} idName="runner">
                        <div className="flex flex-col gap-4">
                        <Typography color="primary" variant="body2">
                            If you register as a runner, you may connect third-party services (such as Garmin) to track activity data.
                        </Typography>
                        <Typography color="primary" variant="body2">
                            You are responsible for ensuring your information is accurate and that you have the necessary rights to authorize access to connected accounts.
                        </Typography>
                        <Typography color="primary" variant="body2">
                            Run4Rights stores only the minimum necessary information to operate event features (e.g., your name and secure connection information used to link activity data). Removing access to your connected accounts may disable certain features.
                        </Typography>
                        </div>
                    </RenderSection>
                    <RenderSection title={"4. Acceptable Use"} idName="use">
                        <>
                            <Typography color="primary" variant="body2">
                                By using the Service, you agree that you will not:
                            </Typography>
                            <List>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        misuse or interfere with platform operations
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        attempt to harm, scrape, exploit, reverse engineer, or access data that does not belong to you
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        use the Service for fraudulent, hateful, illegal, or abusive conduct
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        attempt to bypass security, validation, or access controls
                                    </Typography>
                                </ListItem>
                            </List>
                            <Typography color="primary" variant="body2">
                                We reserve the right to suspend or terminate accounts or access for behavior that violates these Terms, or if we believe platform integrity is at risk.
                            </Typography>
                        </>
                    </RenderSection>
                    <RenderSection title={"5. Intellectual Property"} idName="property">
                        <div className="flex flex-col gap-2">
                            <Typography color="primary" variant="body2">
                                All content, branding, graphics, design, trademarks, features, and functionality provided by Run4Rights are owned by Run4Rights or used with permission.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                You may not copy, modify, sell, republish, or redistribute any part of the Service without written authorization.
                            </Typography>
                        </div>
                    </RenderSection>
                    <RenderSection title={"6. Third-Party Links & Services"} idName="third">
                        <div className="flex flex-col gap-2">
                            <Typography color="primary" variant="body2">
                                Run4Rights may contain links or integrations to third-party services (including Garmin, social login providers, nonprofit partner websites, and Stripe). These third parties are governed by their own terms and policies.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                Run4Rights is not responsible for third-party content, privacy practices, or policies.
                            </Typography>
                        </div>
                    </RenderSection>
                    <RenderSection title={"7. Disclaimers"} idName="disclaimers">
                        <>
                            <Typography color="primary" variant="body2">
                                Run4Rights provides the Service “as is” and “as available.”
                            </Typography>
                            <Typography color="primary" variant="body2">
                                We do not guarantee that: 
                            </Typography>                           
                            <List>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        the Service will be uninterrupted or error-free                                    
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        third-party integrations will always function as expected
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        data or metrics displayed on the site (including donations or miles) will be perfectly accurate at all times
                                    </Typography>
                                </ListItem>
                            </List>
                            <Typography color="primary" variant="body2">
                                Nonprofits featured on the platform are independent organizations. Run4Rights is not responsible for their operations, usage of funds, or outcomes.
                            </Typography>
                        </>
                    </RenderSection>
                    <RenderSection title={"8. Limitation of Liability"} idName="liability">
                        <div className="flex flex-col gap-2">
                            <Typography color="primary" variant="body2">
                                To the maximum extent permitted by law, Run4Rights is not liable for any indirect, incidental, special, consequential, or punitive damages, nor any loss of data, use, revenue, goodwill, or profits arising from your use of the Service.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                In no event will Run4Rights’ total liability exceed the amount you donated directly to Run4Rights through the platform (if applicable), or one hundred U.S. dollars (USD $100), whichever is greater.
                            </Typography>
                        </div>
                    </RenderSection>
                    <RenderSection title={"9. Indemnification"} idName="indemnification">
                        <>
                            <Typography color="primary" variant="body2">
                                You agree to defend, indemnify, and hold harmless Run4Rights from and against any claims, damages, liabilities, losses, and expenses (including legal fees) arising from:
                            </Typography>
                            <List>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        your use or misuse of the Service                               
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        your violation of these Terms
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography color="primary" variant="body2">
                                        your violation of any rights of a third party
                                    </Typography>
                                </ListItem>
                            </List>
                        </>
                    </RenderSection>
                    <RenderSection title={"10. Changes to These Terms"} idName="changes">
                        <div className="flex flex-col gap-2">
                            <Typography color="primary" variant="body2">
                                We may update, revise, or modify these Terms at any time.
                            </Typography>
                            <Typography color="primary" variant="body2">
                                Any changes will be posted on this page with the updated date. Your continued use of the Service after changes means you accept the revised Terms.
                            </Typography>
                        </div>
                    </RenderSection>
                    <RenderSection title={"11. Governing Law"} idName="governing">
                        <Typography color="primary" variant="body2">
                            These Terms are governed by and interpreted according to the laws of the United States and the State of Colorado (or the user’s local equivalent jurisdiction if required by law).
                        </Typography>
                    </RenderSection>
                    <RenderSection title={"12. Contact Us"} idName="contact">
                        <>
                            <Typography color="primary" variant="body2">
                                If you have questions about these Terms, please contact us on our{" "}
                                <ReactRouterDomLink
                                    to="/contact"
                                    className="text-primary underline hover:opacity-80"
                                >
                                    contact page
                                </ReactRouterDomLink>.
                            </Typography>
                        </>
                    </RenderSection>
                </div>
            </div>
        </div>
    );
}