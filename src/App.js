import { useState } from "react";

export default function App() {
  const [inputed, setInputed] = useState("");
  const [theme, setTheme] = useState(true);
  function ButtonClick(event) {
    setInputed((value) => value + event.target.value);
  }

  function Evaluate() {
    try {
      let valued = eval(inputed);
      setInputed(valued);
    } catch (error) {
      setInputed("Invalid Operation");
    }
  }

  function Reset() {
    setInputed("");
  }
  function Del() {
    let valued = inputed.slice(0, -1);
    setInputed(valued);
  }
  return (
    <div
      className={`${
        theme ? "bg-very_dark_blue_main" : "bg-light_gray"
      } h-full md:h-screen w-screen md:flex md:items-center md:justify-center`}
    >
      <div
        className={`flex flex-col h-full p-8 ${
          theme ? "bg-very_dark_blue_main" : "bg-light_gray"
        }`}
      >
        <Nav theme={theme} switcher={setTheme} />
        <div className="flex flex-col ">
          <Display display={inputed} theme={theme} />
          <Buttons
            onClick={ButtonClick}
            equal={Evaluate}
            onReset={Reset}
            onDelete={Del}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

function Nav({ theme, switcher }) {
  return (
    <div className="w-full flex justify-between mb-10">
      <div
        className={`font-sans font-bold text-4xl ${
          theme ? "text-white" : "text-very_dark_grayish_yellow"
        }`}
      >
        calc
      </div>

      <div className="flex space-x-8 font-sans items-center">
        <div
          className={`h-full  flex flex-col justify-end  font-sans text-md font-bold ${
            theme ? "text-white" : "text-very_dark_grayish_yellow"
          }`}
        >
          <p>THEME</p>
        </div>
        <div className=" flex flex-col ">
          <div
            className={`flex px-1 space-x-6 w-full font-sans font-bold ${
              theme ? "text-white" : "text-very_dark_grayish_yellow"
            }`}
          >
            <p>1</p>
            <p>2</p>
          </div>
          <label className="inline-flex items-center me-5 cursor-pointer">
            <input
              type="checkbox"
              name=""
              id=""
              className="sr-only peer"
              value={theme}
              onChange={() => switcher((t) => !t)}
            />
            <div
              className={`relative w-11 h-6 ${
                theme ? "bg-very_dark_toggle_blue" : "bg-gray-100"
              } rounded-full peer peer-focus:ring-4 peer-focus:ring-very_dark_toggle_blue dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-dark_red after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-red after:border-dark_red after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-grayish_red`}
            ></div>
          </label>
        </div>
      </div>
    </div>
  );
}

function Display({ display, theme }) {
  return (
    <input
      type="text"
      name=""
      id=""
      value={display}
      className={`rounded-xl py-8 font-extrabold text-4xl ${
        theme
          ? "bg-very_dark_bg_blue text-white"
          : "bg-very_light_gray text-very_dark_grayish_yellow"
      } indent-10`}
      readOnly
    />
  );
}

function Buttons({ onClick, equal, onReset, onDelete, theme }) {
  return (
    <div
      className={`flex flex-col  ${
        theme ? "bg-very_dark_bg_blue" : "bg-grayish_red"
      } mt-10 rounded-xl`}
    >
      <div className="grid grid-cols-4 gap-4 p-8 ">
        <Button onClick={onClick}>7</Button>
        <Button onClick={onClick}>8</Button>
        <Button onClick={onClick}>9</Button>
        <button
          className={`${
            theme
              ? "bg-dark_blue shadow shadow-dark_sblue"
              : "bg-dark_moderate_cyan shadow-very_dark_cyan"
          } px-2 py-2 rounded-xl font-sans font-bold text-white text-2xl`}
          onClick={onDelete}
        >
          Del
        </button>
        <Button onClick={onClick}>4</Button>
        <Button onClick={onClick}>5</Button>
        <Button onClick={onClick}>6</Button>
        <Button onClick={onClick}>+</Button>
        <Button onClick={onClick}>1</Button>
        <Button onClick={onClick}>2</Button>
        <Button onClick={onClick}>3</Button>
        <Button onClick={onClick}>-</Button>
        <Button onClick={onClick}>.</Button>
        <Button onClick={onClick}>0</Button>
        <Button onClick={onClick}>/</Button>
        <Button onClick={onClick}>X</Button>
      </div>
      <div className="flex justify-between w-full space-x-4 px-8 py-1 mb-5">
        <button
          className={`w-1/2 ${
            theme
              ? "bg-dark_blue shadow shadow-dark_sblue"
              : "bg-dark_moderate_cyan shadow-very_dark_cyan"
          } px-2 py-2 rounded-xl font-sans font-bold text-white text-2xl`}
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className={`w-1/2 ${
            theme ? "bg-red shadow-dark_red" : "bg-orange shadow-dark_orange"
          }  px-2 md:py-2  py-6 rounded-xl font-sans font-bold text-white text-2xl`}
          onClick={equal}
        >
          =
        </button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      className="bg-light_grayish_orange  shadow btn shadow-grayish_orange px-2 md:py-2  py-2 rounded-xl  font-sans font-bold text-very_dark_bluet text-2xl"
      value={children === "X" ? "*" : children}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
}
