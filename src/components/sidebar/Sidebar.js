import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { width } = useWindowDimensions();
  useEffect(() => {
    if (width < 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [width]);
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

  return (
    open && (
      <div className="bg-yellow-500 w-60 h-full p-6 flex flex-col justify-between ">
        <div className="space-y-3">
          <h1>很高兴认识你</h1>
          <div className="flex flex-col gap-2">
            {navbar.map((nav) => {
              const { name, option, optionSelected, nested } = nav;
              return (
                <>
                  <div className="flex justify-between items-center">
                    <p className="capitalize">{name}</p>
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
        <div className="flex gap-1 items-center">
          <svg
            className="w-10 h-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p className="">hello how </p>
            <p className="text-xs">chung chao</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
