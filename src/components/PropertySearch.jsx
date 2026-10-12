import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertySearch.css";
import {
  MapPin,
  House,
  Wallet,
  Search
} from "lucide-react";
function PropertySearch() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  function handleSearch() {
    const params = new URLSearchParams();
    if (location.trim()) {
      params.set("location", location.trim());
    }
    if (propertyType) {
      params.set("type", propertyType);
    }
    if (budget !== "") {
      params.set("budget", budget);
    }
    navigate(`/properties?${params.toString()}`);
  }
  return (
    <div className="property-search">
      <h4>Search available properties</h4>
      <div className="search-fields">
        <div className="search-input">
          <MapPin size={18} />
          <input
            type="text"
            placeholder="Enter an address, city, zip"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>
        <div className="search-input">
          <House size={18} />
          <select
            value={propertyType}
            onChange={(event) => setPropertyType(event.target.value)}
          >
            <option value="">Enter Property Type</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
        <div className="search-input">
          <Wallet size={18} />
          <input
            type="number"
            min="0"
            placeholder="Enter Your Budget"
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
          />
        </div>
        <button type="button" onClick={handleSearch}>
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
}
export default PropertySearch;



// import "./PropertySearch.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   MapPin,
//   House,
//   Wallet,
//   Search
// } from "lucide-react";

// function PropertySearch() {
//   const navigate = useNavigate();

// const [location, setLocation] = useState(””);
// const [propertyType, setPropertyType] = useState(””);
// const [budget, setBudget] = useState(””);

// function handleSearch() {
// const params = new URLSearchParams();

// if (location.trim()) {
//   params.set("location", location.trim());
// }

// if (propertyType) {
//   params.set("type", propertyType);
// }

// if (budget !== "" && Number(budget) >= 0) {
//   params.set("budget", budget);
// }

// const query = params.toString();

// navigate(query ? `/properties?${query}` : "/properties");
// }


//   return (
//     <div className="property-search">

//       <h4>Search available properties</h4>

//       <div className="search-fields">

//         <div className="search-input">
//           <MapPin size={18} />

//           <input
//             type="text"
//             placeholder="Enter an address, city, zip"
//           />
//         </div>

//         <div className="search-input">
//           <House size={18} />

//           <select defaultValue="">
//             <option value="" disabled>
//               Enter Property Type
//             </option>
//             <option value="Apartment">Apartment</option>
//             <option value="House">House</option>
//             <option value="Villa">Villa</option>
//             <option value="Commercial">Commercial</option>
//           </select>
//         </div>

//         <div className="search-input">
//           <Wallet size={18} />

//           <input
//             type="number"
//             placeholder="Enter Your Budget"
//           />
//         </div>

//         <button type="button">
//           <Search size={18} />
//           Search
//         </button>

//       </div>
//     </div>
//   );
// }

// export default PropertySearch;