
import '../styles/Doctor.css'
export const Doctor = ({ img, name, speciality }) => {


    return (
        <div>
            <div class="doctor_card" id='doctros'>     
                <div class="doctor_img">
                    <img  src={img}/>
                </div>
                <div className="desc">
                    <h5 class="name">{name}</h5>
                    <p class="text">{speciality}</p>
                </div>
            </div>
        </div>
    )
}