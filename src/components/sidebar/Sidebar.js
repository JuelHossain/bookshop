import React from "react";

const Sidebar = () => {
  const navbar = [
    { name: "home", option: true, optionSelected: true, nested: [] },
    {
      name: "books",
      option: true,
      optionSelected: false,
      nested: [],
    },
    {
      name: "arabian",
      option: true,
      optionSelected: false,
      nested: [],
    },
    {
      name: "option",
      option: false,
      optionSelected: false,
      nested: [],
    },
    {
      name: "nested Option",
      option: false,
      optionSelected: false,
      nested: ["nested Item", "nested item"],
    },
  ];
  const clickHandler = (nested) => {
    if (nested.length > 0) {
    }
  };
  return (
    <div className="bg-yellow-500 w-60 h-full p-6">
      <h1>很高兴认识你</h1>
      <div className="flex flex-col gap-2">
        {navbar.map((nav) => {
          const { name, option, optionSelected, nested } = nav;
          return (
            <>
              <div className="flex justify-between items-center">
                <p>{name}</p>
                {option && (
                  <span
                    className={`${
                      optionSelected && " bg-black "
                    } px-2 rounded-lg text-xs border border-black `}
                  >
                    click
                  </span>
                )}
                {nested.length > 0 && (
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              {nested.length > 0 && (
                <div className="flex flex-col gap-2 ml-3">
                  {nested.map((nest) => (
                    <p>{nest}</p>
                  ))}
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
