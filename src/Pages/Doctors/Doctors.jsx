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
            <div>
                {doctors.map((doctor) => (
                    <Link to={`/doctor/${doctor.id}-${doctor.firstname}-${doctor.lastname}`} key={doctor.id}>
                        <img src={doctor.image} alt={doctor.firstname} />
                        <div>
                            <h2>{doctor.firstname} {doctor.lastname}</h2>
                            <h2>{doctor.phone}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        
    );
};

export default Doctors;