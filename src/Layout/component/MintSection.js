import React from "react";
import MintImg from "../../assets/images/Snake-Guy.webp";

export default function MintSection() {
  return (
    <div className="mint-wrapper">
      <div className="mint-section content-container">
        <div className="mint-img">
          <img src={MintImg} alt="mint dragon image" />
          <button className="mint-dragon-btn">Mint</button>
        </div>
        <div className="mint-description">
          <h2>MINT</h2>
          <p class="font_8">
            <span>
              <span>Mint a Alpha&nbsp;</span>
            </span>
            <span>Dragon</span>
          </p>
          <p class="font_8">
            <br />
            <span>
              <span>
                Minting a Dragon will cost 0.55 SOL.
                <br />
                <br />
                It is recommended that you have an additional
              </span>
            </span>
          </p>
          <p class="font_8">
            <span>
              <span>0.05 SOL for gas fees.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
