import "./Categories.css";
import { categories } from "../../Data/data"

const Categories = () => {
  return (
    <div className="categories" aria-label="Job categories">
      {categories.map((category, index) => (
        <div key={index} className="category-card" tabIndex={0} role="button" aria-label={`${category.name}, ${category.jobsNumber} new jobs`}>
          <div>
            <img src={category.icon} alt={`${category.name} icon`} loading="lazy" />
          </div>
          <p className="category-name">{category.name}</p>
          <p className="jobs-number">{`(${category.jobsNumber} new jobs)`}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;