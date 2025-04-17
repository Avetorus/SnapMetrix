import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function App() {
  const navigate = useNavigate();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="UI-design">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="container">
            <div className="teks">
              <div className="text-wrapper">{formattedDate}</div>
              <div className="div">Introducing SnapMatrix</div>
              <p className="p">
                Make it easy to check the nutritional content of any food or
                drink. Simple, fast and smart.
              </p>
            </div>

            <div className="group-button">
              <a 
                className="button"
                href="https://caloriesmonkey.streamlit.app/Analyze" // Replace with your external link
                target="_blank" // This will open the link in a new tab
                rel="noopener noreferrer" // Security measure for opening external links
              >
                <div className="text-wrapper-2">Try it now</div>
              </a>

              <a 
                className="div-wrapper"
                href="https://caloriesmonkey.streamlit.app/About" // Replace with your external link
                target="_blank" // This will open the link in a new tab
                rel="noopener noreferrer" // Security measure for opening external links
              >
                <div className="text-wrapper-3">Learn More</div>
              </a>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            ©Mikroskil {currentDate.getFullYear()}
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
