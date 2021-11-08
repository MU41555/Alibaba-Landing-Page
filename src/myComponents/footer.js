import { Grid } from "@mui/material";
import Button from '@mui/material/Button';

export default function Footer() {
    return (
        <Grid className="bg-danger text-white text-center footer">
            <Grid className="footer_1">
                <p>Trade Alert - Delivering the latest product trends and industry news straight to your inbox.</p>
            </Grid>
            <Grid className="footer_2 req_3">
                    <input size="36" type="email" placeholder="Your email" name="" id="" /><Button variant="contained">Subscribe</Button>
                    <p>We’ll never share your email address with a third-party.</p>
            </Grid>
            <Grid className="footer_3">
                <Grid className="footer_4">
                    <ul>
                        <li className="footer_5">Customer Services</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies & Rules</li>
                        <li>Get Paid for Your Feedback</li>
                    </ul>
                </Grid>
                <Grid className="footer_4">
                    <ul>
                        <li className="footer_5">About Us</li>
                        <li>About Alibaba.com</li>
                        <li>About Alibaba Group</li>
                        <li>Sitemap</li>
                    </ul>
                </Grid>
                <Grid className="footer_4">
                    <ul>
                        <li className="footer_5">Source on Alibaba.com</li>
                        <li>Resources</li>
                        <li>All Categories</li>
                        <li>Request for Quotation</li>
                        <li>Ready to Ship</li>
                        <li>Buyer Partners</li>
                    </ul>
                </Grid>
                <Grid className="footer_4">
                    <ul>
                        <li className="footer_5">Sell on Alibaba.com</li>
                        <li>Supplier Memberships</li>
                        <li>Learning Center</li>
                        <li>Partner Program</li>
                    </ul>
                </Grid>
                <Grid className="footer_4">
                    <ul>
                        <li className="footer_5">Trade Services</li>
                        <li>Trade Assurance</li>
                        <li>Business Identity</li>
                        <li>Logistics Service</li>
                        <li>Production Monitoring & Inspection Services</li>
                        <li>Letter of Credit</li>
                    </ul>
                </Grid>
            </Grid>
            <Grid className="text-white"><br /></Grid>
            <Grid>
                <Grid>
                    <p>Download : </p>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </Grid>
                <Grid>
                    <p>Alibaba Supplier App : </p>
                    <img src="" alt="" />
                </Grid>
                <Grid>
                    <p>Follow Us : Facebook</p>
                </Grid>
            </Grid>
            <Grid>
                <img src="https://s.alicdn.com/@g/sc/footer/0.0.4/sc-footer/src/vers1x.png" alt="" />
                <p> Alibaba.com Site: International - Español - Português - Deutsch - Français - Italiano - हिंदी - Pусский - 한국어 - 日本語 - اللغة العربية - ภาษาไทย - Türk - Nederlands - tiếng Việt - Indonesian - עברית</p>
            </Grid>
            <Grid>
                <p>Alibaba Group | Taobao Marketplace | Tmall.com | Juhuasuan | AliExpress | Alibaba.com | 1688.com | Alimama | Fliggy | Tmall Taobao World</p>
                <p>Alibaba Cloud | AliOS | AliTelecom | Autonavi | UCWeb | Umeng | Xiami | DingTalk | Alipay | Lazada | Alibaba Security</p>
            </Grid>
            <Grid>
                <p>Browse Alphabetically: Onetouch | Showroom | Country Search | Suppliers | Affiliate</p>
            </Grid>
            <Grid>
                <p>Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
            </Grid>
            <Grid>
            <Grid>
                <img src="https://img.alicdn.com/tfs/TB1VtZtebH1gK0jSZFwXXc7aXXa-65-70.gif" alt="" />
                <p>© 1999-2021 Alibaba.com. All rights reserved.</p>
            </Grid>
            <Grid>
                <img src="https://img.alicdn.com/tfs/TB1QhYprKT2gK0jSZFvXXXnFXXa-20-20.png" alt="" />
                <p>浙公网安备 33010002000092号 浙B2-20120091-4</p>
            </Grid>
            </Grid>
        </Grid>
    );
}