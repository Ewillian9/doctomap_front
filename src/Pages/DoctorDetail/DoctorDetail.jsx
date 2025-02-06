import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const DoctorDetail = () => {
    const [detail, setDetail] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getDetail();
    }, [])

    const getDetail = async () => {
        try {
            const response = await fetch(`https://127.0.0.1:8000/api/doctors/${id}`);

            const data = await response.json();
            setDetail(data);
        } catch (error) {
            console.error(error)
        }
    }
    return (
        
        <div className="doctors">
            <nav>
                <NavLink to="/doctors">Retour a la liste</NavLink>
            </nav>
            <div>
                <img src={detail.image} alt={detail.firstname} />
                <div>
                    <h2>{detail.firstname} {detail.lastname}</h2>
                    <h2>{detail.speciality}</h2>
                    <h2>{detail.phone}</h2>
                    <h2>{detail.address}, {detail.city}, {detail.zip}</h2>
                </div>
            </div>
        </div>
        
    );
};

export default DoctorDetail;