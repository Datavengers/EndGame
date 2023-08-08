import IMAGES from '../assets/images/Images';
import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import MapSVG from "../assets/images/mapSVG"
import Nodeman from "../assets/images/nodeman"
import Skeleton from '@mui/material/Skeleton';
import React,{ useState } from 'react';


export default function Game_Map() {
    {/*required stuff to make the waves exist*/}
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      }

      const [loaded, setLoaded] = useState(false);

    return (
        <> 
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
                        // move:{
                        //     direction:"none",
                        //     enable:true,
                        //     outModes:{
                        //         default:"bounceHorizontal",
                        //     },
                        //     random:false,
                        //     speed:1,
                        //     straight:false,
                        // },
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
                            minimumValue: 0.3,
                        },
                        value: 2,
                        },
                        shape: {
                        type: 'triangle',                
                        },
                        size: {
                        random: {
                            enable: true,
                            minimumValue: 6,
                        },
                        value: 4
                        }
                    }
                }}
                />  
            </div>
            {/*island*/}
            <div className="parentLayer">
            {loaded ? null : 
                <div id="loadingDiv" style={{marginLeft:150}}>
                    <Skeleton variant="circular" width={120 + 'vh'} height={80 +'vh'}/>
                </div>
            }
                <img className="mapImg" src={IMAGES.layer1 } style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer2} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer3} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer4} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer5} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer6} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer7} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer8} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer" id="train"><img className="mapImg" src={IMAGES.train} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer10} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer11} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer12} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer13} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer14} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer15} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer16} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer"><img className="mapImg" src={IMAGES.layer17} style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                <div className="childLayer">
                    <div className="svgContainer"><MapSVG style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/></div>
                </div>
                <div className="childLayer" id="nodeman">
                    <Nodeman id="nodemanSVG" style={loaded ? {}:{display: 'none'}} onLoad={() =>setLoaded(true)}/>
                </div>
            </div>
        </div>
        </>
    );
}