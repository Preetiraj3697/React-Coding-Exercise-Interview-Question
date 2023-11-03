import {useEffect, useState} from 'react';
const countries = [
    {
      name:"india",value:"IN",cities:['Delhi','Mumbai']
    },
    {
        name:"Pakistan",value:"PK",cities:['Lahore','Karachi']
    },
    {
        name:"Bangladesh",value:"BG",cities:['Dhaka','Chittagong']
    },
]
export default function DropDown(){
    const [country,setCountry] = useState();

    return (
        <>
        <select value={country} onChange={(e)=> setCountry(e.target.value)}>
            <option>Select Country</option>
            {countries.map((item,index)=>{
                return(
                    <option key={index} value={index}>{item.name}</option>
                )
            })}
        </select>
        <select>
            <option>Select cities</option>
            {countries[country] && countries[country].cities.map((item,index)=>{
                return(
                    <option key={index} value={item}>{item}</option>
                )
            })}
        </select>
        </>
    )
}


// export default function DropDown(){
//     const [selectedCountry, setSelectedCountry] = useState("");
//     const [states, setStates] = useState([]);
//     const [selectedState, setSelectedState] = useState("");
  
//     const handleCountryChange = (e) => {
//       const selectedCountryValue = e.target.value;
//       setSelectedCountry(selectedCountryValue);
//       const selectedCountryCities = countries.find(
//         (country) => country.value === selectedCountryValue
//       ).cities;
//       setStates(selectedCountryCities);
//       setSelectedState("");
//     };
  
//     const handleStateChange = (e) => {
//       const selectedStateValue = e.target.value;
//       setSelectedState(selectedStateValue);
//     };
  
//     return (
//       <div>
//         <select
//           value={selectedCountry}
//           onChange={handleCountryChange}
//         >
//           {countries.map((country) => (
//             <option key={country.value} value={country.value}>
//               {country.name}
//             </option>
//           ))}
//         </select>
//         <select
//           value={selectedState}
//           onChange={handleStateChange}
//         >
//           {states.map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
// }