import { Footer } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 bg-red-100 dark:bg-black">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="data:image/png;base64,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"
              alt=" Logo"
              name="Wedding wise"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Events</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                <Footer.Link href="#">React</Footer.Link>
                <Footer.Link href="#">Redux</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/ChandraBose-11">
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="#">Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
          <Footer.Copyright
            href="#"
            by="ChandraBose™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon
              href="https://github.com/ChandraBose-11"
              icon={BsGithub}
            />
            <Footer.Icon href="#" icon={BsDribbble} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
