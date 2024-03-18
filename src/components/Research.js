import React from 'react'
import '../styles/research.css';
import ToolTip from './ToolTip';


export default function Research() {


  
  return (
    <div>
    <div  id="tree">
      <div className="branch">
        <div className="entry">
          <span>Research</span>
          <div className="tip-hover">
            <ToolTip title={"Research"} />
          </div>

          <div className="branch">
            <div className="entry">
              <span>External</span>
              <div className="tip-hover">
                <ToolTip title={"External"} />
              </div>
              <div className="branch">
                <div className="entry">
                  <span>B2C</span>
                  <div className="tip-hover">
                    <ToolTip title={"B2C"} />
                  </div>
                  <div className="branch">
                    <div className="entry">
                      <span>Online</span>
                      <div className="tip-hover">
                        <ToolTip title={"Online"} />
                      </div>
                    </div>
                    <div className="entry">
                      <span>Interview</span>
                      <div className="tip-hover">
                        <ToolTip title={"Interview"} />
                      </div>
                    </div>
                    <div className="entry">
                      <span>Public Data</span>
                      <div className="tip-hover">
                        <ToolTip title={"Public Data"} />
                      </div>
                    </div>
                    <div className="entry">
                      <span>Health</span>
                      <div className="tip-hover">
                        <ToolTip title={"Health"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="entry">
                  <span>B2C</span>
                  <div className="tip-hover">
                    <ToolTip title={"B2C"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="entry">
              <span>Internal</span>
              <div className="tip-hover">
                <ToolTip title={"Internal"} />
              </div>
            </div>
          </div>
        </div>
        <div className="entry">
          <span>Planning</span>
          <div className="tip-hover">
            <ToolTip title={"Planning"} />
          </div>
          <div className="branch">
            <div className="entry">
              <span>PRD</span>
              <div className="tip-hover">
                <ToolTip title={"PRD"} />
              </div>
            </div>
            <div className="entry">
              <span>Specs</span>
              <div className="tip-hover">
                <ToolTip title={"Specs"} />
              </div>
            </div>
          </div>
        </div>

        <div className="entry">
          <span>Designing</span>
          <div className="tip-hover">
            <ToolTip title={"Designing"} />
          </div>
          <div className="branch">
            <div className="entry">
              <span>Hardware</span>
              <div className="tip-hover">
                <ToolTip title={"Hardware"} />
              </div>
            </div>
            <div className="entry">
              <span>Software</span>
              <div className="tip-hover">
                <ToolTip title={"Software"} />
              </div>
            </div>
          </div>
        </div>
        <div className="entry">
          <span>Manufacturing</span>
          <div className="tip-hover">
            <ToolTip title={"Manufacturing"} />
          </div>
          <div className="branch">
            <div className="entry">
              <span>Material</span>
              <div className="tip-hover">
                <ToolTip title={"Material"} />
              </div>
            </div>
            <div className="entry">
              <span>Production</span>
              <div className="tip-hover">
                <ToolTip title={"Production"} />
              </div>
            </div>
          </div>
        </div>
        <div className="entry">
          <span>Sales/Marketing</span>
          <div className="tip-hover">
            <ToolTip title={"Sales/Marketing"} />
          </div>
          <div className="branch">
            <div className="entry">
              <span>Online</span>
              <div className="tip-hover">
                <ToolTip title={"Online"} />
              </div>
            </div>
            <div className="entry">
              <span>Dealership</span>
              <div className="tip-hover">
                <ToolTip title={"Dealership"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

