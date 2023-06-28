import FooterItem from "./FooterItem/FooterItem";

const about = {
  title: "Details",
  data: [
    "Company Name: XYZ Consulting Services",
    "Address: 123 Main Street, Anytown, USA",
    "Phone: (555) 123-4567",
    "Email: info@xyzconsulting.com",
    "Website: www.xyzconsulting.com",
  ],
};

const services = {
  title: "Services",
  data: ["Consulting", "Planning", "Risk Management"],
};

const companyRating = {
  title: "CompanyRating",
  data: [
    "Financial health of the company",
    "Adequacy of business processes",
    "Effectiveness and efficiency of employees",
    "Customer satisfaction",
  ],
};

const network = {
  title: "Folow us",
  data: ["LinkedIn", "Facebook", "Instagram"],
};

const FooterItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 pt-16">
      <FooterItem dataObj={about} />
      <FooterItem dataObj={services} />
      <FooterItem dataObj={companyRating} />
      <FooterItem dataObj={network} />
    </div>
  );
};

export default FooterItemsContainer;
