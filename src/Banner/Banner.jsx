import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="product-image">
                <img src="https://iva-theme.myshopify.com/cdn/shop/files/bg-img_770x.png?v=1613698929" alt="Cosmetic Tube" className="product-img" />
                <img src="https://iva-theme.myshopify.com/cdn/shop/files/bg-img_770x.png?v=1613698929" alt="Cosmetic Round Container" className="product-img" />
            </div>
            <div className="product-info">
                <div className="info-item">
                    <img src="https://iva-theme.myshopify.com/cdn/shop/files/bg-img_770x.png?v=1613698929" alt="Icon" className="info-icon" />
                    <div>
                        <h3>Organic Cream</h3>
                        <p>First or Last all day and gives you smooth gentle skin.</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src="path/to/icon2.png" alt="Icon" className="info-icon" />
                    <div>
                        <h3>Quality Assurance</h3>
                        <p>Each product is certified by our quality control.</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src="path/to/icon3.png" alt="Icon" className="info-icon" />
                    <div>
                        <h3>Toxin Free</h3>
                        <p>It enhances your beauty without damaging it.</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src="path/to/icon4.png" alt="Icon" className="info-icon" />
                    <div>
                        <h3>Natural Extracts</h3>
                        <p>Natural colors, functionality, and nutritional substances.</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src="path/to/icon5.png" alt="Icon" className="info-icon" />
                    <div>
                        <h3>Perfect Blend</h3>
                        <p>Natural Aloe Vera, honey, papaya, pulp, argan oil...</p>
                    </div>
                </div>
                <div className="info-item">
                    <img src="path/to/icon6.png" alt="Icon" className="info-icon" />
                    <div>
                        <h3>Natural Aroma</h3>
                        <p>Pleasant aroma of natural fragrance oils.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
