import DonationLi from "./DonationLi";

const RecentDonations = ({donationsObj}) => {
  return (
    <section>
      <h2><em>Recent Donations</em></h2>
      <ul><DonationLi donations = {donationsObj}/></ul>
    </section>
  );
};

export default RecentDonations