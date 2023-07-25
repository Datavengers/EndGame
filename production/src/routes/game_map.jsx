import IMAGES from '../images/Images';
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import SvgComponent from "../images/mapSVG"

export default function Game_Map() {
    {/*required stuff to make the waves exist*/}
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      }

    return (
        <div id="mapWrapper">
            {/* ocean waves */}
            <div id="particles-js">
                <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: '#2ba3f5',
                    },
                    fpsLimit: 20,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                        resize: true,
                        },
                    },
                    particles: {
                        color: {
                        value: "#ffffff"
                        },
                        number: {
                        density: {
                            enable: false,
                            area:1080
                        },
                        limit: 0,
                        value: 500,
                        },
                        opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.5,
                            speed: 4,
                            sync: true,
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.2,
                        },
                        value: 2,
                        },
                        shape: {
                        type: 'triangle',
                
                        },
                        size: {
                        random: {
                            enable: true,
                            minimumValue: 5,
                        },
                        value: 2
                        }
                    }
                }}
                />  
            </div>
            {/*island*/}
            <div className="parentLayer">
                <img className="mapImg" src={IMAGES.layer1}/>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer2}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer3}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer4}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer5}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer6}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer7}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer8}/></div>
                <div className="childLayer" id="train"><img className="mapImg" src={IMAGES.train}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer10}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer11}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer12}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer13}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer14}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer15}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer16}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer17}/></div>
                <div className="childLayer">
                    <div className="svgContainer"><SvgComponent/></div>
                </div>
            </div>
        </div>
    );
}