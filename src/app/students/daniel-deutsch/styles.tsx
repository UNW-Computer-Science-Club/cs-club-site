"use client";

export default function GlobalStyles() {
  return (
    <style jsx>
      {`
        body {
          font-family: Arial, sans-serif;
          background-color: #121212;
          color: #e0e0e0;
          margin: 0;
          padding: 0;
          line-height: 1.6;
        }

        /* Paragraph Styling */
        p {
          font-size: 1rem;
          margin: 10px 0;
          text-indent: 20px;
          letter-spacing: 0.5px;
        }

        mark {
          background-color: #cf6679;
          color: #fff;
          padding: 2px 5px;
          border-radius: 4px;
        }
        figure {
          text-align: center;
        }

        figcaption {
          font-size: 0.9rem;
          margin-top: 5px;
        }
      `}
    </style>
  );
}
