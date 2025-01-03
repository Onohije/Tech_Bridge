import { useState, useRef } from "react";
import SearchIcon from "../../assets/images/searchIcon.svg";
import LocationIcon from "../../assets/images/locationIcon.svg"
import "./Search.css";

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Locations");
  const locations = [
    "Nigeria",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "India",
  ];

  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log(event.target)
      setIsDropdownOpen(false);
    }
  };

  // Add event listener to detect outside clicks
  useState(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsDropdownOpen(!isDropdownOpen);
      event.preventDefault();
    } else if (event.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  return (
    <form className="search-form">
      <input
        type="search"
        placeholder="Enter keywords, skill, interest"
        className="search-input"
        aria-label="Search keywords, skills, or interests"
      />
      <div
        className="dropdown"
        ref={dropdownRef}
        tabIndex={0}
        role="combobox"
        aria-expanded={isDropdownOpen}
        aria-label="Location selector"
        onKeyDown={handleKeyDown}
      >
        <div
          className="dropdown-toggle"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={LocationIcon} alt="Location" className="dropdown-icon" />
          <p>{selectedLocation}</p>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu" role="listbox">
            {locations.map((location) => (
              <div
                key={location}
                className="dropdown-item"
                role="option"
                aria-selected={selectedLocation === location}
                onClick={() => handleLocationSelect(location)}
                onKeyDown={(event) =>
                  event.key === "Enter" && handleLocationSelect(location)
                }
                tabIndex={0}
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className="search-button"
        type="submit"
        aria-label="Submit search"
      >
        <img src={SearchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default Search;