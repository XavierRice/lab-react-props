const Progress = (props) => {
  const { donations, targetAmount } = props;

  let total = 0;
  let count = 0;
  for (let i = 0; i < donations.length; i++) {
    count = i + 2;
    total += donations[i].amount;
  }

  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">{total}</span> of
        <span className="secondary"> ${targetAmount}</span>
      </h2>
      <h3>
        You could be donation <span class="secondary">#{count}!!!</span>
      </h3>
    </section>
  );
};

export default Progress;
