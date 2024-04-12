import { useState } from "react";
import styled from "styled-components";

export function Tabs() {
    const [activetab, setactivetab] = useState(0);
    const select = (index) => {
        setactivetab(index);
    };
    return (
        <Container activetab={`${activetab}00%`}>
            <ul className="tabs">
                <li className={activetab == 0 ? "active" : ""} onClick={() => select(0)}>
                    Assault
                </li>
                <li className={activetab == 1 ? "active" : ""} onClick={() => select(1)}>
                    Skirmisher
                </li>
                <li className={activetab == 2 ? "active" : ""} onClick={() => select(2)}>
                    Recon
                </li>
                <li className={activetab == 3 ? "active" : ""} onClick={() => select(3)}>
                    Controller
                </li>
                <li className={activetab == 4 ? "active" : ""} onClick={() => select(4)}>
                    Support
                </li>
                <span className="indicator"></span>
            </ul>

            <div className="tab-content">
                {activetab === 0 && <h1>Ashe</h1>}
                {activetab === 1 && <h1>Tab 2</h1>}
                {activetab === 2 && <h1>Tab 3</h1>}
                {activetab === 3 && <h1>Tab 4</h1>}
                {activetab === 4 && <h1>Tab 5</h1>}

            </div>
        </Container>
    );
}

const Container = styled.div`
position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 30%;
    background-color: #242424;
    padding: 20px;
    color: #0f0f0f;
    
    .tabs{
        list-style: none;
        display: flex;
        box-shadow: 0px 10px 20px -3px rgba(0, 0, 0, 0.1);
        background-color: #000;
        position: relative;
        border-radius: 100px;
        justify-content: space-between;
        top: 0;
        left: 0;
        color: white;
    
        .tab-content{
            position: relative;
            border-radius: 6px;
            margin-top: 20px;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3rem;
        }
    
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 54px;
            width: 150px;
            font-size: 1.25rem;
            font-weight: 500;
            cursor: pointer;
            z-index: 2;
        }
    
        .indicator{
            position: absolute;
            display: flex;
            height: 54px;
            width: 150px;
            background-color: #7425CF;
            z-index: 1;
            border-radius: 99px;
            transition: 0.25s ease-out;
            box-shadow: 0px 10px 20px -3px #7425CF;
            transform: translateX(${(props) => props.activetab});
        }
    }
`;