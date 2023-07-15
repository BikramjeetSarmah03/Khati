import { useEffect, useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import StarsIcon from "@mui/icons-material/Stars";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpIcon from "@mui/icons-material/Help";
import paymentMethods from "../../../assets/images/payment-methods.svg";
import { useLocation } from "react-router-dom";

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "https://www.flipkart.com/helpcentre",
      },
      {
        name: "About Us",
        redirect: "https://www.flipkart.com/about-us",
      },
      {
        name: "Careers",
        redirect: "https://www.flipkartcareers.com",
      },
      {
        name: "Khati Stories",
        redirect: "https://stories.flipkart.com",
      },
      {
        name: "Press",
        redirect: "https://stories.flipkart.com/category/top-stories/news",
      },
      {
        name: "Khati Wholesale",
        redirect: "https://www.flipkartwholesale.com",
      },
      {
        name: "Corporate Information",
        redirect: "https://www.flipkart.com/corporate-information",
      },
    ],
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "https://www.flipkart.com/pages/payments",
      },
      {
        name: "Shipping",
        redirect: "https://www.flipkart.com/pages/shipping",
      },
      {
        name: "Cancellation & Returns",
        redirect:
          "https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG",
      },
      {
        name: "FAQ",
        redirect:
          "https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG",
      },
    ],
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "https://www.flipkart.com/pages/returnpolicy",
      },
      {
        name: "Terms Of Use",
        redirect: "https://www.flipkart.com/pages/terms",
      },
      {
        name: "Security",
        redirect: "https://www.flipkart.com/pages/paymentsecurity",
      },
      {
        name: "Privacy",
        redirect: "https://www.flipkart.com/pages/privacypolicy",
      },
      {
        name: "Sitemap",
        redirect: "https://www.flipkart.com/sitemap",
      },
      {
        name: "EPR Compliance",
        redirect: "https://www.flipkart.com/pages/ewaste-compliance-tnc",
      },
    ],
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "https://www.facebook.com/flipkart",
      },
      {
        name: "Twitter",
        redirect: "https://twitter.com/flipkart",
      },
      {
        name: "YouTube",
        redirect: "https://www.youtube.com/flipkart",
      },
    ],
  },
];

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"));
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="flex flex-col w-full px-4 py-1 mt-20 overflow-hidden text-xs text-white border-b border-gray-600 sm:py-4 sm:px-12 bg-primary-darkBlue sm:flex-row">
            <div className="flex flex-col w-full sm:w-7/12 sm:flex-row">
              {footerLinks.map((el, i) => (
                <div
                  className="flex flex-col w-full gap-2 my-3 ml-5 sm:w-1/5 sm:my-6"
                  key={i}>
                  <h2 className="mb-2 uppercase text-primary-grey">
                    {el.title}
                  </h2>
                  {el.links.map((item, i) => (
                    <div className="cursor-not-allowed hover:underline" key={i}>
                      {item.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="hidden w-1 mt-6 mr-5 border-l border-gray-600 h-36 sm:block"></div>
            <div className="flex flex-col justify-between w-full gap-2 mx-5 my-6 sm:w-5/12 sm:mx-0 sm:flex-row sm:gap-0">
              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">
                  Mail Us:{" "}
                  <a href="mailto:dev.bikramjeet@gmail.com">
                    dev.bikramjeet@gmail.com
                  </a>
                </h2>
                <p className="mt-2 leading-5">
                  Khati.vercel.app
                  <br />
                  Tezpur, 784001,
                  <br />
                  Assam, India
                </p>
              </div>

              <div className="w-full sm:w-1/2">
                <h2 className="text-primary-grey">
                  Registered Office Address:
                </h2>
                <p className="mt-2 leading-5">
                  Khati.vercel.app
                  <br />
                  Tezpur, 784001,
                  <br />
                  Assam, India
                  <br />
                  Telephone:{" "}
                  <a className="text-primary-blue" href="tel:8486009815">
                    8486009815
                  </a>
                </p>
              </div>
            </div>
          </footer>
          {/* <!-- footer ends --> */}

          <div className="items-center justify-between hidden w-full px-16 py-6 text-sm text-white bg-primary-darkBlue sm:flex">
            <div className="flex items-center gap-2 cursor-not-allowed">
              <span className="text-yellow-400">
                <WorkIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Sell On Khati
            </div>
            <div className="flex items-center gap-2 cursor-not-allowed">
              <span className="text-yellow-400">
                <StarsIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Advertise
            </div>
            <div className="flex items-center gap-2 cursor-not-allowed">
              <span className="text-yellow-400">
                <CardGiftcardIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Gift Cards
            </div>
            <div className="flex items-center gap-2 cursor-not-allowed">
              <span className="text-yellow-400">
                <HelpIcon sx={{ fontSize: "20px" }} />
              </span>{" "}
              Help Center
            </div>

            <span>&copy; {new Date().getFullYear()} Khati.vercel.app</span>
            <img draggable="false" src={paymentMethods} alt="Card Payment" />
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
