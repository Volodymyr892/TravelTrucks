import ac from "../../assets/ac.svg"
import automatic from "../../assets/automatic.svg"
import kitchen from "../../assets/kitchen.svg";
import tv from "../../assets/tv.svg";
import bathroom from "../../assets/bathroom.svg";
import css from "./VehicleAuto.module.css"
import { useState } from "react";

export  default function VehicleAuto({onChange, selectedValues=[]}) {
  const [checkedItems, setCheckedItems] = useState(new Set(selectedValues));

  // Функція для обробки зміни стану чекбокса
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    const newCheckedItems = new Set(checkedItems);
    if (checked) {
      newCheckedItems.add(value);
    } else {
      newCheckedItems.delete(value);
    }

    setCheckedItems(newCheckedItems);
    onChange(e); // Викликаємо onChange з батьківського компонента
  };
    return(
        <div className={css.container}>
            <h2 className={css.title}>Vehicle equipment</h2>
            <hr className={css.line}/>
                 <ul className={css.list}>
  <li className={css.item}>
    <label className={`${css.label} ${checkedItems.has("AC") ? css.checked : ""}`}>
        <input
         type="checkbox" 
         name="equipment" 
         value="AC"
         onChange={handleCheckboxChange}
         checked={checkedItems.has("AC")}
        className={css.input}
         />
        <img className={css.img} src={ac} alt="AC" />
        <p className={css.ac}>AC</p>
    </label>
  </li>
  <li className={css.item}>
    <label className={`${css.label} ${checkedItems.has("transmission") ? css.checked : ""}`}>
      <input 
      type="checkbox" 
      name="equipment" 
      value="transmission"
      onChange={handleCheckboxChange}
      checked={checkedItems.has("transmission")}
      className={css.input}
      />
      <img className={css.img} src={automatic} alt="automatic" />
      <p className={css.ac}>Automatic</p>
    </label>
  </li>
  <li className={css.item}>
    <label className={`${css.label} ${checkedItems.has("kitchen") ? css.checked : ""}`}>
      <input 
      type="checkbox" 
      name="equipment" 
      value="kitchen"
      onChange={handleCheckboxChange}
      checked={checkedItems.has("kitchen")}
      className={css.input}
      />
      <img className={css.img} src={kitchen} alt="kitchen" />
      <p className={css.ac}>Kitchen</p>
    </label>
  </li>
  <li className={css.item}>
    <label className={`${css.label} ${checkedItems.has("TV") ? css.checked : ""}`}>
      <input 
      type="checkbox" 
      name="equipment" 
      value="TV"
      onChange={handleCheckboxChange}
      checked={checkedItems.has("TV")}
      className={css.input}
      />
      <img className={css.img} src={tv} alt="TV" />
      <p className={css.ac}>TV</p>
    </label>
  </li>
  <li className={css.item}>
    <label className={`${css.label} ${checkedItems.has("bathroom") ? css.checked : ""}`}>
      <input 
      type="checkbox" 
      name="equipment" 
      value="bathroom"
      onChange={handleCheckboxChange}
      checked={checkedItems.has("bathroom")}
      className={css.input}
      />
      <img className={css.img} src={bathroom} alt="Bathroom" />
      <p className={css.ac}>Bathroom</p>
    </label>
  </li>
</ul>
        </div>
    )
}