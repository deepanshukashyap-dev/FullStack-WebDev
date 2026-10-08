import React from "react";
function Card({username,image}) {//component has the access of props
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black ">
      <div>
        <img
          src={image}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h3 className="font-bold ">{username}</h3>
        </div>
      </div>
    </div>
  )
}
export default Card