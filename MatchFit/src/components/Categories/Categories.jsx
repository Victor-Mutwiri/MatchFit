import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import './Categories.css';

const Categories = ({ onSelectCategory }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const fetchCategory = async () => {
    try {
      const baseUrl = import.meta.env.DEV
        ? import.meta.env.VITE_DEV_API_BASE_URL
        : import.meta.env.VITE_PROD_API_BASE_URL;
      const { data: { data } } = await axios.get(`${baseUrl}/job-industries`);

      // Save to both state and localStorage
      setCategory(data);
      localStorage.setItem("jobCategories", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Check if categories are already in localStorage
    const savedCategories = localStorage.getItem("jobCategories");
    if (savedCategories) {
      setCategory(JSON.parse(savedCategories));
    } else {
      fetchCategory();
    }
  }, []);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div className="categories-container">
      <h3 className="categories-title">Filter by Industry</h3>
      <div className="categories-list">
        {category.map((item) => (
          <div
            key={item.id}
            className={`category-item ${selectedCategoryId === item.id ? 'selected' : ''}`}
            onClick={() => handleSelectCategory(item.id)}
          >
            <h5>{item.attributes.Industry}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};

export default Categories;
