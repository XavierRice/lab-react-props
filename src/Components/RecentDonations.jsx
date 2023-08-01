import DonationLi from "./DonationLi";

const RecentDonations = ({donationsArray}) => {
  return (
    <section>
      <h2><em>Recent Donations</em></h2>
      <ul><DonationLi donations = {donationsArray}/></ul>
    </section>
  );
};

export default RecentDonations