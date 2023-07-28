import DonationLi from "./DonationLi";

const RecentDonations = (props) => {
  return (
    <section>
      <h2>Recent Donations</h2>
      <ul><DonationLi donations = {donations}/></ul>
    </section>
  );
};

export default RecentDonations