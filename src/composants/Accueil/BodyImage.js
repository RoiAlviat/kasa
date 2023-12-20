import img from "../assets/img/IMG.png"

function BodyImage() {
    return (
        <div className="background-body">
        <img className="background-image" src={img}></img>
        <span className="background-text">Chez vous, et partout ailleurs</span>
        </div>
    )
}

export default BodyImage