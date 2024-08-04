import "./Section.css";
import { Item } from "../Shared/Item/Item";
export const Section = ({ title, data }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      <div className="section-item">
        {data?.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};
