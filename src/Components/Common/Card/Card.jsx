import React from 'react'

const Card = ({img, title, desc }) => {
  return (
    <div className="card card-compact bg-base-100 md:w-90 w-full shadow-xl">
        <figure>
            <img
            src={img}
            alt={title} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
            <div className="card-actions justify-end pt-4">
              <button className="btn btn-primary">Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Card