import { Box, Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Link as ReactRouterDomLink } from "react-router-dom";

export default function PrivacyPolicy({
  lastUpdated = "November 4, 2025",
  contactEmail = "contact@run4rights.org",
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

    function RenderSection({title, children}:  {title: string, children: ReactElement}) {
        return (
            <div>
                <Typography color="primary" variant="h4" id="changes">{title}</Typography>
                <div className="p-4">
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

            <div className="flex justify-center grow overflow-scroll my-8" id="right-side">
                <div className="w-5/6 flex flex-col gap-8">
                    <Typography className="block md:hidden" fontWeight={600} variant="h3" color="primary">
                        Privacy Policy
                    </Typography>
                        <div>
                            <Typography color="primary" variant="body2">
                                Run4Rights ("we," "our," or "us") is a nonprofit-driven platform that hosts fundraising events where participants donate to support charitable causes. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your information.
                            </Typography>
                        </div>
                        <RenderSection title={"1. Information We Collect"}>
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
                        <RenderSection title={"2. How We Use Information"}>
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
                        <RenderSection title={"3. Data Storage and Security"}>
                            <List>
                                <ListItem><Typography color="primary">Donor payment data is handled entirely by Stripe.</Typography></ListItem>
                                <ListItem><Typography color="primary">Runner data is stored securely and used only for the duration of event needs.</Typography></ListItem>
                                <ListItem><Typography color="primary">We implement reasonable technical and organizational measures to protect data from unauthorized access, disclosure, or misuse.</Typography></ListItem>
                            </List>
                        </RenderSection>
                        <RenderSection title={"4. Third-Party Services"}>
                            <>
                                <Typography color="primary" variant="body2">We use third-party services to operate Run4Rights, including: </Typography>
                                <List>
                                    <ListItem><Typography color="primary"><strong>Stripe</strong> — payment processing</Typography></ListItem>
                                    <ListItem><Typography color="primary"><strong>Garmin</strong> — runner activity tracking</Typography></ListItem>
                                </List>
                                <Typography color="primary" variant="body2">These services have their own privacy policies that govern how they handle your information. </Typography>
                            </>
                        </RenderSection>
                        <RenderSection title={"5. Children’s Privacy"}>
                            <Typography color="primary" variant="body2">Run4Rights is not intended for children under 13, and we do not knowingly collect information from children. </Typography>
                        </RenderSection>
                        <RenderSection title={"6. Your Rights"}>
                            <Typography color="primary" variant="body2">
                                If you are a registered runner, you may contact us to request deletion of your data or to revoke access to your Garmin account. We will respond within a reasonable time.
                            </Typography>
                        </RenderSection>
                        <RenderSection title={"7. Changes to This Policy"}>
                            <Typography color="primary" variant="body2">
                                We may update this Privacy Policy from time to time. When we do, we will post the updated version here with a new “Last updated” date.
                            </Typography>
                        </RenderSection>
                        <RenderSection title={"8. Contact Us"}>
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
