import React from 'react'

import Button from 'elements/Button'
import IconText from 'parts/iconText'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg col-sm-12 col-md-6 mb-2">
                        <IconText></IconText>
                        <p className="brand-tagline">
                            We kaboom your beauty holiday
                            instantly and memorable.
                        </p>
                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 mr-5 mb-2">
                        <h6 className="mt-2">
                            For Beginners
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 mr-5 mb-2">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/careers">Our Careers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-6 mb-2">
                        <h6 className="mt-2">
                            Connect Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/mailto:support@staycation.id">support@staycation.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="/tel:+622122081996">021 - 2208 - 1996</Button>
                            </li>
                            <li className="list-group-item">
                                <span>Staycation, Kemang, Jakarta</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col text-center copyright">
                    Copyright 2019 • All rights reserved • Staycation
                </div>
            </div>
        </footer>
    )
}
