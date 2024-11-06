import ac from "../../assets/ac.svg"
import automatic from "../../assets/automatic.svg"
import kitchen from "../../assets/kitchen.svg";
import tv from "../../assets/tv.svg";
import bathroom from "../../assets/bathroom.svg";

export  default function VehicleAuto({onChange}) {
    return(
        <div>
            <h2>Vehicle equipment</h2>
            <hr/>
                 <ul>
  <li>
    <label>
      <input
       type="checkbox" 
       name="equipment" 
       value="AC"
       onChange={(e) => onChange(e.target.value, e.target.checked)}
       />
      <img src={ac} alt="AC" />
      <p>AC</p>
    </label>
  </li>
  <li>
    <label>
      <input 
      type="checkbox" 
      name="equipment" 
      value="transmission"
      onChange={(e) => onChange(e.target.value, e.target.checked)}
      />
      <img src={automatic} alt="automatic" />
      <p>Automatic</p>
    </label>
  </li>
  <li>
    <label>
      <input 
      type="checkbox" 
      name="equipment" 
      value="kitchen"
      onChange={(e) => onChange(e.target.value, e.target.checked)}
      />
      <img src={kitchen} alt="kitchen" />
      <p>Kitchen</p>
    </label>
  </li>
  <li>
    <label>
      <input 
      type="checkbox" 
      name="equipment" 
      value="TV"
      onChange={(e) => onChange(e.target.value, e.target.checked)}
      />
      <img src={tv} alt="TV" />
      <p>TV</p>
    </label>
  </li>
  <li>
    <label>
      <input 
      type="checkbox" 
      name="equipment" 
      value="bathroom"
      onChange={(e) => onChange(e.target.value, e.target.checked)}
      />
      <img src={bathroom} alt="Bathroom" />
      <p>Bathroom</p>
    </label>
  </li>
</ul>
        </div>
    )
}