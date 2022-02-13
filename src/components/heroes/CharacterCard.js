import React from 'react'
import { Link } from 'react-router-dom'

export const CharacterCard = ({

    name,
    biography,
    appearance,
    image

}) => {

    const {url} = image;
    const full_name = biography["full-name"];
    const first_appearance = biography["first-appearance"]
    const {race} = appearance;

    return (
        <div className="card mb-4" style={{ maxWidth: 580 }}>
          <div className="row no-gutters">

            <div className="col-md-6">
                <img 
                    src={url} 
                    className="card-img " 
                    alt={name} />
            </div>

            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title text-center m-0"> {name} </h5>

                    <p className="card-text">
                        <small className="text-muted"> {full_name} </small>
                    </p>

                    <p className="card-text">
                        <small className="text-muted"> {race} </small>
                    </p>

                    <p className="card-text mb-1">
                        <small className="text-muted"> {first_appearance} </small>
                    </p>

                    <Link to={`/character/${name}`}>
                        <i className="bi bi-arrow-right-square-fill"></i>
                    </Link>

                </div>
            </div>

          </div>
        </div>
    )
}
