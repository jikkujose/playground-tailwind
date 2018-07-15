import React from "react"

export function Card({ color = "yellow" }) {
  return (
    <div
      className={`container bg-${color}-lightest rounded-lg p-5 flex w-64`}
      style={{ width: "30rem" }}
    >
      <div className="image">
        <img
          src="https://hackclub.com/team/zach.jpg"
          className="rounded-full"
          style={{ width: "20rem" }}
          alt="Zach profile pic"
        />
      </div>
      <div className="text-container ml-3 font-sans">
        <div className="heading flex mb-1" style={{ alignItems: "center" }}>
          <div className="title font-bold text-lg mr-2">Zach Latta</div>
          <div
            className={`label bg-${color} text-white py-1 px-2 rounded text-sm`}
            style={{ textTransform: "uppercase" }}
          >
            Executive Director
          </div>
        </div>
        <div className="description leading-normal text-grey-darker text-sm">
          Zach dropped out of high school after his freshman year to work in the
          technology industry and had over 5 million people using his software
          by the time he turned 17. He founded Hack Club to build the program he
          wish he had in high school and has been awarded the Thiel Fellowship
          and Forbes 30 Under 30 for his work.
        </div>
      </div>
    </div>
  )
}
