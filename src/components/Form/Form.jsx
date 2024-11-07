export default function Form() {
    return(
        <div >
  <h2>Book your campervan now</h2>
  <p>Stay connected! We are always ready to help you.</p>
  <form>
    <input type="text" placeholder="Name*" required/>
    <input type="email" placeholder="Email*" required/>
    <input type="date" placeholder="Booking date*" required/>
    <textarea placeholder="Comment"></textarea>
    <button type="submit">Send</button>
  </form>
</div>
    )
}