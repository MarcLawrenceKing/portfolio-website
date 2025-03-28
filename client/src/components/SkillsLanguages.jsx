import { DynamicIcon } from "lucide-react/dynamic";

const SkillsLanguages = ({ logo = "camera", name, items }) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <DynamicIcon name={logo} color="white" size={22} />
        <p className="text-hero1">{name}</p>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsLanguages;
