import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button'

export default function MostPicked(props) {
    return (
        <section className="container" ref={props.refMostPicked}>
            <Fade bottom>
            <h4 className="mb-3">
                Most Picked
            </h4>
            <div className="container-grid">
                {
                    props.data.map((item, index)=>{
                        return(
                            <Fade bottom delay={250 * index}>
                            <div key={`mostpicked- ${index + 1}`} className={`item column-4${index === 0 ? " row-2" : " row-1"}`}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        ${item.price}
                                        <span className="font-weight-light"> per {item.unit}</span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button type="link" className="stretched-link d-block text-white" href={`/properties/${item._id}`}>
                                            <h5>{item.name}</h5>
                                        </Button>
                                        <span>
                                            {item.city}, {item.country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        )
                    })
                }
                {/* <div className="item column-4 row-2">
                    <div className="card">
                        card 1
                    </div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 3</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 4</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">card 5</div>
                </div> */}
            </div>
            </Fade>
        </section>
    )
};
{/* <div className="container">
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="card h-100">card</div>
        </div>
        <div className="col-lg-8 col-md-4 col-sm-12 col-xs-12">
            <div className="row mb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">card</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">card</div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">card</div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card">card</div>
                </div>
            </div>
        </div>
    </div>
</div> */}
