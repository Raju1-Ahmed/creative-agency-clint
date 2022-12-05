import { useNavigate } from "react-router-dom";


const Service = ({ service }) => {
    const {_id,name, image, description, price } = service;
    const navigate = useNavigate();
    const navigateTo = id =>{
        navigate(`/addtocard/${id}`);
    }
    return (
        <div class="card overflow lg:w-96 md:w-full sm:w-full bg-base-100 ml-1 shadow-xl">
            <button onClick={ ()=> navigateTo(_id)}>
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="badge badge-accent badge-outline">$ {price}</div>
            </div>
            </button>
        </div>
    );
}

export default Service;