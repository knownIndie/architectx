"use client";

export default function Products() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;600&family=DM+Mono:wght@400;500&display=swap');

        .pc-section {
          background-color: #EDEAE3;
          width: 100%;
          min-height: 760px;
          position: relative;
          padding: 28px 44px 80px 44px;
          box-sizing: border-box;
          font-family: 'DM Sans', sans-serif;
        }

        /* ◆ PRODUCT COLLECTION — top left */
        .pc-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #1a1a1a;
          margin-bottom: 0;
        }

        /* Thin rule under label */
        .pc-rule {
          width: 100%;
          height: 1px;
          background-color: #c8c5be;
          margin: 18px 0 0 0;
        }

        /* Main content row */
        .pc-body {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          margin-top: 88px;
          gap: 0;
        }

        /* Left spacer to push image to center-left */
        .pc-left-spacer {
          flex: 1;
          min-width: 0;
        }

        /* Portrait image container */
        .pc-image-wrap {
          position: relative;
          width: 420px;
          height: 510px;
          flex-shrink: 0;
          overflow: hidden;
          background: #2a2520;
        }

        .pc-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* "Doors" label overlaid on image */
        .pc-image-title {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          font-size: 36px;
          letter-spacing: 0.01em;
          pointer-events: none;
          white-space: nowrap;
        }

        /* Right content block */
        .pc-right {
          flex-shrink: 0;
          width: 300px;
          margin-left: 100px;
          padding-top: 110px; /* vertically aligns text to image mid-area */
        }

        .pc-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #1a1a1a;
          margin: 0 0 48px 0;
          letter-spacing: -0.01em;
        }

        .pc-desc strong {
          font-weight: 600;
        }

        .pc-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #1a1a1a;
          color: #EDEAE3;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 15px 22px;
          border: none;
          cursor: pointer;
          transition: background-color 0.25s ease;
          white-space: nowrap;
        }

        .pc-btn:hover {
          background-color: #333;
        }

        /* Right trailing spacer */
        .pc-right-spacer {
          flex: 0.4;
          min-width: 0;
        }
      `}</style>

      <section className="pc-section">

        {/* ◆ PRODUCT COLLECTION — top left */}
        <div className="pc-label">
          <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor">
            <path d="M3.5 0L4.55 2.45L7 3.5L4.55 4.55L3.5 7L2.45 4.55L0 3.5L2.45 2.45L3.5 0Z" />
          </svg>
          Product Collection
        </div>

        {/* Thin horizontal rule */}
        <div className="pc-rule" />

        {/* Main body */}
        <div className="pc-body">

          {/* Left spacer */}
          <div className="pc-left-spacer" />

          {/* Portrait image */}
          <div className="pc-image-wrap">
            {/* Replace src with your actual image path */}
            <img
              src="/images/doors.jpg"
              alt="Doors product"
            />
            {/* "Doors" text centered on image */}
            <span className="pc-image-title">Doors</span>
          </div>

          {/* Right text + button */}
          <div className="pc-right">
            <p className="pc-desc">
              Our <strong>glazing collection</strong> is defined by
              exceptional craftsmanship, refined design, and enduring
              quality. Made for bold architecture and uncompromising vision.
            </p>

            <button className="pc-btn">
              {/* ↳ arrow */}
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5V6.5H11.5M11.5 6.5L7.5 2.5M11.5 6.5L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Product Overview
            </button>
          </div>

          {/* Right spacer */}
          <div className="pc-right-spacer" />

        </div>
      </section>
    </>
  );
}