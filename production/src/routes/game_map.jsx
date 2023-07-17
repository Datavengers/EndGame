import IMAGES from '../images/Images';

export default function Game_Map() {
    return (
        <div className="parentLayer">
            <img className="mapImg" src={IMAGES.layer1}/>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer2}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer3}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer4}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer5}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer6}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer7}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer8}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer9}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer10}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer11}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer12}/></div>
            <div className="childLayer"><img className="mapImg" src={IMAGES.layer13}/></div>
        </div>
    );
}