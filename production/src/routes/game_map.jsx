import IMAGES from '../images/Images';

export default function Game_Map() {
    return (
        <div className="parentLayer">
            <img src={IMAGES.layer1}/>
            <div className="childLayer"><img src={IMAGES.layer2}/></div>
            <div className="childLayer"><img src={IMAGES.layer3}/></div>
            <div className="childLayer"><img src={IMAGES.layer4}/></div>
            <div className="childLayer"><img src={IMAGES.layer5}/></div>
            <div className="childLayer"><img src={IMAGES.layer6}/></div>
            <div className="childLayer"><img src={IMAGES.layer7}/></div>
            <div className="childLayer"><img src={IMAGES.layer8}/></div>
            <div className="childLayer"><img src={IMAGES.layer9}/></div>
            <div className="childLayer"><img src={IMAGES.layer10}/></div>
            <div className="childLayer"><img src={IMAGES.layer11}/></div>
            <div className="childLayer"><img src={IMAGES.layer12}/></div>
            <h1> this is the map page</h1>
        </div>
    );
}