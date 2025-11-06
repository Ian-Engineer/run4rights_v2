import { Box, Link, List, ListItem, Typography } from "@mui/material";
import { ReactElement } from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";

export default function TermsOfService({
  lastUpdated = "November 4, 2025",
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
                <Typography color="primary" variant="h4" id={idName} sx={{ scrollMarginTop: 80 }}>{title}</Typography>
                <div className="p-4 pb-0">
                    {children}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-row overflow-hidden">
            <div className="w-fit md:block hidden sticky top-0" id='left-side'>
                <Box className="w-full h-1/2 max-h-96 flex flex-col-reverse text-right p-8" sx={{backgroundColor: "primary.main"}}>
                    <Typography variant="h1" fontWeight={700}>Privacy Policy</Typography>
                </Box>
                <aside className="hidden md:block">
                <div className="flex flex-col gap-8">
                    <Typography color="primary" variant="h6" className="w-full text-right">
                        Last updated: <time dateTime={formatDateAttr(lastUpdated)}>{lastUpdated}</time>
                    </Typography>
                    <nav className="flex flex-col gap-2 ml-4">
                    <Link href="#info">1. Information We Collect</Link>
                    <Link href="#use">2. How We Use Information</Link>
                    <Link href="#security">3. Data Storage & Security</Link>
                    <Link href="#third">4. Third-Party Services</Link>
                    <Link href="#children">5. Children’s Privacy</Link>
                    <Link href="#rights">6. Your Rights</Link>
                    <Link href="#changes">7. Changes</Link>
                    <Link href="#contact">8. Contact Us</Link>
                    </nav>
                </div>
                </aside>
            </div>

            <div className="flex justify-center grow" id="right-side">
                <div className="w-5/6 flex flex-col gap-8 overflow-scroll py-8 no-scrollbar" style={{ scrollBehavior: "smooth" }}>
                    <Typography className="block md:hidden" fontWeight={600} variant="h3" color="primary">
                        Privacy Policy
                    </Typography>
                    <Typography color="primary" variant="body2">
                        Run4Rights ("we," "our," or "us") is a nonprofit-driven platform that hosts fundraising events where participants donate to support charitable causes. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your information.
                    </Typography>
                    <RenderSection title={"1. Information We Collect"} idName="info">
                        <>
                            <Typography color="primary" variant="h5">Donors</Typography>
                            <Typography color="primary" variant="body2">
                                If you make a donation through Run4Rights, your payment is processed securely by <strong>Stripe</strong>. We <strong>do not collect or store</strong> donor personal or payment information on our servers. Stripe may collect information such as your name, email address, and payment details as required to complete the transaction. For details, please refer to Stripe’s own privacy policy.
                            </Typography>
                            <Typography color="primary" variant="h5">Runners</Typography>
                            <Typography color="primary" variant="body2">If you are a runner that has requested to participate and given approval from us, we collect only what’s necessary to manage your participation: </Typography>
                            <List>
                                <ListItem ><Typography color="primary">Name</Typography></ListItem>
                                <ListItem><Typography color="primary"><strong>Activity connection information</strong> required to connect to your Garmin account (e.g., OAuth tokens/credentials handled through Garmin’s API)</Typography></ListItem>
                            </List>
                            <Typography color="primary" variant="body2">We use this data solely to track your activity for event purposes. </Typography>
                            <Typography color="primary" variant="h6">Data minimization</Typography>
                            <Typography color="primary">Run4Rights stores no donor personal/payment data. Runner data is limited to name and Garmin connection information necessary to fetch activity.</Typography>
                        </>
                    </RenderSection>
                    <RenderSection title={"2. How We Use Information"} idName="use">
                        <>
                            <List>
                                <ListItem><Typography color="primary">Facilitate donations and show fundraising progress</Typography></ListItem>
                                <ListItem><Typography color="primary">Track runner activity for event mileage and milestones</Typography></ListItem>
                                <ListItem><Typography color="primary">Maintain secure connections with third-party services (e.g., Garmin)</Typography></ListItem>
                            </List>
                            <Typography color="primary" variant="body2">
                                We <strong>do not sell, rent, or share</strong> personal information with third parties for marketing or advertising.
                            </Typography>
                        </>
                    </RenderSection>
                    <RenderSection title={"3. Data Storage and Security"} idName="security">
                        <List>
                            <ListItem><Typography color="primary">Donor payment data is handled entirely by Stripe.</Typography></ListItem>
                            <ListItem><Typography color="primary">Runner data is stored securely and used only for the duration of event needs.</Typography></ListItem>
                            <ListItem><Typography color="primary">We implement reasonable technical and organizational measures to protect data from unauthorized access, disclosure, or misuse.</Typography></ListItem>
                        </List>
                    </RenderSection>
                    <RenderSection title={"4. Third-Party Services"} idName="third">
                        <>
                            <Typography color="primary" variant="body2">We use third-party services to operate Run4Rights, including: </Typography>
                            <List>
                                <ListItem><Typography color="primary"><strong>Stripe</strong> — payment processing</Typography></ListItem>
                                <ListItem><Typography color="primary"><strong>Garmin</strong> — runner activity tracking</Typography></ListItem>
                            </List>
                            <Typography color="primary" variant="body2">These services have their own privacy policies that govern how they handle your information. </Typography>
                        </>
                    </RenderSection>
                    <RenderSection title={"5. Children’s Privacy"} idName="children">
                        <Typography color="primary" variant="body2">Run4Rights is not intended for children under 13, and we do not knowingly collect information from children. </Typography>
                    </RenderSection>
                    <RenderSection title={"6. Your Rights"} idName="rights">
                        <Typography color="primary" variant="body2">
                            If you are a registered runner, you may contact us to request deletion of your data or to revoke access to your Garmin account. We will respond within a reasonable time.
                        </Typography>
                    </RenderSection>
                    <RenderSection title={"7. Changes to This Policy"} idName="changes">
                        <Typography color="primary" variant="body2">
                            We may update this Privacy Policy from time to time. When we do, we will post the updated version here with a new “Last updated” date.
                        </Typography>
                    </RenderSection>
                    <RenderSection title={"8. Contact Us"} idName="contact">
                        <>
                            <Typography color="primary" variant="body2">
                                If you have questions or concerns about this Privacy Policy, please contact us on our{" "}
                                <ReactRouterDomLink
                                    to="/contact"
                                    className="text-primary underline hover:opacity-80"
                                >
                                    contact page
                                </ReactRouterDomLink>.
                            </Typography>
                            <Typography color="primary" variant="body2" className="text-sm text-neutral-400">
                                For terms governing use of the site, please see our <a className="underline decoration-white/20 underline-offset-2 hover:decoration-white" href="/terms">Terms of Use</a>.
                            </Typography>
                        </>
                    </RenderSection>
                </div>
            </div>
        </div>
    );
}



/**
Terms & Conditions

Last Updated: November 2025

Welcome to Run4Rights (“we,” “our,” or “us”). These Terms & Conditions (“Terms”) govern your access to and use of the Run4Rights website, platform, services, and any related features (collectively, the “Service”). By using or accessing Run4Rights, you agree to be legally bound by these Terms.

If you do not agree with these Terms, you may not use Run4Rights.

1. Purpose of the Service

Run4Rights hosts fundraising events where participants donate to charitable organizations. Donations made through our platform support rotating nonprofit partners. Runner activity may contribute to event milestones, goals, or impact-based achievements.

2. Donations & Payment Processing

All donations are processed by third-party payment provider Stripe.
Run4Rights does not store donor payment information (credit card details, banking information, or billing addresses). All payment data is subject to Stripe’s Terms and Privacy Policy.

Donations are generally non-refundable.
If you believe a donation was made in error, you must contact us within 7 days of the transaction and we will review the request.

3. Runner Accounts & Activity Data

If you register as a runner, you may connect third-party services (such as Garmin) to track activity data.
You are responsible for ensuring your information is accurate and that you have the necessary rights to authorize access to connected accounts.

Run4Rights stores only the minimum necessary information to operate event features (e.g., your name and secure connection information used to link activity data). Removing access to your connected accounts may disable certain features.

4. Acceptable Use

By using the Service, you agree that you will not:

misuse or interfere with platform operations

attempt to harm, scrape, exploit, reverse engineer, or access data that does not belong to you

use the Service for fraudulent, hateful, illegal, or abusive conduct

attempt to bypass security, validation, or access controls

We reserve the right to suspend or terminate accounts or access for behavior that violates these Terms, or if we believe platform integrity is at risk.

5. Intellectual Property

All content, branding, graphics, design, trademarks, features, and functionality provided by Run4Rights are owned by Run4Rights or used with permission.
You may not copy, modify, sell, republish, or redistribute any part of the Service without written authorization.

6. Third-Party Links & Services

Run4Rights may contain links or integrations to third-party services (including Garmin, social login providers, nonprofit partner websites, and Stripe). These third parties are governed by their own terms and policies.
Run4Rights is not responsible for third-party content, privacy practices, or policies.

7. Disclaimers

Run4Rights provides the Service “as is” and “as available.”
We do not guarantee that:

the Service will be uninterrupted or error-free

third-party integrations will always function as expected

data or metrics displayed on the site (including donations or miles) will be perfectly accurate at all times

Nonprofits featured on the platform are independent organizations. Run4Rights is not responsible for their operations, usage of funds, or outcomes.

8. Limitation of Liability

To the maximum extent permitted by law, Run4Rights is not liable for any indirect, incidental, special, consequential, or punitive damages, nor any loss of data, use, revenue, goodwill, or profits arising from your use of the Service.

In no event will Run4Rights’ total liability exceed the amount you donated directly to Run4Rights through the platform (if applicable), or one hundred U.S. dollars (USD $100), whichever is greater.

9. Indemnification

You agree to defend, indemnify, and hold harmless Run4Rights from and against any claims, damages, liabilities, losses, and expenses (including legal fees) arising from:

your use or misuse of the Service

your violation of these Terms

your violation of any rights of a third party

10. Changes to These Terms

We may update, revise, or modify these Terms at any time.
Any changes will be posted on this page with the updated date. Your continued use of the Service after changes means you accept the revised Terms.

11. Governing Law

These Terms are governed by and interpreted according to the laws of the United States and the State of Colorado (or the user’s local equivalent jurisdiction if required by law).

12. Contact Us

If you have questions about these Terms, please contact us at:

Email: contact@run4rights.org
 */