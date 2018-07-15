import React from "react"

export function Card({ name, color, image, description, role }) {
  return (
    <div
      className={`container bg-${color}-lightest rounded-lg p-5 flex w-64`}
      style={{ width: "30rem" }}
    >
      <div className="image">
        <img
          src={image}
          className="rounded-full"
          style={{ width: "20rem" }}
          alt="Zach profile pic"
        />
      </div>
      <div className="text-container ml-3 font-sans">
        <div className="heading flex mb-1" style={{ alignItems: "center" }}>
          <div className="title font-bold text-lg mr-2">{name}</div>
          <div
            className={`label bg-${color} text-white py-1 px-2 rounded text-3`}
            style={{ textTransform: "uppercase" }}
          >
            {role}
          </div>
        </div>
        <div className="description leading-normal text-grey-darker text-sm">
          {description}
        </div>
      </div>
    </div>
  )
}
