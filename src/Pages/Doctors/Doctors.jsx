import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, [])

    const getDoctors = async () => {
        try {
            const response = await fetch("https://127.0.0.1:8000/api/doctors");

            const data = await response.json();
            setDoctors(data.member);
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="doctors">
            {doctors.map((doctor) => (
                <div className="doctor-card" key={doctor.id}>
                    <Link to={`/doctor/${doctor.id}-${doctor.firstname}-${doctor.lastname}`} className="doctor-link">
                        <div className="doctor-image-container">
                            <img src={doctor.image} alt={`${doctor.firstname} ${doctor.lastname}`} className="doctor-image" />
                        </div>
                        <div className="info">
                            <h2 className="doctor-name">{doctor.firstname} {doctor.lastname}</h2>
                            <p className="doctor-phone">{doctor.phone}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div> 
    );
};

export default Doctors;