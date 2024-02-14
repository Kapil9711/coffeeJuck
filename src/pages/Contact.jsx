import CopyWrite from "./navigation/CopyWrite";

export default function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <form action="">
        <label htmlFor="">Name </label>
        <input type="text" name="" id="" />
        <br />
        <br />
        <label htmlFor="">Email </label>
        <input type="text" name="" id="" />
        <br />
        <br />
        <label htmlFor="">Description</label>
        <br />
        <br />
        <input style={{ height: "150px" }} type="text" name="" id="" />
        <br />
        <br />
      </form>
      <button>Submit</button>
      <CopyWrite />
    </>
  );
}
