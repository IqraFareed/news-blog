import React from "react";
import Divider from "./Divider";

const Footer = () => {
  return (
    <div>
      <Divider />
      <div className="flex justify-between w-[80vw]">
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-2">
            <li className="h4">About The Post</li>
            <li className="h4">Newsroom Policies & Standards</li>
            <li className="h4">Diversity & Inclusion </li>
            <li className="h4"> Careers</li>
            <li className="h4"> Media & Community Relations</li>
            <li className="h4">WP Creative Group</li>
            <li className="h4"> Accessibility Statement </li>
            <li className="h4">Sitemap</li>
          </ul>
        </div>
        <div>
          {" "}
          <h3 className="font-bold">Get The Post</h3>
          <ul className="mt-2">
            <li className="h4">Become a Subscriber</li>
            <li className="h4">Gift Subscriptions</li>
            <li className="h4">Mobile & Apps </li>
            <li className="h4"> Newsletters & Alerts</li>
            <li className="h4"> Washington Post Live</li>
            <li className="h4">WP Creative Group</li>
            <li className="h4">Reprints & Permissions</li>
            <li className="h4">Post Store</li>
            <li className="h4">Books & E-Books</li>
            <li className="h4">Print Archives (Subscribers Only)</li>
            <li className="h4"> Today’s Paper </li>
            <li className="h4">Public Notices</li>
            <li className="h4">Coupons</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <ul className="mt-2">
            {" "}
            <li className="h4">Contact the Newsroom</li>
            <li className="h4">Contact Customer Care</li>
            <li className="h4">Contact the Opinions Team</li>
            <li className="h4">Advertise</li>
            <li className="h4">Licensing & Syndication</li>
            <li className="h4">Request a Correction</li>
            <li className="h4">Send a News Tip</li>
            <li className="h4">Report a Vulnerability</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Terms of Use</h3>
          <ul>
            <li className="h4"> Digital Products Terms of Sale</li>
            <li className="h4">Print Products Terms of Sale</li>
            <li className="h4">Terms of Service</li>
            <li className="h4">Privacy Policy</li>
            <li className="h4">Cookie Settings</li>
            <li className="h4">Submissions & Discussion Policy</li>
            <li className="h4">RSS Terms of Service</li>
            <li className="h4">Ad Choices</li>
          </ul>
        </div>
      </div>
      <Divider />
      <div className="flex justify-center items-center text-[12px] font-medium">
        washingtonpost.com © 1996-2024 The Washington Post
      </div>
    </div>
  );
};

export default Footer;
