import React from 'react'
import "./prices.css";

const Prices = () => {
  return (
    <div className="ecg__prices-container__padding" id="prices">
        <div className="package">
            <div className="name">Classical</div>
            <div className="price">€2</div>
            <div className="trial">Available for a month</div>
            <ul>
                <li>
                    <strong>8</strong> team members
                </li>
                <li>
                    <strong>6</strong> team records
                </li>
                <li>
                    <strong>Unlimited</strong> public playlists
                </li>
            </ul>
        </div>
        <div className="package brilliant">
            <div className="name">Brilliant</div>
            <div className="price">€5</div>
            <div className="trial">Free 30 day trial</div>
            <ul>
                <li>
                    <strong>Unlimited</strong> team members
                </li>
                <li>
                    <strong>Unlimited</strong> team records
                </li>
                <li>
                    <strong>Unlimited</strong> public playlists
                </li>
                <li>
                    Team analytics
                </li>
                <li>
                    Send files
                </li>
            </ul>
        </div>
        <div class="package">
            <div className="name">Basic</div>
            <div className="price">€0</div>
            <div className="trial">Totally free</div>
            <ul>
                <li>
                    <strong>5</strong> team members
                </li>
                <li>
                    <strong>3</strong> team records
                </li>
                <li>
                    <strong>Unlimited</strong> public playlists
                </li>
            </ul>
        </div>
            </div>
  )
}

export default Prices
