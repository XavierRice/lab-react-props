import { useState } from "react";

const DonationForm = (props) => {
  
  const [ nameTag, setNameTag] = useState("")
  const [ caption, setCaption] = useState("")
  const [ amount, setAmount] = useState(0)

  function handleNameTag(event){
    setNameTag(event.target.value)
  }
  
  function handleCaption(event){
    setCaption(event.target.value)
  }
 
  function handleAmount(event){
    setAmount(event.target.value)
  }
  
  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <>
      <section className="donation">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              name="name"
              type="text"
              onChange={handleNameTag}
              placeholder="Your name..."
            />
          </label>
          <label htmlFor="caption">
            Caption
            <input
              id="caption"
              name="caption"
              type="text"
              onChange={handleCaption}
              placeholder="Add a brief message..."
            />
          </label>
          <label htmlFor="amount">
            Amount
            <input 
            id="amount" 
            name="amount" 
            type="number" 
            onChange={handleAmount}
            placeholder="0" />
          </label>
          <button 
          type="submit">
            Donate!</button>
        </form>
      </section>
    </>
  );
};

export default DonationForm;
