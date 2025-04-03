import { DynamicIcon } from "lucide-react/dynamic";

const SkillsLanguages = ({ logo = "camera", name, items }) => {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex items-center gap-4">
        <DynamicIcon
          name={logo}
          color="oklch(93.92% 0.0648 128.43)"
          size={48}
          className="p-2 rounded-lg bg-gradient-primary-to-secondary "
        />
        <p className="text-skills">{name}</p>
      </div>
      <div>
        <ul className="flex flex-col gap-4 mt-4 md:grid md:grid-cols-3 md:items-center">
          {items.map((item, index) => (
            <li className="flex bg-accent4 p-4 px-8 rounded-xl" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsLanguages;
