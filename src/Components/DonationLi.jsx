export default function DonationLi(props) {
  const { donations } = props;

  const DonationLi = donations.map((donation) => {
    return (
      <li>
        <span>
          {donation.name} donated {donation.amount}
        </span>
        {donation.caption}
      </li>
    );
  });
}
