/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './AddToy.css'
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import hero from '../../assets/hero.json'
import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const [selectedOption, setSelectedOption] = useState(null);
    useTitle('Add Toy');
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        // data.sub_category = selectedOption;
        
        fetch(" https://super-kid-server.vercel.app/addToy", {
          method: "POST",
          headers: { 
            "content-type": "application/json" 
        },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
           
          });
        console.log(data);
        {
            data && 
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Toy added successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }

    }

    // const options = [
    //     { value: "Avenger End game part-2", label: "Avenger End game part-2" },
    //     { value: "Dead pool-2", label: "Deal pool-2" },
    //     { value: "Civil war-2", label: "Civil war-2 " },
    //     { value: "Dragon ball super-2", label: "Dragon ball super-2" },

    // ];

    return (
        <div>
            <h2 className='text-center text-muted fw-bold my-5'>Add A Toy</h2>
            <div className="container">
                <div className=" row">
                    <div className="col-sm-12 col-md-8 gap-4">
                    
                     <form onSubmit={handleSubmit(onSubmit)}>
                        

                     <input
                            className="text-input shadow-lg"
                            {...register("name")}
                            placeholder="Toy Name"
                            defaultValue="Iron man"
                        />
                        <input
                            className="text-input shadow-lg"
                            {...register("seller_name")}
                            placeholder="Seller Name"

                        />

                        <input
                            className="text-input shadow-lg"
                            value={user?.email}
                            {...register("email")}
                            placeholder="your email"
                            type="email"
                        />
                        <input
                            className="text-input shadow-lg"
                            {...register("picture")}
                            placeholder="image link"
                            type="url"
                            defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                        />
                        <input
                            className="text-input shadow-lg"
                            {...register("price", { required: true })}
                            placeholder="price"

                        />
                        <select className="text-input shadow-lg" {...register("category")}>
                            <option value="Marvel">Marvel</option>
                            <option value="X-men">X-men</option>
                            <option value="Dragon ball">Dragon ball</option>
                        </select>
                        <input
                            className="text-input shadow-lg"
                            {...register("sub_category")}
                            placeholder="sub_category"

                        />
                        <input
                            className="text-input shadow-lg"
                            {...register("available_quantity")}
                            placeholder="available_quantity"

                        />
                        
                        <input
                            className="text-input shadow-lg w-25 h-25"
                            {...register("detail_description")}
                            placeholder="detail_description"
                        />
                        <input
                            className="text-input shadow-lg"
                            {...register("rating", { required: true })}
                            placeholder="rating"
                            type="float"
                        />

                        <input className="submit-btn" value="Add Toy" type="submit" />
                     </form>

                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Lottie animationData={hero} loop={true} />;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToy;